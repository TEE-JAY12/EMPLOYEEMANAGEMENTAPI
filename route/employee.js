const express = require("express");
const Router = express.Router();
// Testin the creation of db 
//const mysqlConnection3 = require("../connection3");


const mysqlConnection = require("../connection");


Router.get("/",(req,res) =>{
    mysqlConnection.query("SELECT * from people",(err,rows,)=>{
        if(!err){
            res.send(rows)
        }
        else{
            console.log(err)
        }
    });
 

    
});


Router.post('/createemploye',(req,res) =>{
    let sql = 'CREATE TABLE employee(id int AUTO_INCREMENT,name VARCHAR(255),designation VARCHAR(255),PRIMARY KEY(id))'
    mysqlConnection.query(sql,(err) =>{
        if(err){
            throw err
        }
        res.send('Employee table created')
    }); 
});

Router.post('/employe1',(req,res) =>{
    let post = {name:'kunle smith',designation:'Cheif Excutive Officer'}
    let sql = 'INSERT INTO employee SET ?'
    let query = mysqlConnection.query(sql,post,err =>{
        if(err){
            throw err
        }
        res.send('Employee added')
    });
});

Router.post('/getemployee',(req,res) =>{
    let sql = 'SELECT *FROM employee'
    let query = mysqlConnection.query(sql,(err,results) =>{
        if(err){
            throw err
        }
        console.log(results)
        res.send('Employee details fetched')
    });
});


Router.put('/updateemployee/:id',(req,res) =>{
    let newName = 'Updated name'
    let sql = `Update employee SET name = '${newName}' WHERE id = ${req.params.id}`
    let query = mysqlConnection.query(sql,(err,results) =>{
        if(err){
            throw err
        }
        res.send('Employee Updated')
    });
});


Router.delete('/deleteemployee/:id',(req,res) =>{
    let sql = `DELETE FROM employee WHERE id = ${req.params.id}`
    let query = mysqlConnection.query(sql,(err,results) =>{
        if(err){
            throw err
        }
        res.send('Employee deleted')
    });
});


// Testing the creation of db 
// Router.get("/createdb",(req,res) => {
//     let sql = "CREATE DATABASE employee";
//     mysqlConnection3.query(sql,(err)=>{
//         if(err){
//             throw err
//         }
//         res.send("Database Created");
//     });
// });

module.exports  = Router;