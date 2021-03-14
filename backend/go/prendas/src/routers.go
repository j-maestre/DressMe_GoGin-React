package prendas

import (
	"fmt"
	"errors"
	"goApp/common"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
	// "reflect"
)


//"fmt"    "encoding/json"  
// "strconv" para los coments
//	"io" "strings"
//	"net/http"
//	"io/ioutil"

func PrendasRegister(router *gin.RouterGroup) {
	router.POST("/", PrendaCreate)
	router.PUT("/:id", PrendaUpdate)
	router.DELETE("/:id", PrendaDelete)
	router.POST("/:id/favorite", PrendaFavorite)
	router.POST("/:id/unfavorite", PrendaUnFavorite)
	router.GET("/:id/user", PrendasUser)
}

func PrendasAnonymousRegister(router *gin.RouterGroup) {
	router.GET("/", PrendaList)
	router.GET("/:id", PrendaById)  
	router.GET("/:id/liked", FavoritesCount)

}	

// router.GET("/:id/comments", PrendaCommentList)

func PrendaCreate(c *gin.Context){
	var prenda Prendas
	c.BindJSON(&prenda);

	myUserModel := c.MustGet("my_user_model").(User)
	prenda.User = myUserModel.ID; 
	
	err:=CreatePrenda(&prenda)

	if err != nil{
		c.AbortWithStatus(http.StatusNotFound)
	}else{
		c.JSON(http.StatusOK, gin.H{"prenda":prenda})
		return
	}
}


//List Prendas
func PrendaList(c *gin.Context) {
	var prenda []Prendas

	//Busca las prendas y mete el resultado en la var prenda
	err := GetAllPrendas(&prenda)
	
	if err != nil {
		c.JSON(http.StatusOK, "Not found")
		c.AbortWithStatus(http.StatusNotFound)
	}else{

		c.JSON(http.StatusOK, gin.H{"prendas": prenda})
	}
}

///////// Find ONE
func PrendaById(c *gin.Context) {
	id := c.Params.ByName("id")	

	var prenda Prendas
	err := GetPrendaById(&prenda, id)

	if err != nil {
		c.JSON(http.StatusOK, "Prenda Not Found")
		c.AbortWithStatus(http.StatusNotFound)
		return
	}else{
		err := VisitDisco(prenda)
		if err != nil{
			c.JSON(http.StatusOK, "Prenda Visit Fail")
			c.AbortWithStatus(http.StatusNotFound)
			return
		}else{
			prenda.Views ++;

			//Pillar los favoritos y si tiene o no por el user aqui
			myUserModel := c.MustGet("my_user_model").(User) //Usuario que da like
			count := favoritesCount(prenda)
			prenda.Likes=count;

			var eventsDisco []Events;
			// //Pasamos id a uint 64
			u, err := strconv.ParseUint(id, 10, 64)
			fmt.Println(err)

			eventsDisco = GetEventsDisco(uint(u))
			prenda.Events = eventsDisco;
			
			if len(myUserModel.Username) > 1{//Hay usuario logueado
				//Ver si le ha dado like a la prenda
				liked := isFavoriteBy(prenda,myUserModel)
				prenda.Liked=liked;

				//Devolvemos la prenda, el total de likes, si le ha dado like el user y los eventos de esa prenda
				c.JSON(http.StatusOK, gin.H{"prenda":prenda})
				return
			
			}else{//No hay usuario logueado
				c.JSON(http.StatusOK, gin.H{"prenda": prenda})
				return
			}
			
		}
		
	}
}
////////

//Get favorites count of a prenda
func FavoritesCount(c *gin.Context) {  //Podemos pasarle bearer o no, si no lo pasamos es porque no está logueado entonces no marca si 
	var prenda Prendas		   //le ha dado like o no. Si le pasamos bearer es que está logueado, entonces nos dirá si le ha dado
	id := c.Params.ByName("id")		   //like o no le ha dado
	

	err := GetPrendaById(&prenda, id)

	if err != nil{//Prenda no valida
		c.JSON(http.StatusNotFound, "Prenda Not found")
	 	c.AbortWithStatus(http.StatusNotFound)
	}else{

		myUserModel := c.MustGet("my_user_model").(User) //Usuario que da like
		count := favoritesCount(prenda)

		if len(myUserModel.Username) > 1{//Hay usuario logueado

			//Ver si le ha dado like a la prenda
			liked := isFavoriteBy(prenda,myUserModel)

			//Devolvemos el total de likes y si le ha dado like el user
			c.JSON(http.StatusOK, gin.H{"Total": count, "liked":liked})
		
		}else{//No hay usuario logueado, devolvemos el count de likes
			c.JSON(http.StatusOK, gin.H{"Total": count})
		}
		
	}
}

//UPDATE prenda

func PrendaUpdate(c *gin.Context){
	var prenda Prendas
	var newPrenda Prendas
	c.BindJSON(&newPrenda);  //Aqui en teoria está la prenda que le hemos pasado por postman

	id := c.Params.ByName("id")
	err := GetPrendaById(&prenda, id) 

	prenda.Name = newPrenda.Name


	if err != nil { 
		c.JSON(http.StatusNotFound, "NOT FOUND")
	}else{ 
		c.BindJSON(&prenda)
		err = UpdatePrenda(&prenda)//&prenda  Aqui hay que meterle la prenda nueva, con el c.BingJSON pero no me hace el json de la nueva
		if err != nil {
			c.JSON(http.StatusOK, "Not found")
			c.AbortWithStatus(http.StatusNotFound)
		} else {
			c.JSON(http.StatusOK, gin.H{"prenda": prenda})
			return
		}
	}

}


//DELETE prenda
func PrendaDelete(c *gin.Context){
	var prenda Prendas
	id := c.Params.ByName("id")

	err := DeletePrenda(&prenda, id)

	if err != nil{
		c.JSON(http.StatusNotFound, common.NewError("prendas", errors.New("Invalid id")))
		return
	}
	
	//Borrar discoreca de redis
	client := common.NewClient()
	err2 :=  common.DeleteDiscoRedis(id,client)

	if err2 != nil{
		fmt.Println("Error deleting redis");
	}


	c.JSON(http.StatusOK, gin.H{"prenda": "Delete Prenda"})

}


//////Favorite
func PrendaFavorite(c *gin.Context){
	id := c.Params.ByName("id")
	var prenda Prendas

	err := GetPrendaById(&prenda, id)//Prenda a la que le damos like

	if err != nil {
		c.JSON(http.StatusNotFound, common.NewError("prendas", errors.New("Invalid id")))
		return
	}

	myUserModel := c.MustGet("my_user_model").(User) //Usuario que da like


	err2 := favoriteBy(myUserModel,prenda)
	if err2 != nil{
		fmt.Println("ERROR like: ",err2)
	}

	//Enviar a redis los datos del user y la prenda que da like
	
	client := common.NewClient()
	err3 := common.SaveUserLike(myUserModel.ID, strconv.FormatUint(uint64(prenda.Id), 10),client)

	if err3 != nil{
		fmt.Println("ERRor redis userlike ",err3)
	}

	c.JSON(http.StatusOK, gin.H{ "User":myUserModel,"Disco":prenda})
}

//UNFAVORITE
func PrendaUnFavorite(c *gin.Context){
	id := c.Params.ByName("id")
	var prenda Prendas

	err := GetPrendaById(&prenda, id)//Prenda a la que le damos like

	if err != nil {
		c.JSON(http.StatusNotFound, common.NewError("prendas", errors.New("Invalid id")))
		return
	}

	myUserModel := c.MustGet("my_user_model").(User) //Usuario que da like

	err2 := unFavoriteBy(myUserModel,prenda)
	if err2 != nil{
		fmt.Println("ERROR like: ",err2)
	}

	c.JSON(http.StatusOK, gin.H{ "User":myUserModel,"Disco":prenda})
}

//Get de las prendas creadas por un usuario
func PrendasUser(c *gin.Context){
	id := c.Params.ByName("id") //Id del usuario que queremos coger sus prendas
	var prendas []Prendas;

	user_id, err := strconv.ParseUint(id, 10, 32)

	if err != nil{
		fmt.Println("Error parse uint64 ", err)
	}

	myUserModel := c.MustGet("my_user_model").(User)
	my_User_id := uint64(myUserModel.ID)

	if user_id == my_User_id {

		err2 := GetPrendaByUser(user_id, &prendas) //Prendas del user

		if err2 != nil{
			fmt.Println("ERROR get user prendas ", err2)
		}else{
			c.JSON(http.StatusOK, gin.H{ "prendas":prendas})
		}

	}else{
		fmt.Println("Los ids no son iguales, OK")
		fmt.Println("ID que le paso en la url: ",user_id)
		fmt.Println("ID del myusermodel: ",my_User_id)
		c.JSON(http.StatusNotFound,  "Error id user")

	}
}