const express = require('express')

const multer = require('multer')
const upload = multer({ dest: 'images/' })

const app = express()

// app.use('/images', express.static('images'))

app.post('/api/images', upload.single('image'), (req, res) => {
  const imagePath = req.file.path
  const description = req.body.description

  console.log(description, imagePath)

  res.send("🤗")
})

app.listen(8080, () => console.log("listening on port 8080"))