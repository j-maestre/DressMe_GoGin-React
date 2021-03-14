package prendas
import (
	"github.com/jinzhu/gorm"
	"goApp/common"
	"fmt"
)
// "fmt"
// "github.com/jinzhu/gorm"
// "goApp/common"
//"fmt"   "errors"  "github.com/gin-gonic/gin"   "net/http"


type Prendas struct {
	Slug        string
	Mark  		string   `json:"mark"`
	Price 		string   `json:price`
	Typ  		string   `json:type`
	Size    	string   `json:size`
	Color       string   `json:color`
	Gender		string   `json:"gender"`
	Season      string	 `json:"season"`
	Description string   `json:"description"`
	Rating 		uint   `json:"rating"`
}

//TODO añadir modelo de la Mark para añadirle la foreing key


// type FavoriteModel struct {
// 	gorm.Model
// 	Favorite     Prendas
// 	FavoriteID   uint
// 	FavoriteBy   User
// 	FavoriteByID uint
// }

// type User struct {
// 	ID           uint    `gorm:"primary_key"`
// 	Username     string  `gorm:"column:username"`
// 	Email        string  `gorm:"column:email; unique_index"`
// 	Bio          string  `gorm:"column:bio; size:1024"`
// 	Image        *string `gorm:"column:image"`
// 	PasswordHash string  `gorm:"column:password; not null"`
// 	Type		 string	 `gorm:"column:type;" default:'client'`
// }

// type Events struct {
// 	Id            uint
// 	Name          string   `json:"name"`
// 	Description   string   `json:description`
// 	Start_date    string   `json:start_date`
// 	Start_time    string   `json:start_time`
// 	Entradas      uint     `json:entradas`
// 	Entradas_sold uint 	   `json:entradas_sold`
// 	Price 		  uint     `json:price`
// 	Consumicion   bool     `json:consumicion`
// 	Prenda     uint     `json:prenda`
// }


// type DiscoEventModel struct {
// 	gorm.Model
// 	Prenda     Prendas
// 	PrendaID   uint
// 	Event         Events
// 	EventID       uint
// }

func AutoMigrate() {
	db := common.GetDB()
	db.AutoMigrate(&FavoriteModel{})
}



//De momento no hace falta esta funcion porque pillo el usuario de myUserModel
func FindOneUser(condition interface{}) (User, error) {
	db := common.GetDB()
	var model User
	err := db.Where(condition).First(&model).Error
	return model, err
}


//LIKE
func favoriteBy(user User, prenda Prendas) error {
	db := common.GetDB()
	var favorite FavoriteModel
	err := db.FirstOrCreate(&favorite, &FavoriteModel{
		FavoriteID:   prenda.Id,
		FavoriteByID: user.ID,
	}).Error
	return err
}

//UNLIKE
func unFavoriteBy(user User, prenda Prendas) error {
	var unfavorite FavoriteModel
	db := common.GetDB()
	db.Where("favorite_id = ? AND favorite_by_id = ?", prenda.Id, user.ID).First(&unfavorite)
	err := db.Delete(unfavorite).Error
	return err
}

//Get los eventos de una prenda
func GetEventsDisco(id uint) []Events{
	var events []Events
	var eventModel Events
	db := common.GetDB()
	db.Model(eventModel).Where("prenda = ?", id).Find(&events)

	return events
	
}

//Is favorited
func isFavoriteBy(prenda Prendas,user User) bool {
	db := common.GetDB()
	var favorite FavoriteModel
	err := db.Where(FavoriteModel{
		FavoriteID:   prenda.Id,
		FavoriteByID: user.ID,
		// deleted_at:  null,
	}).First(&favorite).Error

	if err!=nil {
		fmt.Println("Error isfavorited ",err)
	} else {
		fmt.Println("IS FAVORITE--",favorite)
	}
	return favorite.ID != 0
}


//Add visit
func VisitDisco(prenda Prendas) error{
	db := common.GetDB()
	prenda.Views ++;
	err := db.Save(prenda).Error

	return err
}
