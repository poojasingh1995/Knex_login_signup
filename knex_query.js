var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Pooja@123"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE file", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });
const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Pooja@123',
        database: 'mydb'
    }
}
const knex = require('knex')(options);

// knex.schema.createTable('cars', (table) => {
//     table.increments('id')
//     table.string('name')
//     table.integer('price')
// }).then(() => console.log("table created"))
//     .catch((err) => { console.log(err); throw err })
//     .finally(() => {
//         knex.destroy();
//     });

    // const cars = [
    //     { name: 'Audi', price: 52642 },
    //     { name: 'Mercedes', price: 57127 },
    //     { name: 'Skoda', price: 9000 },
    //     { name: 'Volvo', price: 29000 },
    //     { name: 'Bentley', price: 350000 },
    //     { name: 'Citroen', price: 21000 },
    //     { name: 'Hummer', price: 41400 },
    //     { name: 'Volkswagen', price: 21600 },
    // ]

    // insert quiry****

    // knex('cars').insert(cars).then(() => console.log("data inserted"))
    //     .catch((err) => { console.log(err); throw err })
    //     .finally(() => {
    //         knex.destroy();
    //     });

    // select where quiry****
        
            // knex.from('cars').select("*")
            //     .then((rows) => {
            //         for (row of rows) {
            //             console.log(`${row['id']} ${row['name']} ${row['price']}`);
            //         }
            //     }).catch((err) => { console.log( err); throw err })
            //     .finally(() => {
            //         knex.destroy();
            //     });
        
            //   restricting code  The example returns cars whose price is higher than 50000.
            // knex.from('cars').select("name", "price").where('price', '>', '50000')
            //     .then((rows) => {
            //         for (row of rows) {
            //             console.log(`${row['name']} ${row['price']}`);
            //         }
            //     })
            //     .catch((err) => { console.log( err); throw err })
            //     .finally(() => {
            //         knex.destroy();
            //     });
