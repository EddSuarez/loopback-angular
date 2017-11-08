# loopback-angular

## Stack
- Node 8.6.0
- NPM 5.3.0
- Webpack 3.8.1
- Angular 1.6.6
- Bootstrap 3.3.7
- FontAwesome 4.6.3
- Simple line icons 2.3.2
- Loopback 3.16.2
- ES6 / Babel (babel-loader)
- LESS 2.7.3

### Quick start

###### Start backend, frontend and mongodb with docker-compose(v1.16.1)
**IMPORTANT:** You must complete the missing ENV vars in the `.env` file based on `.env.template`.

```bash
$ npm i 
$ docker-compose up
```
 - Backend will service on **localhost:8080**
 - Frontend (webpack dev server) will service in **localhost:8081**
 - Postgresql will service on **localhost:5432**
 - Graphiql will service on localhost:8081/graphiql

### Generate bundle for production
```bash
$ npm run start 
```

### ENV VARS
Name | Description
------------ | -------------
SMTP_EMAIL | smtp email
SMTP_PASSWORD | smtp password
POSTGRESQL_HOST | postgresql hostname
POSTGRESQL_DATABASE | postgresql database
POSTGRESQL_USER | postgresql user
POSTGRESQL_PASSWORD | postgresql password 
POSTGRESQL_ADMIN_PASSWORD | postgresql admin password 