
const connection = require('../config/db');

// FRONT PAGE OF OUR WEB PAGE 
const getDetails = (req, res) => {
    res.redirect("/index.html");
}

// ADD DATA INTO THE TABLE 
const postDetails = (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    try{
        connection.query("INSERT INTO expense(name, description, price) values(?, ?, ?)",[name, description, price], (err, rows) => {
            if(err){
                console.log(err);
            }
            else{
                res.redirect('/data');
            }
        })
    }
    catch (err) {
        console.log(err);
    }
};


// READ ALL DATA FROM DATABASE

const showData = (req, res) => {
    connection.query("SELECT * FROM expense", (err, rows) => {
        if(err){
            console.log(err);
        }
        else{
            res.render('read.ejs',{rows});
        }
    })
};


// DELETE THE DATA
const deleteData = (req, res) => {
    connection.query("delete from expense where id=?",[req.query.id], (err, rows)=>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/data');
        }
    })
};


// OPEN EDIT PAGE TO UPDATE OUR DATA

const editData = (req, res) => {
    const updateData = "select * from  expense where id=?";
    connection.query(updateData, req.query.id, (err, eachRow) => {
      if (err) {
        res.send(err);
      } else {
        
        result = JSON.parse(JSON.stringify(eachRow[0]));  //in case if it dint work 
        res.render("edit.ejs", { data: eachRow[0] });
      }
    });
};


// UPDATED DATA SEND TO THE DATABASE 

const updateData = (req, res) => {
    const id_data = req.body.hidden_id;
    const name_data = req.body.name;
    const phone_data = req.body.description;
    const email_data = req.body.price;
  
    
  
    const updateQuery = "update expense set name=?, description=?, price=? where id=?";
  
    connection.query(
      updateQuery,
       [name_data, phone_data, email_data, id_data],
       (err, rows) => {
        if (err) {
          res.send(err);
        } else {
          res.redirect("/data");
        }
      }
    );
  }

module.exports = {getDetails, postDetails, showData, deleteData, editData, updateData};