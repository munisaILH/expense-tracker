# Expense Tracker

# Expense Tracker (Vite Version)

** Migration Note:** This project was migrated to Next.js in Week 6.
See the Next.js version: [expense-tracker-next](https://github.com/your-username/expense-tracker-next)

React expense tracking application built with Vite, TypeScript, and Tailwind CSS (Weeks 2-5).

**Tech Stack:** Vite, React, TypeScript, Tailwind CSS

**Migration Journey:**
- Weeks 2-5: Built with Vite + React (this version)
- Week 6: Migrated to Next.js for production features
- Week 7: Deployed with CI/CD pipeline

[Rest of your original README: ]

## Overview
A full-stack expense tracking application built with React, TypeScript, 
and AWS services. Helps individuals track spending patterns and maintain budgets 
with intelligent categorization and analytics.

## Problem Statement
Young professionals and students struggle to track spending patterns effectively, 
leading to budget overshoots and poor financial decisions. Existing solutions are 
either too complex or lack the features needed for modern spending habits.

## Technical Architecture
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Backend**: Next.js API routes with AWS Lambda
- **Database**: PostgreSQL with Drizzle ORM
- **Cloud**: AWS (S3, Lambda, Aurora DSQL)
- **Testing**: Vitest with 70% coverage target
- **Deployment**: GitHub Actions CI/CD

## Prerequisites
- Node.js 18.17.0 or higher
- npm 9.6.7 or higher
- Git configured with your credentials
- GitHub account with Copilot access

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/[yourusername]/expense-tracker
   cd expense-tracker
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cd .env.example .env.local
   # Add your confuguration values
   ```
4. Start development server:
   ```bash
   npm run dev
   ```
## Contributing
Please read our Contributing Guidelines and Code of Conduct before submitting PRs.

## Architecture Decision Records
See docs/ADR/ for technical decision documentation.

## License
MIT License - see LICENSE for details.