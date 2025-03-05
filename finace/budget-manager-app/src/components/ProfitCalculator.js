import React from 'react';
import './ProfitCalculator.css';

const ProfitCalculator = ({ products, setProducts }) => {
    const calculateProfit = (product) => {
        return product.price - product.cost;
    };

    const totalProfit = products.reduce((acc, product) => acc + calculateProfit(product), 0);

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
        <div className="profit-calculator">
            <h2>Profit Calculator</h2>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - Profit: £{calculateProfit(product).toFixed(2)}
                        <button onClick={() => editProduct(index)}>Edit</button>
                        <button onClick={() => removeProduct(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Total Profit: £{totalProfit.toFixed(2)}</p>
        </div>
    );
};

export default ProfitCalculator;