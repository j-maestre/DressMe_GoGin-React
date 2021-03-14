package prendas

// import (
// 	"github.com/gin-gonic/gin"
// 	"goApp/common"
// )


// // Declare your response schema here
// type Prendas struct {
// 	Id          uint
// 	Name        string   `json:"name"`
// 	Company     string   `json:"company"`
// 	Views		int	     `json:"views"`
// }

// type PrendassSerializer struct {
// 	C        *gin.Context
// 	Prendas []Prendas
// }

// type PrendasSerializer struct {
// 	C *gin.Context
// 	Prendas
// }


// func (s *PrendasSerializer) Response() Prendas {
// 	myUserModel := s.C.MustGet("my_user_model").(UserModel)
// 	response := Prendas {
// 		Id:          s.Id,
// 		Name:        s.Name
// 		Company:     s.Company
// 		// Favorite:    s.isFavoriteBy(GetPrendasUserModel(myUserModel)),
// 		Views:	     s.Views,
// 	}
	
// 	return response
// }


// func (s *PrendassSerializer) Response() []Prendas {
// 	response := []Prendas{}
// 	for _, prendas := range s.Prendass {
// 		serializer := PrendasSerializer{s.C, prendas}
// 		response = append(response, serializer.Response())
// 	}
// 	return response
// }
