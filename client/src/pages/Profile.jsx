import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/quieries'; 
import { ADD_TRANSACTION, ADD_BUDGET, ADD_GOAL } from '../utils/mutations'; 

const Profile = () => {
  const { loading, data, refetch } = useQuery(QUERY_ME);
  const [addTransaction] = useMutation(ADD_TRANSACTION);
  const [addBudget] = useMutation(ADD_BUDGET);
  const [addGoal] = useMutation(ADD_GOAL);

  const [newTransaction, setNewTransaction] = useState({ description: '', amount: '' });
  const [newBudget, setNewBudget] = useState({ name: '', limit: '' });
  const [newGoal, setNewGoal] = useState({ name: '', target: '' });

  const user = data?.me || {};

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name in newTransaction) {
      setNewTransaction({ ...newTransaction, [name]: value });
    } else if (name in newBudget) {
      setNewBudget({ ...newBudget, [name]: value });
    } else if (name in newGoal) {
      setNewGoal({ ...newGoal, [name]: value });
    }
  };

  const handleAddTransaction = async () => {
    await addTransaction({ variables: { ...newTransaction } });
    setNewTransaction({ description: '', amount: '' });
    refetch();
  };

  const handleAddBudget = async () => {
    await addBudget({ variables: { ...newBudget } });
    setNewBudget({ name: '', limit: '' });
    refetch();
  };

  const handleAddGoal = async () => {
    await addGoal({ variables: { ...newGoal } });
    setNewGoal({ name: '', target: '' });
    refetch();
  };

  const mainStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px'
  };

  const divStyle = {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '80%',
    maxWidth: '800px'
  };

  const h1Style = {
    fontSize: '2.5rem',
    color: '#333'
  };

  const h2Style = {
    fontSize: '2rem',
    color: '#333',
    marginTop: '20px'
  };

  const pStyle = {
    fontSize: '1.2rem',
    color: '#666',
    marginTop: '20px'
  };

  const ulStyle = {
    textAlign: 'left',
    marginTop: '20px',
    listStyleType: 'none',
    padding: 0
  };

  const liStyle = {
    backgroundColor: '#f9f9f9',
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const formStyle = {
    marginTop: '20px'
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginRight: '10px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer'
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main style={mainStyle}>
      <div style={divStyle}>
        <h1 style={h1Style}>Welcome!</h1>

        <h2 style={h2Style}>Your Transactions</h2>
        <ul style={ulStyle}>
          {user.transactions?.map((transaction) => (
            <li key={transaction._id} style={liStyle}>
              {transaction.description} - ${transaction.amount}
              {/* Add edit and delete buttons here */}
            </li>
          ))}
        </ul>
        <div style={formStyle}>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newTransaction.description}
            onChange={handleInputChange}
            style={inputStyle}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={newTransaction.amount}
            onChange={handleInputChange}
            style={inputStyle}
          />
          <button onClick={handleAddTransaction} style={buttonStyle}>Add Transaction</button>
        </div>

        <h2 style={h2Style}>Your Budgets</h2>
        <ul style={ulStyle}>
          {user.budgets?.map((budget) => (
            <li key={budget._id} style={liStyle}>
              {budget.name} - ${budget.limit}
              {/* Add edit and delete buttons here */}
            </li>
          ))}
        </ul>
        <div style={formStyle}>
          <input
            type="text"
            name="name"
            placeholder="Budget Name"
            value={newBudget.name}
            onChange={handleInputChange}
            style={inputStyle}
          />
          <input
            type="number"
            name="limit"
            placeholder="Limit"
            value={newBudget.limit}
            onChange={handleInputChange}
            style={inputStyle}
          />
          <button onClick={handleAddBudget} style={buttonStyle}>Add Budget</button>
        </div>

        <h2 style={h2Style}>Your Goals</h2>
        <ul style={ulStyle}>
          {user.goals?.map((goal) => (
            <li key={goal._id} style={liStyle}>
              {goal.name} - ${goal.target}
              {/* Add edit and delete buttons here */}
            </li>
          ))}
        </ul>
        <div style={formStyle}>
          <input
            type="text"
            name="name"
            placeholder="Goal Name"
            value={newGoal.name}
            onChange={handleInputChange}
            style={inputStyle}
          />
          <input
            type="number"
            name="target"
            placeholder="Target"
            value={newGoal.target}
            onChange={handleInputChange}
            style={inputStyle}
          />
          <button onClick={handleAddGoal} style={buttonStyle}>Add Goal</button>
        </div>
      </div>
    </main>
  );
};

export default Profile;
