import React from 'react';
import DashboardCard, { DashboardCardProps } from './DashboardCard';
import "./card.css";


const dashboardData: DashboardCardProps[] = [
  { number: 92, title: 'Blood Donors', color: 'teal', iconClass: '👜' },
  { number: 69, title: 'Blood Requests', color: 'green', iconClass: '📊' },
  { number: 15, title: 'Blood Banks', color: 'yellow', iconClass: '👤' },
  { number: 892, title: 'App Users', color: 'red', iconClass: '📊' },
  { number: 1, title: 'Blogs', color: 'yellow', iconClass: '👤' },
  { number: 256, title: 'Contacts/Calls', color: 'teal', iconClass: '👜' },
];

const Card: React.FC = () => {
  return (
    <div>
      <div className="header">
        <h1>Dashboard</h1>
        <a href="/">Home</a>
      </div>

      <div className="dashboard-grid">
        {dashboardData.map((card, index) => (
          <DashboardCard
            key={index}
            number={card.number}
            title={card.title}
            color={card.color}
            iconClass={card.iconClass}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
