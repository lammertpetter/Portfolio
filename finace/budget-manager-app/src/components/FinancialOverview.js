import React from 'react';
import { Bar } from 'react-chartjs-2';
import './FinancialOverview.css';

const FinancialOverview = ({ products }) => {
    const labels = products.map(product => product.name);
    const data = {
        labels,
        datasets: [
            {
                label: 'Price',
                data: products.map(product => product.price),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Cost',
                data: products.map(product => product.cost),
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Financial Overview',
            },
        },
    };

    return (
        <div className="financial-overview">
            <h2>Financial Overview</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default FinancialOverview;