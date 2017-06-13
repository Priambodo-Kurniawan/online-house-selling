var House = require('../models/house')
var methods = {}

methods.getAll = (req, res) => {
  House.find({})
  .then((houses)=>{
    res.send(houses)
  })
  .catch((err)=>{res.send(err)})
}

methods.getByID = (req, res) => {
  House.findById(req.params.id)
  .then((house)=>{
    res.send(house)
  })
  .catch((err)=>{res.send(err)})
}

methods.create = (req, res) => {
  House.create(req.body)
  .then(()=>{
    res.send('House added')
  })
  .catch((err)=>{res.send(err)})
}

methods.update = (req, res) => {
  let id = req.params.id
  House.update({_id: id}, req.body)
  .then(() => {
    House.findById(id)
    .then((house)=>{
      res.send(house)
    })
    .catch((err)=>{res.send(err)})
  })
  .catch((err)=>{res.send(err)})
}

methods.delete = (req, res) => {
  let id = req.params.id
  House.deleteOne({_id: id})
  .then(()=>{
    res.send('House removed')
  })
  .catch((err)=>{res.send(err)})
}

module.exports = methods
