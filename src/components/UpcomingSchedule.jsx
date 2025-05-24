import React from 'react';
import styled from 'styled-components';
import { Clock } from 'lucide-react';

const ScheduleContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
`;

const ScheduleHeader = styled.div`
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

const DaySection = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const DayHeader = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
`;

const AppointmentCard = styled.div`
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimeBadge = styled.div`
  background: #eff6ff;
  color: #2563eb;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`;

const AppointmentInfo = styled.div`
  flex: 1;

  h4 {
    font-size: 0.875rem;
    color: var(--text-primary);
    margin: 0 0 0.25rem 0;
  }

  p {
    font-size: 0.75rem;
    color: var(--text-secondary);
    margin: 0;
  }
`;

const UpcomingSchedule = () => {
  const scheduleData = {
    'Today': [
      {
        time: '09:00',
        title: 'Dentist',
        doctor: 'Dr. Smitha'
      },
      {
        time: '11:00',
        title: 'Physiotherapy',
        doctor: 'Dr. Harsh'
      }
    ],
    'Tomorrow': [
      {
        time: '13:00',
        title: 'Cardiology',
        doctor: 'Dr. Shweta'
      }
    ]
  };

  return (
    <ScheduleContainer>
      <ScheduleHeader>
        <h3>Upcoming Schedule</h3>
        <Clock />
      </ScheduleHeader>

      {Object.entries(scheduleData).map(([day, appointments]) => (
        <DaySection key={day}>
          <DayHeader>{day}</DayHeader>
          {appointments.map((appointment, index) => (
            <AppointmentCard key={index}>
              <TimeBadge>
                <Clock />
                {appointment.time}
              </TimeBadge>
              <AppointmentInfo>
                <h4>{appointment.title}</h4>
                <p>{appointment.doctor}</p>
              </AppointmentInfo>
            </AppointmentCard>
          ))}
        </DaySection>
      ))}
    </ScheduleContainer>
  );
};

export default UpcomingSchedule;
