package profile

type Profile struct {
	Id	    	uint	 `gorm:"primary_key"`
	Username    string   `gorm:"column:username"`
	Name        string   `json:"name"`
	Surname		string   `json:"surname"`
	Description string   `json:"description"`
	Bio         string   `json:"Bio"`
	User	    uint	 `json:"user"`
}

type User struct {
	ID           uint    `gorm:"primary_key"`
	Username     string  `gorm:"column:username"`
	Email        string  `gorm:"column:email;"`
	Bio          string  `gorm:"column:bio;"`
	Image        *string `gorm:"column:image"`
	PasswordHash string  `gorm:"column:password;"`
	Type		 string	 `gorm:"column:type;"` 
}


