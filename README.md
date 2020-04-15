# smash <img width="24" height="24" src="https://upload.wikimedia.org/wikipedia/commons/4/49/Smash_Ball.png" alt="smash logo">

This project is based on the [competitive scene of the video game series Super Smash Bros.](https://smashworldtour.com/) created (but not necessarily supported) by [Masahiro Sakurai](https://en.wikipedia.org/wiki/Masahiro_Sakurai)<a href="https://twitter.com/Sora_Sakurai?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img width="20" height="20" src="https://logosvector.net/wp-content/uploads/2012/12/new-twitter-logo-vector.png"></a>. It's purpose is to learn how to built loosely coupled applications. This project will be handled with microservices architecture, where two different services will be managed with Docker and requests will go through an API gateway made in GraphQL.

# Technologies

- [Node.js <img width="40" height="20" src="https://pluspng.com/img-png/nodejs-logo-png-create-a-model-to-persist-data-in-a-node-js-loopback-api-from-beeman-nl-on-eggheadio-1200.png">](https://nodejs.org/en/)
- [TypeScript <img width="35" height="20" src="https://camo.githubusercontent.com/a1bd25907fece453efea35385a9252fc10a12258/687474703a2f2f7777772e747970657363726970746c616e672e6f72672f6173736574732f696d616765732f69636f6e732f7361666172692d70696e6e65642d7461622e737667">](https://www.typescriptlang.org/)
- [Hapi.js <img width="20" height="20" src="https://avatars3.githubusercontent.com/u/3774533?s=400&v=4">](https://hapi.dev/)
- [Express <img width="20" height="20" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png">](https://expressjs.com/)
- [GraphQL <img width="20" height="20" src="https://camo.githubusercontent.com/1dae7db18ee88a998c9b237c0d33f9c2c71f748f/68747470733a2f2f692e696d6775722e636f6d2f6254373670585a2e706e67">](https://graphql.org/)
- [MongoDB <img width="20" height="20" src="https://webassets.mongodb.com/_com_assets/cms/leaf-2g1s5txorx.svg">](https://www.mongodb.com/)
- [PostgreSQL <img width="20" height="20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png">](https://www.postgresql.org/)
- [Jest <img width="20" height="20" src="https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png">](https://jestjs.io/)
- [CircleCI <img width="20" height="20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Circleci-icon-logo.svg/1200px-Circleci-icon-logo.svg.png">](https://circleci.com/)
- [Docker <img width="25" height="20" src="https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png">](https://www.docker.com/)

# Minimum setup needed to run the project

## Docker

You need to have `docker` and `docker-compose` installed to run this project. If you don't have it installed you can follow [this guide](https://docs.docker.com/install/).

- First clone this repository.
- After that open your terminal of preference and navigate to the directory you cloned this project.
- type the command `docker-compose up`

# Scripts used on the project

### character-service

- `npm run watch`: Starts the application in a development environment

### players-service

- `npm run watch`: Starts the application in a development environment
- `npm run db:migrate`: Runs the migrations on the database
- `npm run db:migrate:undo`: Runs the rollback on the database

# Git style guidelines

### For branch names go with the following (# -> Ticket #):

- **SMASH-#-FEAT**: a new feature
- **SMASH-#-FIX**: a bug fix
- **SMASH-#-DOCS**: changes to documentation
- **SMASH-#-STYLE**: formatting, missing semi colons, etc.
- **SMASH-#-REFACTOR**: refactoring production code
- **SMASH-#-TEST**: adding tests, refactoring test; no production code change
- **SMASH-#-CHORE**: updating build tasks, package manager configs, etc; no production code change

### For Pull Request main title/commit use the following:

_Follow the guidelines in the [`gitmoji` page](https://gitmoji.carloscuesta.me/)👨‍💻👩‍💻_\*\*

Or follow this guidelines:

- 🔥feat: _new feature_
- 🎊fix: _bug fix_
- 📝docs: _documentation_
- ✨style: _formatting, missing semi colons, etc_
- 🎬refactor: _refactoring production code_
- 🧪test: _adding tests, refactoring test_
- 🤖chore: _updating build tasks, package manager configs, etc_
