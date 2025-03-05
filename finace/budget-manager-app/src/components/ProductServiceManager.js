import React, { useState } from 'react';
import './ProductServiceManager.css';

const ProductServiceManager = ({ products, setProducts }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [cost, setCost] = useState('');

    const addProduct = () => {
        setProducts([...products, { name, price: parseFloat(price), cost: parseFloat(cost) }]);
        setName('');
        setPrice('');
        setCost('');
    };

    const editProduct = (index) => {
        const newName = prompt("Enter new name:", products[index].name);
        const newPrice = prompt("Enter new price:", products[index].price);
        const newCost = prompt("Enter new cost:", products[index].cost);
        const updatedProducts = [...products];
        updatedProducts[index] = { name: newName, price: parseFloat(newPrice), cost: parseFloat(newCost) };
        setProducts(updatedProducts);
    };

    const removeProduct = (index) => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
    };

    return (
        <div className="product-service-manager">
            <h2>Product and Service Management</h2>
            <div className="input-group">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
                <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} placeholder="Cost" />
                <button onClick={addProduct}>Add</button>
            </div>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - Price: £{product.price} - Cost: £{product.cost}
                        <button onClick={() => editProduct(index)}>Edit</button>
                        <button onClick={() => removeProduct(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductServiceManager;