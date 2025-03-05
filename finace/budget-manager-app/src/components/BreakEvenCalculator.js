import React, { useState } from 'react';
import './BreakEvenCalculator.css';

const BreakEvenCalculator = ({ products }) => {
    const [fixedCosts, setFixedCosts] = useState('');
    const totalFixedCosts = parseFloat(fixedCosts) || 0;
    const totalProfit = products.reduce((acc, product) => acc + (product.price - product.cost), 0);

    const calculateBreakEvenPoint = () => {
        if (totalProfit > 0) {
            return totalFixedCosts / totalProfit;
        }
        return 0;
    };

    return (
        <div className="break-even-calculator">
            <h2>Break-Even Calculator</h2>
            <input
                type="number"
                value={fixedCosts}
                onChange={(e) => setFixedCosts(e.target.value)}
                placeholder="Total Fixed Costs"
            />
            <p>Break-Even Point: {calculateBreakEvenPoint().toFixed(2)} units</p>
        </div>
    );
};

export default BreakEvenCalculator;