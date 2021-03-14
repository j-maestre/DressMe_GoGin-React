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
	//TODO ordenar por preferencia
	// err := db.Order("views desc").Find(data).Error
	err := db.Find(data).Error
	return err;
}
