import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { database } from '../firebase'; // Adjust the path as necessary
import { ref, push } from 'firebase/database';

function Main() {
  const [isFormVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    category: '',
    amount: '',
    description: '',
  });
  const [expenses, setExpenses] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Save to Firebase
    const expenseRef = ref(database, 'expenses');
    await push(expenseRef, formData);

    // Update local state
    setExpenses([...expenses, formData]);
    setFormData({ date: '', category: '', amount: '', description: '' });
    setFormVisible(false);
  };

  return (
    <>
      <Navbar />
      <h1 className='text-center text-blue-600 p-6 text-4xl'>Expenses</h1>
      <div className="flex justify-center mb-4">
        <button
          className="text-center bg-blue-600 p-4 text-white rounded-full"
          onClick={() => setFormVisible(true)}
        >
          Add new Expense
        </button>
      </div>

      {isFormVisible && (
        <form onSubmit={handleSubmit} className="flex flex-col items-center mb-4">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mb-2 p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="mb-2 p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            className="mb-2 p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="mb-2 p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 p-2 text-white rounded"
          >
            Submit
          </button>
        </form>
      )}

      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Category</th>
            <th className="border border-gray-300 p-2">Amount</th>
            <th className="border border-gray-300 p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{expense.date}</td>
              <td className="border border-gray-300 p-2">{expense.category}</td>
              <td className="border border-gray-300 p-2">{expense.amount}</td>
              <td className="border border-gray-300 p-2">{expense.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Main;
