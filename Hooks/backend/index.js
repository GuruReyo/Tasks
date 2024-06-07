import express from 'express';

const app = express();
app.use(express.json());

const products = [
    {
        id: 1,
        name: "Laptop",
        price: 1200,
    },
    {
        id: 2,
        name: "Smartphone",
        price: 800,
        
    },
    {
        id: 3,
        name: "Headphones",
        price: 150,
        
    },
    {
        id: 4,
        name: "Camera",
        price: 500,
        
    },
    {
        id: 5,
        name: "Smartwatch",
        price: 300,
    }
];

// Get all products
app.get('/api/products', (req, res) => {
    if (req.query.search) {
        const filterProducts = products.filter(product => product.name.includes(req.query.search));
            res.send(filterProducts);
        return;
    }
    setTimeout(()=>{
        res.send(products);
    },3000)
    
});

// Get a single product by ID
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    res.send(product);
});

// Create a new product
app.post('/api/products', (req, res) => {
    const product = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price,
        image: req.body.image
    };
    products.push(product);
    res.send(product);
});

// Update a product
app.put('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    product.name = req.body.name;
    product.price = req.body.price;
    product.image = req.body.image;
    res.send(product);
});

// Delete a product
app.delete('/api/products/:id', (req, res) => {
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Product not found');
    products.splice(index, 1);
    res.send('Product deleted successfully');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
