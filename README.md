# Dress ME!
 
## How it works? 📖

¿Prueba tu ropa favorita desde tu propio avatar!

## Live DEMO

```
dressme.surge.sh
```

## Comenzando 🚀

_Descarga el repositorio de github_

```
git clone https://github.com/j-maestre/DressMe_GoGin-React.git
```


## Pre-requisitos 📋

Para lanzar esta apliacion necesitamos instalar lo siguiente:

## Docker
```
sudo apt update
```
```
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
sudo apt update
apt-cache policy docker-ce
sudo apt install docker-ce
```


## Docker compose

```
sudo curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

_Comprobamos que está instalado_
```
docker-compose --version
```

# Lanzar aplicación 🚀

_Nos situamos en el repositorio previamente descargado_


## Backend

```
cd backend
```
```
sudo docker-compose up
```

## Frontend

```
cd frontend
```
```
npm install
```
```
npm start
```

_Una vez realizados los pasos anteriores nos dirigimos a_

```
localhost:3000
```

![alt text](./img/home.png)
