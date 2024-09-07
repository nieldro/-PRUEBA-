import React, { useContext } from "react";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Bar } from "react-chartjs-2";
import Navbar from "../components/Navbar.jsx";
import { AppContext } from "./AppContext.jsx";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

// Registrar los elementos de Chart.js
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Home = () => {
  const { transactions, weeklyActivity, expenseStats } = useContext(AppContext);

  const isWeeklyActivityValid = weeklyActivity && weeklyActivity.datasets && weeklyActivity.datasets.length > 0;
  const isExpenseStatsValid = expenseStats && expenseStats.datasets && expenseStats.datasets.length > 0;

  return (
    <div className="home-container">
      <Navbar />
      <div className="dashboard-content">
        <div className="overview-header">
          <h2>Overview</h2>
        </div>

        <div className="my-cards-section">
          <div className="card-item">
            <h4>Balance</h4>
            <p>$5,756</p>
            <p>Card Holder: Alejandro Herrera</p>
            <p>**** **** **** 1234</p>
          </div>
          <div className="card-item">
            <h4>Balance</h4>
            <p>$45,756</p>
            <p>Card Holder: Alejandro Herrera</p>
            <p>**** **** **** 4321</p>
          </div>
        </div>

        <div className="recent-transactions">
          <h3>Recent Transactions</h3>
          <div className="transaction">
            <div className="transaction-info">
              <p>Deposit from my Card</p>
              <p>28 January 2021</p>
            </div>
            <div className="transaction-amount">
              <FaArrowDown style={{ color: 'red' }} />
              <p>$850</p>
            </div>
          </div>
          <div className="transaction">
            <div className="transaction-info">
              <p>Deposit Paypal</p>
              <p>25 January 2021</p>
            </div>
            <div className="transaction-amount">
              <FaArrowUp style={{ color: 'green' }} />
              <p>$2,500</p>
            </div>
          </div>
          <div className="transaction">
            <div className="transaction-info">
              <p>Jemi Wilson</p>
              <p>21 January 2021</p>
            </div>
            <div className="transaction-amount">
              <FaArrowUp style={{ color: 'green' }} />
              <p>$5,400</p>
            </div>
          </div>
        </div>

        <div className="charts-section">
          <div className="weekly-activity">
            <h3>Weekly Activity</h3>
            {isWeeklyActivityValid ? <Bar data={weeklyActivity} /> : <p>No data available for Weekly Activity</p>}
          </div>
          <div className="expense-statistics">
            <h3>Expense Statistics</h3>
            {isExpenseStatsValid ? <Doughnut data={expenseStats} /> : <p>No data available for Expense Statistics</p>}
          </div>
        </div>

        <div className="quick-transfer">
          <h3>Quick Transfer</h3>
          <div className="transfer-item">
            <img src="https://www.infobae.com/new-resizer/xmqvxbVu9F_xd_KYDco6p42jwB4=/1200x900/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/ACJWNWHPM5GJNKV7AXQDEC2DHI.png" alt="Livia Bator" />
            <div className="transfer-info">
              <p>Livia Bator</p>
              <p>CEO</p>
            </div>
          </div>
          <div className="transfer-item">
            <img src="https://birbe.org/wp-content/uploads/hombre-guapo.jpg" alt="Randy Press" />
            <div className="transfer-info">
              <p>Randy Press</p>
              <p>Director</p>
            </div>
          </div>
          <div className="transfer-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORMmf_hP8nuiqNKA0hely-zOf02P9mxCWLQ&s" alt="Workman" />
            <div className="transfer-info">
              <p>Workman</p>
              <p>Designer</p>
            </div>
          </div>
          <div className="transfer-amount">
            <input type="text" placeholder="Write Amount" />
            <button>Send</button>
          </div>
        </div>

        <div className="balance-history">
          <h3>Balance History</h3>
          <Bar data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Balance',
              data: [500, 700, 800, 600, 1000, 750, 900, 1100, 1050, 1200, 1300, 1500],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            }],
          }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
