import React from 'react';

export interface DashboardCardProps {
  number: number;
  title: string;
  color: 'teal' | 'green' | 'yellow' | 'red';
  iconClass?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ number, title, color, iconClass }) => {
  return (
    <div className={`dashboard-card ${color}`}>
      <div className="card-number">{number}</div>
      <div className="card-title">{title}</div>
      {iconClass && <div className="card-icon">{iconClass}</div>}
      <div className="card-footer">
        <a href="#" className="more-info">
          More info <span className="more-info-icon">ⓘ</span>
        </a>
      </div>
    </div>
  );
};

export default DashboardCard;