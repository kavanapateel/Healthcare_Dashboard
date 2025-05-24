import React from 'react';
import styled from 'styled-components';
import { healthStatusIndicators } from '../data/healthData';

const SectionContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
`;

const AnatomyImage = styled.div`
  width: 100%;
  height: 300px;
  background-image: url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3));
    border-radius: 8px;
  }
`;

const IndicatorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const Indicator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: ${props => {
    switch (props.status) {
      case 'healthy':
        return '#dcfce7';
      case 'needs attention':
        return '#fee2e2';
      case 'good':
        return '#dbeafe';
      default:
        return '#f3f4f6';
    }
  }};
  border-radius: 8px;
  font-size: 0.875rem;

  .label {
    color: var(--text-primary);
    font-weight: 500;
  }

  .status {
    color: ${props => {
      switch (props.status) {
        case 'healthy':
          return '#16a34a';
        case 'needs attention':
          return '#dc2626';
        case 'good':
          return '#2563eb';
        default:
          return '#6b7280';
      }
    }};
    font-weight: 600;
  }
`;

const AnatomySection = () => {
  return (
    <SectionContainer>
      <h3>Human Anatomy Overview</h3>
      <AnatomyImage />
      <IndicatorsContainer>
        {healthStatusIndicators.map((item, index) => (
          <Indicator key={index} status={item.status.toLowerCase()}>
            <span className="label">{item.label}</span>
            <span className="status">{item.status}</span>
          </Indicator>
        ))}
      </IndicatorsContainer>
    </SectionContainer>
  );
};

export default AnatomySection;
