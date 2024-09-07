import React, { createContext, useState, useEffect } from 'react';

// Creación del contexto
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [weeklyActivity, setWeeklyActivity] = useState({
    labels: [],
    datasets: []
  });
  const [expenseStats, setExpenseStats] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setTransactions(data.slice(0, 3));
    };

    const fetchWeeklyActivity = () => {
      const data = {
        labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [
          { label: "Deposit", data: [400, 300, 450, 350, 500, 450, 300], backgroundColor: "#0066FF" },
          { label: "Withdraw", data: [200, 150, 200, 100, 250, 150, 100], backgroundColor: "#00D1FF" }
        ]
      };
      setWeeklyActivity(data);
    };

    const fetchExpenseStats = () => {
      const stats = {
        labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
        datasets: [
          { data: [30, 15, 20, 35], backgroundColor: ["#0066FF", "#FF8F6A", "#9B51E0", "#FFC371"] }
        ]
      };
      setExpenseStats(stats);
    };

    fetchTransactions();
    fetchWeeklyActivity();
    fetchExpenseStats();
  }, []);

  return (
    <AppContext.Provider value={{ transactions, weeklyActivity, expenseStats }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
