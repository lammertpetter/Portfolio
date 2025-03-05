import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './PersonalFinance.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const incomeCategories = [
    "Salary",
    "Hourly",
    "Self-Employment",
    "Commission",
    "Bonuses",
    "Investment",
    "Rental",
    "Royalties",
    "Affiliate",
    "Advertising",
    "Unemployment",
    "Disability",
    "Social Security",
    "Child Support",
    "Scholarships",
    "Side Hustles",
    "Lottery",
    "Inheritances",
    "Tax Refunds"
];

const expenseCategories = [
    "Housing",
    "Utilities",
    "Groceries",
    "Transport",
    "Healthcare",
    "Debt",
    "Insurance",
    "Discretionary",
    "Savings"
];

const PersonalFinance = () => {
    const [income, setIncome] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [selectedIncomeCategory, setSelectedIncomeCategory] = useState('');
    const [incomeAmount, setIncomeAmount] = useState('');
    const [selectedExpenseCategory, setSelectedExpenseCategory] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');

    const addIncome = () => {
        if (selectedIncomeCategory && incomeAmount) {
            setIncome([...income, { category: selectedIncomeCategory, amount: parseFloat(incomeAmount) }]);
            setSelectedIncomeCategory('');
            setIncomeAmount('');
        }
    };

    const addExpense = () => {
        if (selectedExpenseCategory && expenseAmount) {
            setExpenses([...expenses, { category: selectedExpenseCategory, amount: parseFloat(expenseAmount) }]);
            setSelectedExpenseCategory('');
            setExpenseAmount('');
        }
    };

    const editIncome = (index) => {
        const newAmount = prompt("Enter new amount:", income[index].amount);
        if (newAmount) {
            const updatedIncome = [...income];
            updatedIncome[index].amount = parseFloat(newAmount);
            setIncome(updatedIncome);
        }
    };

    const removeIncome = (index) => {
        const updatedIncome = income.filter((_, i) => i !== index);
        setIncome(updatedIncome);
    };

    const editExpense = (index) => {
        const newAmount = prompt("Enter new amount:", expenses[index].amount);
        if (newAmount) {
            const updatedExpenses = [...expenses];
            updatedExpenses[index].amount = parseFloat(newAmount);
            setExpenses(updatedExpenses);
        }
    };

    const removeExpense = (index) => {
        const updatedExpenses = expenses.filter((_, i) => i !== index);
        setExpenses(updatedExpenses);
    };

    const totalIncome = income.reduce((acc, curr) => acc + curr.amount, 0);
    const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    const balance = totalIncome - totalExpenses;

    const incomeData = income.reduce((acc, curr) => {
        acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
        return acc;
    }, {});

    const expenseData = expenses.reduce((acc, curr) => {
        acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
        return acc;
    }, {});

    const incomeDetails = Object.entries(incomeData).map(([category, amount]) => `${category}: £${amount}`);
    const expenseDetails = Object.entries(expenseData).map(([category, amount]) => `${category}: £${amount}`);

    const labels = Array.from(new Set([...Object.keys(incomeData), ...Object.keys(expenseData)]));

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Income (£)',
                data: labels.map(label => incomeData[label] || 0),
                backgroundColor: '#4CAF50',
                barThickness: 30,
            },
            {
                label: 'Expenses (£)',
                data: labels.map(label => expenseData[label] || 0),
                backgroundColor: '#FF6384',
                barThickness: 30,
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
        scales: {
            x: {
                stacked: false,
            },
            y: {
                stacked: false,
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="personal-finance">
            <div className="finance-container">
                <div className="finance-form">
                    <div>
                        <h3>Income</h3>
                        <div className="input-group">
                            <select 
                                value={selectedIncomeCategory} 
                                onChange={(e) => setSelectedIncomeCategory(e.target.value)}
                                className="finance-select"
                            >
                                <option value="">Select Income Category</option>
                                {incomeCategories.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))}
                            </select>
                            <input 
                                type="number" 
                                value={incomeAmount} 
                                onChange={(e) => setIncomeAmount(e.target.value)} 
                                placeholder="Income Amount (£)" 
                                className="finance-input small-input"
                            />
                        </div>
                        <button onClick={addIncome} className="finance-button">Add Income</button>
                        <ul>
                            {income.map((inc, index) => (
                                <li key={index}>
                                    {inc.category}: £{inc.amount}
                                    <button onClick={() => editIncome(index)} className="edit-button">Edit</button>
                                    <button onClick={() => removeIncome(index)} className="remove-button">Remove</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Expenses</h3>
                        <div className="input-group">
                            <select 
                                value={selectedExpenseCategory} 
                                onChange={(e) => setSelectedExpenseCategory(e.target.value)}
                                className="finance-select"
                            >
                                <option value="">Select Expense Category</option>
                                {expenseCategories.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))}
                            </select>
                            <input 
                                type="number" 
                                value={expenseAmount} 
                                onChange={(e) => setExpenseAmount(e.target.value)} 
                                placeholder="Expense Amount (£)" 
                                className="finance-input small-input"
                            />
                        </div>
                        <button onClick={addExpense} className="finance-button">Add Expense</button>
                        <ul>
                            {expenses.map((expense, index) => (
                                <li key={index}>
                                    {expense.category}: £{expense.amount}
                                    <button onClick={() => editExpense(index)} className="edit-button">Edit</button>
                                    <button onClick={() => removeExpense(index)} className="remove-button">Remove</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="finance-overview">
                    <div className="totals">
                        <div className="total-item">
                            <h3>Total Income:</h3>
                            <p>£{totalIncome}</p>
                        </div>
                        <div className="total-item">
                            <h3>Total Expenses:</h3>
                            <p>£{totalExpenses}</p>
                        </div>
                        <div className="total-item">
                            <h3>Balance:</h3>
                            <p>£{balance}</p>
                        </div>
                    </div>
                    <h3>Financial Overview</h3>
                    <Bar data={data} options={options} />
                    <div className="details">
                        <h4>Income Details:</h4>
                        <ul>
                            {incomeDetails.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                        <h4>Expense Details:</h4>
                        <ul>
                            {expenseDetails.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalFinance;