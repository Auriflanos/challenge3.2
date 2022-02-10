const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const courses = require("./data")


server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server
})

server.get("/", function (req, res) {
  return res.render("start")
})

server.get("/about", function (req, res) {
  return res.render("about")
})

server.get("/courses", function (req, res) {
  return res.render("courses", {items: courses})
})

server.listen(5000, function () {
  console.log ("server is listening")
})

server.use(function(req,res){
  res.status(404).render("not-found");
})
