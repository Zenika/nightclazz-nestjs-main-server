# NigthClazz NestJS

## Etape 1

Capter le signale de détresse. Fabriquer un radar.

Réaliser un `get` sur l’API du vaisseau à sauver.

Commencer avec nestjs, [https://docs.nestjs.com/](https://docs.nestjs.com/)

```bash
npm i -g @nestjs/cli
nest new project-name
```

Appler un service HTTP, [https://docs.nestjs.com/techniques/http-module](https://docs.nestjs.com/techniques/http-module)

```bash
npm i --save @nestjs/axios
this.httpService.get('http://localhost:3000/signal');
```

Potentielle difficulté rencontré par les participants :

- Comment je démarre ?
- Qu'est-ce que je dois toucher ?
- Il est où le point d'entré ?
- Server to server

## Etape 2

Connection MongoDB, qui représente un magasin de de pièce de vaisseau

https://docs.nestjs.com/techniques/mongodb

Potentielle difficulté rencontré par les participants :

- La base monogo existe déjà, elle déjà alimenter.
- Nestjs il s'appuit sur mongoose.

## Etape 3

Avec les pièces fabriquer des vaisseau pour préparer le sauvetage
Se connecter à un Postgres qui représente les hangars de vaisseaux.

https://docs.nestjs.com/techniques/database

Potentielle difficulté rencontré par les participants :

- Pourquoi on fait ça dans un postgres.

## Etape 4

Faire le sauvetage.
Sauvetage en 4 étapes à la façon d'un marstermind, il faut composer un équipe de 4 vaisseaux qui marche.

Page HTML avec l'avancement de chaque équipe.
