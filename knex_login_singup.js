var mysql = require('mysql');
// const knex = require('knex');
var user=require("readline-sync")

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Pooja@123",
// });

// con.connect(function(err) {
//   console.log("Connected!");
//   con.query("CREATE DATABASE Knex_Login_Singup", function (err, result) {
//     if (err){;
//       console.log("Database already created")
//     }else{
//     console.log("succesfully Database created");
//     }
//   });
// });

const knex = require('knex')({

      client: 'mysql',
      connection: {
          host: '127.0.0.1',
          user: 'root',
          password: 'Pooja@123',
          database: 'Knex_Login_Singup'
      }
})
// knex.schema.createTable('new_login_singup', (table) => {
//           table.increments('id')
//           table.string('username')
//           table.string('password')
//           table.string('Email')

//       }).then(() => console.log("table created"))
//           .catch((err) => { console.log(err); throw err })

const emailvalidator=require("email-validator")
var input=user.question("What Do You Want Login or Singup:-")
if(input=="singup"){
      var username=user.question("enter the user name:-")
      var Email=user.question("enter the email_id:-")
      if(emailvalidator.validate(Email)){
            console.log("email is valid")
            var password=user.question("create your password:-")
            passwd=(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)
            if (password.match(passwd)){
              confirmpasswrod=user.question("confirmed password")
            if(password==confirmpasswrod){
                  console.log("confirm password")
            // var description=user.question("enter your description:-")
            // var hobbies=user.question("enter your hobbies:-")
            // var gender=user.question("enter your gender F/M:-")
            console.log("congrates "+username+ " you are singup successfully")
      
            var dic2={"username":username,"email":Email,"password":password}
            // console.log(dic2);
            }
            knex("new_login_singup").insert(dic2)
            .then(()=>{
                console.log("Successefully Data Inserted");
            })
            .catch((err)=>{
                  console.log(err);
            })
      }
  }
}
else{
      if(input=="login"){
            var username=user.question("enter the username:-")
            var password=user.question("enter the password:-")
            knex.from('new_login_singup').select("*")
            .then((rows)=>{
                  var found=rows.find(function(input){
                        if(input.username==username && input.password==password){
                              return input 
                        } 
                  })
                  if(found){
                        console.log("congrates",username,"you have logged in successefully")
                  }else{
                        console.log("user not found,your information is wrong")
                  }
            }).catch((err)=>{console.log(err);throw err})
      }
}