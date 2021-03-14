package prendas

import (
	// "fmt"
	// "errors"
	// "goApp/common"
	"github.com/gin-gonic/gin"
	"net/http"
	// "strconv"
	// "reflect"
)

func PrendasRegister(router *gin.RouterGroup) {
	router.POST("/", PrendaCreate)
	// router.PUT("/:id", PrendaUpdate)
	// router.DELETE("/:id", PrendaDelete)
	// router.POST("/:id/favorite", PrendaFavorite)
	// router.POST("/:id/unfavorite", PrendaUnFavorite)
	// router.GET("/:id/user", PrendasUser)
}

func PrendasAnonymousRegister(router *gin.RouterGroup) {
	router.GET("/", PrendaList)
	// router.GET("/:id", PrendaById)  
	// router.GET("/:id/liked", FavoritesCount)

}	

//*Create
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

//*List
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

//TODO Details