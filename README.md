# login-server

A demo server implemented basic user authentication with RESTful API and following tech-stack:

1. [expressjs](https://github.com/expressjs/express)
2. [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
3. [Mysql](https://www.mysql.com/)
4. [Sequelize ORM](https://github.com/sequelize/sequelize)
5. [babel](https://babeljs.io/)


## Instruction
1. Install dependencies 

```
yarn
cd ./app && yarn
```

2. Setup db & update conf in src/config/index.js
```
export default {
  jwtsecret: 'secret',
  db_host: 'localhost',
  db_name: 'test',
  db_user: 'daryl',
  db_pass: 'password'
}
```

3. run app
```
yarn babel // run this command in root directory
```
