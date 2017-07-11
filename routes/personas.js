
var express = require('express');
var router  = express.Router();
var log     = App.log.child({module:'personas'});


router.get('/hello', (req, res, next) =>{ 
  var ctx    = req._ctx;
  ctx.model  = 'persona';
  ctx.method = 'hello';
  
  App.db.do(ctx)
  .then(resp=>{
    res.json({resp:resp}); 
  }).catch(next);
})

module.exports = router;