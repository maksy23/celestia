import express from 'express'

const app = express()

app.get('/', (req, res): void => {
  res.send('<p>This is <b>CELESTIA</b> Express API server.</p> ')
})

export default app
