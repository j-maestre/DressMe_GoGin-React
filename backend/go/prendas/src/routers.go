package prendas

import (
	"fmt"
	// "errors"
	// "goApp/common"
	// "github.com/gosimple/slug"
	"github.com/gin-gonic/gin"
	"net/http"
	// "strconv"
	// "reflect"
)

func PrendasRegister(router *gin.RouterGroup) {
	router.POST("/", PrendaCreate)
}

func PrendasAnonymousRegister(router *gin.RouterGroup) {
	router.GET("/", PrendaList)
}	

//*Create
func PrendaCreate(c *gin.Context){
	var prenda Prendas
	c.BindJSON(&prenda);
	fmt.Println("PRENDA")
	fmt.Println(prenda)

	myUserModel := c.MustGet("my_user_model").(User)
	prenda.User = myUserModel.ID;

	//Create slug of a prenda Type
	slug := CreateSlug(prenda.Type, len(prenda.Type))
	prenda.Slug = slug
	
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
