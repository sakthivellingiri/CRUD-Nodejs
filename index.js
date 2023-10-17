const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3550;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'S@kthi9629',
    database: 'ccl'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// Create a route to handle user registration
app.post('/register', (req, res) => {
    const user = req.body;

    db.query('INSERT INTO register (username, email, password) VALUES (?, ?, ?)',
        [user.username, user.email, user.password],
        (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error registering user');
            } else {
                res.status(200).send('User registered successfully');
            }
        }
    );
});

// data base mysql to client side login form
app.post('/userlogin', (req, res) => {
    const { email, password } = req.body;
    db.query('select * from register where email=?',[email], (error, result) => {
        if (error) {
            console.log(error)
            res.send({ "status": "empty_set" })
        }
        else if (result.length > 0) {
            let dbemail = result[0].email
            let dbpassword = result[0].password
            let id = result[0].id
            if (dbemail === email && dbpassword === password) {
                res.send({ "status": "success", "id": id })
            }
            else {
                res.send({ "status": "invalid_user" })
            }
        }
        else {
            res.send({ "status": "error" })
        }
    })
})

// get single data
app.get('/client/:id', (req, res) => {
    let { id } = req.params
    let sql = 'select * from register where id=?'
    db.query(sql, [id], (error, result) => {
        if (error) {
            res.send(error)
            console.log(error)
        }
        else {
            res.send(result)
        }
    })
})
//delete
app.post('/delete/:id', (req, res) => {
    let id = req.params.id
    let sql = 'delete from register where id=?'
    db.query(sql, [id], (error, result) => {
        if (error) {
            res.send({ "status": "error" })
            console.log(error)
        }
        else {
            res.send({ "status": "success" })
            console.log()
        }
    })

})

//update

app.put('/updateuser',(req,res)=>{
    let {id}=req.params
    console.log(id)
    let {username,email,password}=req.body
    let sql='update register set username=?,email=?,password=? where id=?';
    db.query(sql,[username,email,password,id],(error,result)=>{
        if(error){
            res.send({"status":"error"})
            console.log(error)
        }
        else{
            res.send({"status":"success"})
        }
    })
})

////

// app.put('/update/:id', (req, res) => {
//     const id = req.params.id;
//     const data = req.body;
  
//     // Ensure the data you're receiving is sanitized and validated to prevent SQL injection.
  
//     // Perform the update operation
//     const sql = 'UPDATE your_table_name SET username=?, email=?, password=? WHERE id=?';
//     const values = [data.username, data.email, data.password, id];
  
//     db.query(sql, values, (err, results) => {
//       if (err) {
//         console.error('Error updating data: ' + err.message);
//         res.json({ status: 'error' });
//       } else {
//         console.log('Data updated successfully');
//         res.json({ status: 'success' });
//       }
//     });
//   });

// app.post('/updateuser', (req, res) => {
//     const { id, username, email, password } = req.body;

//     // SQL query to update user data
//     const sql = 'UPDATE users SET username=?, email=?, password=? WHERE id=?';

//     db.query(sql, [username, email, password, id], (error, result) => {
//         if (error) {
//             res.status(500).json({ status: 'error', message: 'Failed to update user data' });
//             console.error('Update error: ' + error.message);
//         } else {
//             res.status(200).json({ status: 'success', message: 'User data updated successfully' });
//         }
//     });
// });

















app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
