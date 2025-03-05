import React, { useState } from 'react';
import './BusinessFinance.css';

const BusinessFinance = () => {
    const [investment, setInvestment] = useState('');
    const [returnAmount, setReturnAmount] = useState('');
    const [clients, setClients] = useState('');
    const [revenuePerClient, setRevenuePerClient] = useState('');
    const [expenses, setExpenses] = useState('');
    const [revenue, setRevenue] = useState('');

    const calculateROI = () => {
        if (investment && returnAmount) {
            return ((returnAmount - investment) / investment) * 100;
        }
        return 0;
    };

    const calculateRevenuePerClient = () => {
        if (clients && revenuePerClient) {
            return clients * revenuePerClient;
        }
        return 0;
    };

    const calculateProfit = () => {
        if (revenue && expenses) {
            return revenue - expenses;
        }
        return 0;
    };

    return (
        <div className="business-finance">
            <h2>Business Finance Tools</h2>
            <div className="calculator">
                <h3>Return on Investment (ROI)</h3>
                <input
                    type="number"
                    value={investment}
                    onChange={(e) => setInvestment(e.target.value)}
                    placeholder="Investment Amount"
                />
                <input
                    type="number"
                    value={returnAmount}
                    onChange={(e) => setReturnAmount(e.target.value)}
                    placeholder="Return Amount"
                />
                <p>ROI: {calculateROI().toFixed(2)}%</p>
            </div>
            <div className="calculator">
                <h3>Revenue per Client</h3>
                <input
                    type="number"
                    value={clients}
                    onChange={(e) => setClients(e.target.value)}
                    placeholder="Number of Clients"
                />
                <input
                    type="number"
                    value={revenuePerClient}
                    onChange={(e) => setRevenuePerClient(e.target.value)}
                    placeholder="Revenue per Client"
                />
                <p>Total Revenue: £{calculateRevenuePerClient().toFixed(2)}</p>
            </div>
            <div className="calculator">
                <h3>Profit Calculation</h3>
                <input
                    type="number"
                    value={revenue}
                    onChange={(e) => setRevenue(e.target.value)}
                    placeholder="Total Revenue"
                />
                <input
                    type="number"
                    value={expenses}
                    onChange={(e) => setExpenses(e.target.value)}
                    placeholder="Total Expenses"
                />
                <p>Profit: £{calculateProfit().toFixed(2)}</p>
            </div>
        </div>
    );
};

export default BusinessFinance;