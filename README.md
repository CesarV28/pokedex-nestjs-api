<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el respositorio
2. Ejecutar
```
yarn install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```

4. Levantar la base de datos
```
docker-compose up -d
```

5. Clonar el archivo ```.example.env```, renombrar la copia a ```.env``` y llenar las variables definidas
```
cp .example.env .env
```

6. Correr el proyecto en desarrollo
```
yarn start:dev
```

7. Recostruir la base de datos con la semilla desde un Get
```
http://localhost:3001/api/v2/seed
```

## Production build
1. crear el archivo de ```.env.prod``` con el comando ```cp .example.env .env.prod```
2. Llenar las variables de entorno del archivo **.env.prod**
3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
Extra: si ya se había realizado el build de producción, correr el siguiente comando: 
````
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
```

## Stack usado
* MongoDB
* Nest