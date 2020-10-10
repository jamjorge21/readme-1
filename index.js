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

inquirer.prompt(questions).then(response => {

    fs.appendFileSync("README.md", ("#" + response.title) + '/n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });

    fs.appendFileSync("README.md", ("Description" + response.description) + '/n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });
  
    fs.appendFileSync("README.md", ("installation instructions" + response.installation) + '/n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });
  
    fs.appendFileSync("README.md", ("github" + response.github) + '/n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });
  
    fs.appendFileSync("README.md", ("license" + response.license) + '/n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });
  
    fs.appendFileSync("README.md", ("contributing" + response.contributing) + '/n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });
  
    fs.appendFileSync("README.md", ("test" + response.tests) + '/n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
    });
  

  
    fs.appendFileSync("README.md", ("questions" + response.question) + '/n', function(err){
      if (err) {
        return console.log(err);
      }
      console.log("success!");
      });
    });
   
