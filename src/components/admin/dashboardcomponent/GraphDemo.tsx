import React, { useState, useEffect } from 'react';
import Graph from './Graph';
import './graphdemo.css';

// Sample initial data
const initialUserData = [
  { month: 'Nov', value: 1.2 },
  { month: 'Dec', value: 0 },
  { month: 'Jan', value: 0 },
  { month: 'Feb', value: 1 },
  { month: 'Mar', value: 0 },
  { month: 'Apr', value: 0 },
];

const initialDonorData = [
  { month: 'Nov', value: 0 },
  { month: 'Dec', value: 0 },
  { month: 'Jan', value: 0 },
  { month: 'Feb', value: 0 },
  { month: 'Mar', value: 0 },
  { month: 'Apr', value: 0 },
];

const GraphDemo: React.FC = () => {
  const [userData, setUserData] = useState(initialUserData);
  const [donorData, setDonorData] = useState(initialDonorData);
  const [timeFilter, setTimeFilter] = useState<'6months' | '3months' | '1month'>('6months');

  // Simulate data change based on user interaction
  const updateUserData = (month: string, amount: number) => {
    setUserData(prevData =>
      prevData.map(item =>
        item.month === month ? { ...item, value: item.value + amount } : item
      )
    );
  };

  const updateDonorData = (month: string, amount: number) => {
    setDonorData(prevData =>
      prevData.map(item =>
        item.month === month ? { ...item, value: item.value + amount } : item
      )
    );
  };

  // Filter data based on time range
  const filterData = (data: typeof userData) => {
    if (timeFilter === '3months') {
      return data.slice(3); // Last 3 months
    } else if (timeFilter === '1month') {
      return data.slice(5); // Last month
    }
    return data; // All 6 months
  };

  // Reset all data
  const resetData = () => {
    setUserData(initialUserData);
    setDonorData(initialDonorData);
  };

  return (
    <div className="graph-demo">
      <div className="filter-controls">
        <h2>User and Donor Activity</h2>
        <div className="buttons">
          <button
            className={timeFilter === '6months' ? 'active' : ''}
            onClick={() => setTimeFilter('6months')}
          >
            Last 6 months
          </button>
          <button
            className={timeFilter === '3months' ? 'active' : ''}
            onClick={() => setTimeFilter('3months')}
          >
            Last 3 months
          </button>
          <button
            className={timeFilter === '1month' ? 'active' : ''}
            onClick={() => setTimeFilter('1month')}
          >
            Last month
          </button>
        </div>
      </div>

      <div className="graphs-container">
        <Graph
          title="Last 6 months users joining"
          data={filterData(userData)}
          color="#007BFF"
        />
        <Graph
          title="Last 6 months donor joining"
          data={filterData(donorData)}
          color="#007BFF"
        />
      </div>

      <div className="demo-controls">
        <h3>Demo Controls</h3>
        <p>Click buttons below to simulate user activity:</p>

        <div className="control-group">
          <h4>Add User</h4>
          <div className="button-group">
            {initialUserData.map(item => (
              <button key={`add-user-${item.month}`} onClick={() => updateUserData(item.month, 1)}>
                {item.month}
              </button>
            ))}
          </div>
        </div>

        <div className="control-group">
          <h4>Add Donor</h4>
          <div className="button-group">
            {initialDonorData.map(item => (
              <button key={`add-donor-${item.month}`} onClick={() => updateDonorData(item.month, 1)}>
                {item.month}
              </button>
            ))}
          </div>
        </div>

        <button className="reset-button" onClick={resetData}>
          Reset All Data
        </button>
      </div>
    </div>
  );
};

export default GraphDemo;
