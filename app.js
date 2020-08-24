const express = require('express');

const app = express();

app.get('/', (req,res) =>
    res.send('hello Gauri')
);
const port= process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});