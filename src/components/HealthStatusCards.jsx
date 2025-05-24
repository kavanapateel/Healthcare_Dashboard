import React from 'react';
import styled from 'styled-components';
import { Heart, Activity, Brain, Wind, AlertCircle, CheckCircle2, ActivitySquare } from 'lucide-react';
import { healthStatusCards } from '../data/healthData';

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  .icon-wrapper {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => {
      switch (props.status) {
        case 'healthy':
          return '#dcfce7';
        case 'needs attention':
          return '#fee2e2';
        case 'good':
          return '#dbeafe';
        case 'critical':
          return '#fee2e2';
        case 'stable':
          return '#fef3c7';
        default:
          return '#f3f4f6';
      }
    }};

    svg {
      width: 24px;
      height: 24px;
      color: ${props => {
        switch (props.status) {
          case 'healthy':
            return '#16a34a';
          case 'needs attention':
            return '#dc2626';
          case 'good':
            return '#2563eb';
          case 'critical':
            return '#dc2626';
          case 'stable':
            return '#d97706';
          default:
            return '#6b7280';
        }
      }};
    }
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
  }
`;

const CardContent = styled.div`
  p {
    color: var(--text-secondary);
    font-size: 0.875rem;
    margin: 0 0 0.5rem 0;
  }
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => {
    switch (props.status) {
      case 'healthy':
        return '#dcfce7';
      case 'needs attention':
        return '#fee2e2';
      case 'good':
        return '#dbeafe';
      case 'critical':
        return '#fee2e2';
      case 'stable':
        return '#fef3c7';
      default:
        return '#f3f4f6';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'healthy':
        return '#16a34a';
      case 'needs attention':
        return '#dc2626';
      case 'good':
        return '#2563eb';
      case 'critical':
        return '#dc2626';
      case 'stable':
        return '#d97706';
      default:
        return '#6b7280';
    }
  }};

  svg {
    width: 14px;
    height: 14px;
  }
`;

const getIcon = (title) => {
  switch (title.toLowerCase()) {
    case 'human anatomy':
      return <Brain size={24} />;
    case 'heart rate':
      return <Heart size={24} />;
    case 'blood pressure':
      return <Activity size={24} />;
    case 'respiratory':
      return <Wind size={24} />;
    default:
      return <Activity size={24} />;
  }
};

const getStatusIcon = (status) => {
  switch (status.toLowerCase()) {
    case 'critical':
      return <AlertCircle size={14} />;
    case 'good':
      return <CheckCircle2 size={14} />;
    case 'stable':
      return <ActivitySquare size={14} />;
    case 'healthy':
      return <CheckCircle2 size={14} />;
    case 'needs attention':
      return <AlertCircle size={14} />;
    default:
      return null;
  }
};

const HealthStatusCards = () => {
  return (
    <CardsContainer>
      {healthStatusCards.map((card, index) => (
        <Card key={index}>
          <CardHeader status={card.status.toLowerCase()}>
            <div className="icon-wrapper">
              {getIcon(card.title)}
            </div>
            <h4>{card.title}</h4>
          </CardHeader>
          <CardContent>
            <p>{card.date}</p>
            <StatusBadge status={card.status.toLowerCase()}>
              {getStatusIcon(card.status)}
              {card.status}
            </StatusBadge>
          </CardContent>
        </Card>
      ))}
    </CardsContainer>
  );
};

export default HealthStatusCards;
