import React, { useState } from 'react';
import ProductServiceManager from '../components/ProductServiceManager';
import ProfitCalculator from '../components/ProfitCalculator';
import BreakEvenCalculator from '../components/BreakEvenCalculator';
import FinancialOverview from '../components/FinancialOverview';
import './Business.css';

function Business() {
    const [products, setProducts] = useState([]);

    return (
        <div className="business-page">
            <h1>Business Finance</h1>
            <div className="business-container">
                <div className="business-tools">
                    <ProductServiceManager products={products} setProducts={setProducts} />
                    <ProfitCalculator products={products} setProducts={setProducts} />
                    <BreakEvenCalculator products={products} />
                </div>
                <FinancialOverview products={products} />
            </div>
        </div>
    );
}

export default Business;