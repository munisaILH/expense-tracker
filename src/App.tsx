// src/App.tsx
import React from 'react';
import Header from './components/Header/Header';
import ExpenseSummary from './components/ExpenseSummary/ExpenseSummary';
import ExpenseCard from './components/ExpenseCard/ExpenseCard';
import './App.css';

/**
 * Root application component that renders the main expense tracker interface
 * Demonstrates component composition and prop passing patterns
 */
function App() {
  // Mock data for testing components
  const mockExpenses = [
    {
      id: 1,
      description: "Lunch at downtown cafe",
      amount: 12.50,
      category: "Food",
      date: "2024-01-15"
    },
    {
      id: 2,
      description: "Monthly bus pass",
      amount: 95.00,
      category: "Transportation", 
      date: "2024-01-14"
    }
  ];

  const totalAmount = mockExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="app">
      <Header 
        title="Expense Tracker" 
        subtitle="Manage your spending with confidence" 
      />
      
      <main className="app-main">
        <ExpenseSummary 
          totalAmount={totalAmount}
          expenseCount={mockExpenses.length}
          period="This Month"
        />
        
        <section className="expenses-section">
          <h2>Recent Expenses</h2>
          {mockExpenses.map(expense => (
            <ExpenseCard
              key={expense.id}
              id={expense.id}
              description={expense.description}
              amount={expense.amount}
              category={expense.category}
              date={expense.date}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;