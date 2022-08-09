
const formidable= require("formidable")
const { copyFile, rename } = require("fs/promises");
const fs = require("fs");

module.exports = (app)=> {
  
  app.post('/upload',  async (req, res) => {
    
    const form = formidable({multiples: false})
    
    form.parse(req, async (err, fields, files)=> {
      
      if (err) {
        console.log(err)
        res.send(err)
        return
      }
      
      try {
        res.json({files: files})
      
      } catch (ex){
        res.status(500).json({err: ex.message, m: "copy error"})
      }
    })
    
  });
  
}