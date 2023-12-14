const  express  = require("express");
const dotenv = require('dotenv')
const mongoose = require("mongoose");
const morgan = require("morgan");
const errorHandler = require("./helpers/error-handles.js")
const routes = require('./routes/index.js')
const path = require('path');

dotenv.config()
 
const app = express()
const PORT = process.env.PORT || 3000
const staticPath = path.join(__dirname, 'view');

app.use(express.static(staticPath));
app.use(express.json());
app.use(morgan('tiny'))
app.use(errorHandler)
app.use(routes)

app.get('/', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
  });
  
mongoose.connect(process.env.CONNECTION_STRING).then(() => {
    console.log('Conectado ao banco de dados')
}).catch((err) => {
    console.log('Erro ao connectar ao banco: ', err)
})

app.listen(PORT, () => {
    console.log(`server rodando na porta ${PORT}`)
})