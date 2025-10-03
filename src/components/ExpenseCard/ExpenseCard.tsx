// src/components/ExpenseCard/ExpenseCard.tsx

//SEC 1, STEP 2 Comment Block:
/*
TYPESCRIPT FEATURE INVENTORY:
Interfaces Found:
1. ExpenseCardProps - defines component contract
2. Props.id - id # for props

Type Annotations Found:
1. amount: number - ensures currency values are numeric
2. id: number - unique identifier # for each expense

Autocomplete Helped:
1. Finishing my line of code for something that I could have done (autocompleting "number" for me)

Error I Fixed:
1. Syntax can be fixed easily, as well as clear indications for functionality in React
*/

import React from 'react';
import './ExpenseCard.css';

//Union Types: 
//SortOption -> Used for any sorting functionality
type SortOption = 'date' | 'amount' | 'category';
type FilterOption = 'All' | ExpenseCategory;
type ExpenseCategory = 'Food' | 'Transportation' | 'Entertainment' | 'Other';

// TypeScript interface defines the structure of props this component expects
// This acts like a contract - any parent component must provide these exact properties
export interface ExpenseCardProps {
  //Required Props
  id: number;              // Unique id number for each expense
  description: FilterOption;     // What the expense was for (e.g., "Lunch at Joe's Pizza")
  amount: number;         // Cost in dollars (will be formatted to show currency)
  category: ExpenseCategory;       //Only allows valid categories
  date: string;          // When the expense occurred- date (formatted as string)

  // Optional props (can be provided or not)
  //Adds functionality w/o breaking anything -> more flexible
  onDelete?: (id: number) => void;    // The ? makes it optional
  highlighted?: boolean;              // Component might be highlighted
  showCategory?: boolean;             // Category display might be hidden
}

/**
 * Displays a single expense item with formatted currency and professional styling
 * @param {Object} props - Component props
 * @param {number} props.id - Unique identifier for the expense entry
 * @param {string} props.description - Human-readable description of the expense
 * @param {number} props.amount - Expense amount in dollars (will be formatted as currency)
 * @param {string} props.category - Expense category for organization and filtering
 * @param {string} props.date - Date when expense occurred (ISO string format)
 */
const ExpenseCard: React.FC<ExpenseCardProps> = ({  //What does React.FC mean? -> Functional Component: Generic type to define a functional React component to specify the types of the component's props
  id, 
  description, 
  amount, 
  category, 
  date,
  // Optional props with default values
  highlighted = false,      // Default to false if not provided
  showCategory = true,      // Default to true if not provided
  onDelete                  // Might be undefined
}) => {

  // Format currency for professional display
  // TypeScript automatically kn ows these are the right types
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);

  // Format date for user-friendly display
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <article className="bg-white rounded-lg p-4 mb-3 shadow-md transition-all duration-200 border-l-4 border-blue-500">
      <div className="hover:-translate-y-0.5 hover:shadow-lg">
        <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold uppercase ">{category}</span>
        <time className="text-gray-500 text-xs" dateTime={date}>
          {formattedDate}
        </time>
      </div>
      
      <div className="expense-body">
        <h3 className="expense-description">{description}</h3>
        <p className="expense-amount">{formattedAmount}</p>
      </div>
    </article>
  );
};

export default ExpenseCard;