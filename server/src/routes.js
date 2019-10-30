module.exports = (app) => {
  app.get('/status', (req,res) => {
    res.send({
      message: 'hello AGAIN'
    })
  })
    
  app.post('/register', (req, res) => {
    res.send({
      message: "user registered"
    })
  })
}