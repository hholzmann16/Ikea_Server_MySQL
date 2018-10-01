const db = require('../database/index.js');

exports.getData = function(req, res){
  console.log('in controller!');
  db.displayData.findOne({}, (err, data)=>{
    if(err){
      throw(err)
    } else {
      res.status(200).send(data);
    }
  })
}

exports.addData = function(req, res){
  console.log('in post');
}