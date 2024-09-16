import app from './server'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.API_PORT || 23186

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
