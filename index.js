const fs = require("fs"); 
const inquirer = require("inquirer");

const questions =[
  
  { //title
    type: "input",
    name: "title",
    message: "What is the title of your project"
    
  },
  { //Description
    type: "input",
    name: "description",
    message: "Give a detail description of your presentation?"

  },
  { //Installation
    type: "input",
    name : "installation",
    message : "Installation instructions"

  },
  { //Usage
    type: "input",
    name: "usage",
    message: "How do you use your project?"

  },
  { //Github
    type: "input",
    name: "github",
    message: "What is your github username?"

  },
  { //License
    type: "input",
    name: "license",
    message: "What license are you using?"

  },
  { //Contributing
    type: "input",
    name: "contributing",
    message:" What are the rules for contributing"

  },
  { //Test
    type: "input",
    name: "tests",
    message: "Run test?"
  },
  { //  Question
    type: "input",
    name: "question",
    message: "???"

  },
]

console.clear();

inquirer
.prompt(questions).then(response => {

    fs.appendFileSync("README.md", ("#" + response.title) + '\r\n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });

    fs.appendFileSync("README.md", ("##Description" + "\r\n"+ response.description) + '\r\n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });
  
    fs.appendFileSync("README.md", ("##installation instructions" + "\r\n"+ response.installation) + '\r\n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });
  
    fs.appendFileSync("README.md", ("##github" + "\r\n" + response.github) + '\r\n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });
  
    fs.appendFileSync("README.md", ("##license" +"\r\n"+ response.license) + '\r\n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });
  
    fs.appendFileSync("README.md", ("##contributing" + "\r\n" + response.contributing) + '\r\n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });
  
    fs.appendFileSync("README.md", ("##test" + "\r\n" + response.tests) + '\r\n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });
  

  
    fs.appendFileSync("README.md", ("##questions" +"\r\n" + response.question) + '\r\n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
      });
    });
   
