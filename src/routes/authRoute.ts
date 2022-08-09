import path from "path";
import dbConnection from "../database";
import {readdir} from "fs/promises";
import {mkdirSync} from "fs";
const formidable= require("formidable")
const { copyFile, rename } = require("fs/promises");
const fs = require("fs");

export default (app)=> {
  
  app.get("/api/login", async (req, res) => {
    let client;
    try {
      
      res.send("You are logged")
      
    } catch (ex){
      
      res.send(ex.message)
      
    } finally {
      client?.close()
    }
    
  })
  
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
  app.get("/build", async (req, res)=>{
    try {
      let files = await readdir("build")
      res.json({files: files})
      
    } catch (ex){
      res.json({err: ex})
    }
  })
  app.get("/temp", async (req, res)=>{
    try {
      let files = await readdir("/temp")
      res.json({files: files})
      
    } catch (ex){
      res.json({err: ex})
    }
  })
}