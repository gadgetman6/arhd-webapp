export default function handler (req, res) {
  let json = { base: 'test' }
  if (req.method === 'POST') {
    // Process a POST request
    json = req.body
    console.log(json)
  } else {
    // Handle any other HTTP method
    console.log('sending ')
    res.status(200).json(json)
  }
}
