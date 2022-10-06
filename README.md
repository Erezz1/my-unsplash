<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# My Unsplash #
My Unsplash server

__NOTA:__ Correr la aplicacion con las siguientes dependencias ya instaladas de forma global
* [Git](https://git-scm.com/)
* [Docker](https://docs.docker.com/) y [docker-compose](https://docs.docker.com/compose/)
* [Yarn](https://yarnpkg.com/)

## Iniciar desarrollo ##
Seguir la siguiente lista de pasos:
1. Clonar el repositorio y cambiar a la branch _file-and-image_
```
  $ git clone https://github.com/Erezz1/server-templates.git
  $ cd ./server-templates
  $ git checkout database
```

2. Instalar nest-cli de forma global
```
  $ npm install -g @nestjs/cli
```

3. Instalar dependencias para desarrollo
```
  $ yarn install
```

4. Configurar variables de entorno __.env__ en base al molde __.example.env__ 
> __Nota:__ Esta configuracion es para contar con una base de datos PostreSQL, si deseas utilizar otra base de datos SQL o una NoSQL, deberas modificar el archivo _docker-compose.yaml_ y _docker-compose.prod.yaml_, ademas de tambien modificar los archivos de configuracion _.env_, _./src/config/joi.validation.d.ts_ y _./src/config/joi.validation.ts_.

5. Correr la aplicacion en modo desarrollo
```
  $ yarn start:dev
```

6. Accede a los siguientes links
* Documentacion: [http://localhost:3000/docs/](#)
* Api: [http://localhost:3000/api/](#)
* Home: [http://localhost:3000/](#)
> __Nota:__ el puerto dependera segun el que hayas configurado en el archivo _.env_

## Desplegar a produccion ##
1. Realizar los pasos del 1 al 4 de la seccion __Iniciar desarrollo__
2. Correr la aplicacion completa mediante un contenedor de Docker
```
  $ docker-compose up -d
```
