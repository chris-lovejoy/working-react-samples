const express = require('express')

const multer = require('multer')
const upload = multer({ dest: 'images/' })

const { uploadFile } = require('./s3')

const app = express()

// app.use('/images', express.static('images'))

app.post('/api/images', upload.single('image'), async (req, res) => {
  const file = req.file
  console.log("File details (locally):\n", file)

  const result = await uploadFile(file)
  console.log("File details (on AWS S3):\n", result)

  const description = req.body.description


  res.send("🤗")
})

app.listen(8080, () => console.log("listening on port 8080"))