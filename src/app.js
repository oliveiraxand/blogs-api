const express = require('express');
const { userRoute } = require('./routes');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use(userRoute);

// app.post('/login', loginMiddleware.authenticateUser, );

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
