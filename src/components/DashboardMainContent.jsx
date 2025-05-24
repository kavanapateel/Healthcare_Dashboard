import React from 'react';
import styled from 'styled-components';
import DashboardOverview from './DashboardOverview';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const MainContainer = styled.main`
  margin-left: 280px;
  padding: 2rem;
  min-height: 100vh;
  background: #f8fafc;
  padding-top: 90px;

  @media (max-width: 1024px) {
    margin-left: 80px;
    padding: 1rem;
    padding-top: 90px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding-top: 90px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-top: 0.75rem;
`;

const CalendarScheduleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const DashboardMainContent = () => {
  return (
    <MainContainer>
      <DashboardOverview />
      <GridContainer>
        <CalendarScheduleContainer>
          <CalendarView />
          <UpcomingSchedule />
        </CalendarScheduleContainer>
        <ActivityFeed />
      </GridContainer>
    </MainContainer>
  );
};

export default DashboardMainContent;
