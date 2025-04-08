"use client";
import React, { useMemo } from 'react';
import './graph.css';

interface DataPoint {
  month: string;
  value: number;
}

interface GraphProps {
  title: string;
  data: DataPoint[];
  color: string;
  maxYValue: number;
  yStep: number;
}

const Graph: React.FC<GraphProps> = ({ 
  title, 
  data, 
  color,
  maxYValue,
  yStep
}) => {
  const yLabels = useMemo(() => {
    const labels = [];
    for (let i = maxYValue; i >= 0; i -= yStep) {
      labels.push(i.toFixed(1));
    }
    return labels;
  }, [maxYValue, yStep]);

  return (
    <div className="graph-card">
      <h3 className="graph-title">{title}</h3>
      <div className="graph-content">
        <div className="y-axis">
          {yLabels.map((label) => (
            <div key={label} className="y-label">{label}</div>
          ))}
        </div>
        <div className="bars-container">
          {data.map((item) => (
            <div key={item.month} className="bar-wrapper">
              <div
                className="bar"
                style={{
                  height: `${(item.value / maxYValue) * 100}%`,
                  backgroundColor: color
                }}
              />
              <div className="month-label">{item.month}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface DashboardProps {
  className?: string;
}

export const DashboardGraphs: React.FC<DashboardProps> = ({ className }) => {
  const usersData = useMemo(() => [
    { month: 'Nov', value: 1.2 },
    { month: 'Dec', value: 1.5 },
    { month: 'Jan', value: 1.8 },
    { month: 'Feb', value: 1.6 },
    { month: 'Mar', value: 1.4 },
    { month: 'Apr', value: 1.9 }
  ], []);

  const donorsData = useMemo(() => [
    { month: 'Nov', value: 0.5 },
    { month: 'Dec', value: 0.7 },
    { month: 'Jan', value: 0.9 },
    { month: 'Feb', value: 0.8 },
    { month: 'Mar', value: 0.6 },
    { month: 'Apr', value: 0.85 }
  ], []);

  return (
    <div className={`dashboard-graphs ${className || ''}`}>
      <Graph 
        title="Last 6 months users joining" 
        data={usersData}
        color="#4285F4"
        maxYValue={2}
        yStep={0.2}
      />
      <Graph 
        title="Last 6 months donor joining" 
        data={donorsData}
        color="#34A853"
        maxYValue={1}
        yStep={0.1}
      />
    </div>
  );
};

export default DashboardGraphs;