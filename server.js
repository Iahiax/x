const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/appGeneratorDB', { useNewUrlParser: true, useUnifiedTopology: true });

// نموذج البيانات
const appSchema = {
    name: String,
    type: String
};
const App = mongoose.model('App', appSchema);

app.post('/generate', (req, res) => {
    const newApp = new App({
        name: req.body.appName,
        type: req.body.appType
    });
    newApp.save(err => {
        if (!err) {
            res.send('Application generated successfully!');
        } else {
            res.send(err);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
