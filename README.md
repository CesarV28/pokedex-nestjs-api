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

5. Correr el proyecto en desarrollo
```
yarn start:dev
```

6. Recostruir la base de datos con la semilla desde un Get
```
http://localhost:3001/api/v2/seed
```

## Stack usado
* MongoDB
* Nest