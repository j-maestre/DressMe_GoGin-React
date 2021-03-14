package prendas

import (
	// "fmt"
	"goApp/common"

)

//Create prenda
func CreatePrenda(data interface{}) error{
	db:=common.GetDB();
	err:=db.Create(data).Error
	return err
}

//Get all Prendas
func GetAllPrendas(data interface{}) error{
	db:=common.GetDB();
	err := db.Order("views desc").Find(data).Error
	return err;
}
//GET ONE prenda by ID
func GetPrendaById(data, id interface{}) error {
	db := common.GetDB()
	err := db.Where("id = ?", id).First(data).Error
	return err
}

//Get prendas byUser
func GetPrendaByUser(user uint64, data interface{}) error{
	db := common.GetDB();
	err := db.Where("User = ?", user).Find(data).Error

	return err
}




//Get Prendas By likes
func GetPrendasLiked(data interface{}) error{
	db:=common.GetDB();
	err := db.Order("views desc").Find(data).Error
	return err;
}
//Favorites count
func favoritesCount(prenda Prendas) uint {
	db := common.GetDB()
	var count uint
	db.Model(&FavoriteModel{}).Where(FavoriteModel{
		FavoriteID: prenda.Id,
	}).Count(&count)
	return count
}

//UPDATE prenda
func UpdatePrenda(data interface{}) error{
	db := common.GetDB()
	err := db.Save(data).Error
	return err
}

//DELETE
func DeletePrenda(data, id interface{}) error {
	db := common.GetDB()
	err := db.Where("id = ?", id).Delete(data).Error
	return err
}

