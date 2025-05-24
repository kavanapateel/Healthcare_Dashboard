import React from 'react';
import styled from 'styled-components';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';

const OverviewContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
`;

const OverviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;

  h2 {
    font-size: 1.5rem;
    color: var(--text-primary);
  }

  .date {
    color: var(--text-secondary);
    font-size: 0.875rem;
  }
`;

const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const WelcomeBanner = styled.div`
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  border-radius: 12px;
  padding: 2rem;
  color: white;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  .welcome-text {
    flex: 1;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    p {
      opacity: 0.9;
      font-size: 0.875rem;
    }
  }

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;

    img {
      width: 100px;
      height: 100px;
    }
  }
`;

const DashboardOverview = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <OverviewContainer>
      <WelcomeBanner>
        <div className="welcome-text">
          <h3>Welcome back, Dr. Smitha!</h3>
          <p>Here's what's happening with your patients today.</p>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=400&fit=crop" 
          alt="Medical illustration"
        />
      </WelcomeBanner>
      <OverviewHeader>
        <h2>Overview</h2>
        {/* <span className="date">{currentDate}</span> */}
      </OverviewHeader>
      <OverviewGrid>
        <AnatomySection />
        <HealthStatusCards />
      </OverviewGrid>
    </OverviewContainer>
  );
};

export default DashboardOverview;
