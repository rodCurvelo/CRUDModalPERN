const express = require("express");
//variable app to run express
const app = express();
//importing cors | specify server location
const cors = require("cors");
// importing db info conexion from db.js file
const pool = require("./db");

//middleware function (HTTP request and respond | routes)
app.use(cors());
// request data in json format
app.use(express.json()); //req.body (request from the client side | form)


//ROUTES - Restful API//

//CREATE a todo | post because adds data | path | req from client 
// & answer to the client side (res) | asyng has await to avoid req and response delays 
app.post("/list", async(req,res) => {
    // try catch statement for checking errors and showing up error messages
    try {
        // getting data from the client side to determine what to do 
        const { first_name, last_name, birth_date, phone_number, address_info, notes } = req.body;
        const newList = await pool.query(
            "INSERT INTO user_contact (first_name, last_name, birth_date, phone_number, address_info, notes) VALUES($1, $2, $3, $4, $5, $6) RETURNING *", 
            [first_name, last_name, birth_date, phone_number, address_info, notes]
        ); // description will be the value of this value $1

      res.json(newList.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


//GET ALL todos
app.get("/list", async(req, res) => {
    try {
        const allList = await pool.query("SELECT * FROM user_contact");
        res.json(allList.rows);
    } catch(err) {
        console.error(err.message);
    }
})

//GET A todo
app.get("/list/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const aList = await pool.query("SELECT * FROM user_contact WHERE contact_id = $1", [id])

        res.json(aList.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
})

//UPDATE a todo (EDIT)
app.put("/list/:id", async(req,res) => {

    try {
        const {id} = req.params;
        const { first_name, last_name, birth_date, phone_number, address_info, notes } = req.body;
        const updateTodo = await pool.query(
            "UPDATE user_contact SET first_name = $1, last_name = $2, birth_date = $3, phone_number = $4, address_info = $5, notes = $6 WHERE contact_id = $7",
            // $1 and $2 are variables for holding values from the variables I had created (description and id)
            [first_name, last_name, birth_date, phone_number, address_info, notes, id]
        );

      res.json("Todo was updated!")  
    } catch {
        console.error(err.message)
    }
})

//DELETE a todo
app.delete("/list/:id", async(req,res) => {
    try {
        const {id} = req.params;
        const deleteList = await pool.query("DELETE FROM user_contact WHERE contact_id = $1", [id]);
        res.json("Todo was deleted!")
    } catch (err) {
        console.log(err.message);
    }
})


//creating the server using callback
app.listen(5000, () =>{
    console.log("server has started on port 5000");
});