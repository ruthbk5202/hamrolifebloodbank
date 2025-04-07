"use client";
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './graph.css';

interface DataPoint {
  month: string;
  value: number;
}

interface GraphProps {
  title: string;
  data?: DataPoint[];
  color?: string;
  maxYValue?: number;
  yStep?: number;
}

const Graph: React.FC<GraphProps> = ({ 
  title, 
  data = [], 
  color = '#007BFF',
  maxYValue,
  yStep = 0.2
}) => {
  const [graphData, setGraphData] = useState<DataPoint[]>(data);

  // Calculate max value with optional override
  const maxValue = useMemo(() => {
    return maxYValue || Math.max(...graphData.map(item => item?.value || 0), 0.1);
  }, [graphData, maxYValue]);

  // Generate Y-axis labels
  const yLabels = useMemo(() => {
    const labels = [];
    for (let i = maxValue; i >= 0; i -= yStep) {
      labels.push(i.toFixed(1));
    }
    return labels;
  }, [maxValue, yStep]);

  return (
    <div className="graph-container">
      <h3 className="graph-title">{title}</h3>
      <div className="graph-content">
        <div className="y-axis">
          {yLabels.map((label, index) => (
            <div key={`y-label-${index}`} className="y-label">
              {label}
            </div>
          ))}
        </div>
        <div className="graph-bars">
          {graphData.map((item, index) => (
            <div key={`bar-${index}`} className="bar-container">
              <div
                className="bar"
                style={{
                  height: `${((item?.value || 0) / maxValue) * 100}%`,
                  backgroundColor: color
                }}
                title={`${item?.month || 'N/A'}: ${item?.value || 0}`}
              />
              <div className="x-label">{item?.month || 'N/A'}</div>
            </div>
          ))}
        </div>
        <DashboardGraphs/>
      </div>
    </div>
  );
};

interface DashboardProps {
  showSecondGraph?: boolean;
}

export const DashboardGraphs: React.FC<DashboardProps> = ({ showSecondGraph = true }) => {
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
    <div className="dashboard-graphs">
      <Graph 
        title="Last 6 months users joining" 
        data={usersData}
        color="#4285F4"
        maxYValue={2}
        yStep={0.2}
      />
      {showSecondGraph && (
        <Graph 
          title="Last 6 months donor joining" 
          data={donorsData}
          color="#34A853"
          maxYValue={1}
          yStep={0.1}
        />
      )}
    </div>
  );
};

export default Graph;