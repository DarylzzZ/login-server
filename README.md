# login-server

A demo server and a react front-end app implemented basic user authentication with RESTful API and following tech-stack:

- [expressjs](https://github.com/expressjs/express)
- [reactjs](https://reactjs.org/)
- [redux](https://redux.js.org/)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [Mysql](https://www.mysql.com/)
- [Sequelize ORM](https://github.com/sequelize/sequelize)
- [babel](https://babeljs.io/)



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
