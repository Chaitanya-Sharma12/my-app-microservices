import React, { useState } from 'react';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    // Register User
    const registerUser = async () => {
        await fetch('http://localhost:8001/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        alert("User registered");
    };

    // Login User
    const loginUser = async () => {
        await fetch('http://localhost:8001/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        alert("Login successful");
    };

    // Add Product
    const addProduct = async () => {
        await fetch('http://localhost:8002/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: productName, price: productPrice }),
        });
        alert("Product added");
    };

    return (
        <div>
            <h1>My E-commerce App</h1>
            <h2>User Registration</h2>
            <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={registerUser}>Register</button>
            <button onClick={loginUser}>Login</button>

            <h2>Add Product</h2>
            <input placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
            <input placeholder="Product Price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
            <button onClick={addProduct}>Add Product</button>
        </div>
    );
}

export default App;
