import express, { application } from 'express';
import data from './data.js';
const app = express();

app.get('/product/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product is not found' })
    }
})

app.get('/api/products', (req, res) => {
    res.send(data.products)
});

app.get('/', (req, res) => {
    res.send('Server is ready');
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
});