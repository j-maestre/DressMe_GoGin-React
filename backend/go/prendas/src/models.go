package prendas
import (
	// "github.com/jinzhu/gorm"
	// "goApp/common"
	// "fmt"
)


type Prendas struct {
	Slug        string
	User		uint     `json:"user"`
	Mark  		string   `json:"mark"`
	Price 		string   `json:price`
	Type  		string   `json:type`
	Size    	string   `json:size`
	Color       string   `json:color`
	Gender		string   `json:"gender"`
	Season      string	 `json:"season"`
	Description string   `json:"description"`
	Rating 		uint   	 `json:"rating"`
}

//TODO añadir modelo de la Mark para añadirle la foreing key

type User struct {
	ID           uint    `gorm:"primary_key"`
	Username     string  `gorm:"column:username"`
	Email        string  `gorm:"column:email; unique_index"`
	Bio          string  `gorm:"column:bio; size:1024"`
	Image        *string `gorm:"column:image"`
	PasswordHash string  `gorm:"column:password; not null"`
	Type		 string	 `gorm:"column:type;" default:'client'`
}
