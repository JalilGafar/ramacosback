const express = require('express');
var SQL = require('sql-template-strings');
var cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
var con = require('./phone-db');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Ramacos Node App." });
});

app.get("/api/products", (req, res, next) => {
    con.query("SELECT * FROM produits;",
        function (err, result, fields) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            };
            res.status(200).json(result);
            return;
        }
    )
} )



// app.use("/api/phone", (req, res, next) => {
//     con.query("SELECT * FROM phones;", 
//         function (err, result, fields) {
//             if (err) {
//                 console.log(err);
//                 res.sendStatus(500);
//                 return;
//             };
    
//             res.status(200).json(result);
//             return;
//         }
//     );
// });

// app.post("/api/achat", (req, res, next) => {
//     var cmdForm = req.body;
//     console.log(cmdForm);
//     con.query(SQL
//         `INSERT INTO commande
//         (nom, prenom, articles, ville, livraison, tel, tel2, email, date_time)
//         VALUES (${cmdForm.nom}, ${cmdForm.prenom}, ${cmdForm.achatText}, ${cmdForm.ville}, ${cmdForm.livraison}, ${cmdForm.tel}, ${cmdForm.tel2}, ${cmdForm.email}, now());
//         `,
//         function (err, result, fields) {
//             if (err) {
//                 console.log(err);
//                 res.sendStatus(500);
//                 return;
//             };
//             res.sendStatus(200);
//             console.log('Commande enregistrée !');
//         }
//     )
// })

module.exports = app;