const express = require('express')
const app = express()

const {addDays} = require('date-fns')
const resultDate = addDays(new Date(), 100)

app.get('/', (request, response) => {
  response.send(
    `${resultDate.getDate()}/${
      resultDate.getMonth() + 1
    }/${resultDate.getFullYear()}`,
  )
})

app.listen(3000)
module.exports = app
