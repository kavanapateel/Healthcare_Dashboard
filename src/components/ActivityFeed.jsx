import React from 'react';
import styled from 'styled-components';
import { BarChart3 } from 'lucide-react';

const ActivityContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
`;

const ActivityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.25rem;
    color: var(--text-primary);
    margin: 0;
  }

  svg {
    color: var(--text-secondary);
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const AppointmentCount = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const ChartContainer = styled.div`
  height: 200px;
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
`;

const Bar = styled.div`
  flex: 1;
  background: #2563eb;
  border-radius: 4px 4px 0 0;
  height: ${props => props.height}%;
  position: relative;

  &::after {
    content: '${props => props.value}';
    position: absolute;
    top: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.75rem;
    color: var(--text-secondary);
  }
`;

const ActivityFeed = () => {
  const chartData = [
    { day: 'Mon', value: '2', height: 40 },
    { day: 'Tue', value: '3', height: 60 },
    { day: 'Wed', value: '1', height: 20 },
    { day: 'Thu', value: '4', height: 80 },
    { day: 'Fri', value: '2', height: 40 },
    { day: 'Sat', value: '1', height: 20 },
    { day: 'Sun', value: '0', height: 0 }
  ];

  return (
    <ActivityContainer>
      <ActivityHeader>
        <h3>Activity</h3>
        <BarChart3 />
      </ActivityHeader>
      
      <AppointmentCount>
        3 appointments on this week
      </AppointmentCount>

      <ChartContainer>
        {chartData.map((data, index) => (
          <Bar 
            key={index}
            height={data.height}
            value={data.value}
          />
        ))}
      </ChartContainer>
    </ActivityContainer>
  );
};

export default ActivityFeed;
