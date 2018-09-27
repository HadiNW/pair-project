const express = require('express');
const app = express();
const adminRouter = require('./routes/admins/index')
const customerRouter = require('./routes/customers/index')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use('/admin', adminRouter);
app.use('/', customerRouter)

const port = 8000
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})