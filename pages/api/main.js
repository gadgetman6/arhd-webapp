import fs from 'fs'

export default async function handler (req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    let json = req.body
    fs.writeFileSync('./public/file.json', JSON.stringify(json))
    res.status(200).json({ status: 'success' })
  } else {
    // Handle any other HTTP method
    console.log('sending ')
    var json = fs.readFileSync('./public/file.json')
    json = JSON.parse(json)
    res.status(200).json(json)
  }
}
