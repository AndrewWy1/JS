import React, { useState } from 'react';

function Product(props) {
    const { name, price, quantity, onDelete } = props;

    const handleDelete = () => {
        onDelete(name);
    };
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{price * quantity}</td>
            <td>
                <button onClick={handleDelete}>Delete</button>
            </td>
        </tr>
    );
}

function ProductList(props) {
    const { products, onDeleteProduct } = props;

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <Product key={product.name} {...product} onDelete={onDeleteProduct} />
                ))}
            </tbody>
        </table>
    );
}

function AddProductForm(props) {
    const { onAddProduct } = props;

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddProduct({ name, price, quantity });
        setName('');
        setPrice(0);
        setQuantity(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <label>
                Price:
                <input type="number" value={price} onChange={handlePriceChange} />
            </label>
            <label>
                Quantity:
                <input type="number" value={quantity} onChange={handleQuantityChange} />
            </label>
            <button type="submit">Add Product</button>
        </form>
    );
}

function App() {
    const [products, setProducts] = useState([
        { name: 'Apple', price: 2, quantity: 5 },
        { name: 'Banana', price: 3, quantity: 4 },
        { name: 'Orange', price: 4, quantity: 3 },
    ]);

    const handleDeleteProduct = (productName) => {
        setProducts(products.filter((product) => product.name !== productName));
    };

    const handleAddProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    return (
        <div>
            <ProductList products={products} onDeleteProduct={handleDeleteProduct} />
            <AddProductForm onAddProduct={handleAddProduct} />
        </div>
    );
}

export default App;