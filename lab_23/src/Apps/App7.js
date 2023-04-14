import React, { useState } from 'react';

function Product(props) {
    const { name, price, quantity, onDelete } = props;


    const handleDelete = () => {
        onDelete(name);
    };
    return (
        <tr border={1} color={"black"}>
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
        <table border={1} color={"black"}>
            <thead>
                <tr border={1} color={"black"}>
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

function App7() {
    const [products, setProducts] = useState([
        { name: 'Apple', price: 2, quantity: 5 },
        { name: 'Banana', price: 3, quantity: 4 },
        { name: 'Orange', price: 4, quantity: 3 },
    ]);

    const handleDeleteProduct = (productName) => {
        setProducts(products.filter((product) => product.name !== productName));
    };

    return (
        <div>
            <ProductList products={products} onDeleteProduct={handleDeleteProduct} />
        </div>
    );
}

export default App7;
