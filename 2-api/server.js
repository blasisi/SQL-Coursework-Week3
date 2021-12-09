
// - Create a new NodeJS application called `cyf-ecommerce-api`


// - Add Express and node-postgres and make sure you can start the server with `node server.js`
const express = require('express');
const app = express();
const { Pool } = require('pg');
//// Create connection
// const pool = new Pool({


    const pool = new Pool({
        user: "bimbo",
        host: "localhost",
        database: "cyf_ecommerce",
        password: "bimbola",
        port: 5432,
      });
      
      //posgres queries
const getAallCustomers =`bimbo=> select name,address,city,country from customers;`
//       app.get("/customers", function (req, res) {
//         pool
//           .query("SELECT * FROM customers")
//           .then((result) => res.json(result.rows))
//           .catch((e) => console.error(e));
//       });

//       app.get("/suppliers", function (req, res) {
//         pool
//           .query("SELECT * FROM suppliers")
//           .then((result) => res.json(result.rows))
//           .catch((e) => console.error(e));
//       });

//       app.get("/products", function (req, res) {
//         pool
//           .query("SELECT * FROM products")
//           .then((result) => res.json(result.rows))
//           .catch((e) => console.error(e));
//       });
//       //
//       app.listen(3001, function () {
//         console.log("Server is listening on port 3000. Ready to accept requests!");
//       });

// // - Add a new GET endpoint `/customers` to return all the customers from the database
// // - Add a new GET endpoint `/suppliers` to return all the suppliers from the database
// // - (STRETCH GOAL) Add a new GET endpoint `/products` to return all the product names along with their prices and supplier names.

// // const express = require('express');
// // const { Pool } = require('pg');
// // //// Create connection
// // // const pool = new Pool({
// //     const dbcyfecommerce ={
// //     user: 'cyf',
// //     //sets the user name
// //     host: 'localhost',
// //     //specifies the host that runs the databased
// //     database: 'cyf_ecommerce',
// //     //name of the database
// //     password: '',
// //     port: 5432
// // };
// // const pool =new Pool(dbcyfecommerce)

