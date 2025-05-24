import React from 'react';
import styled from 'styled-components';
import { Calendar as CalendarIcon } from 'lucide-react';

const CalendarContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
`;

const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const WeekDay = styled.div`
  text-align: center;
  font-size: 0.75rem;
  color: var(--text-secondary);
  padding: 0.5rem;
`;

const DayCell = styled.div`
  aspect-ratio: 1;
  padding: 0.5rem;
  border-radius: 8px;
  background: ${props => props.isToday ? '#f0f9ff' : 'transparent'};
  border: 1px solid ${props => props.isToday ? '#bae6fd' : 'transparent'};
  position: relative;
  cursor: pointer;

  &:hover {
    background: #f8fafc;
  }
`;

const DayNumber = styled.span`
  font-size: 0.875rem;
  color: var(--text-primary);
  font-weight: 500;
`;

const AppointmentTime = styled.div`
  font-size: 0.75rem;
  color: #2563eb;
  background: #eff6ff;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  margin-top: 0.25rem;
  text-align: center;
`;

const AppointmentDetails = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const AppointmentCard = styled.div`
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid #e2e8f0;

  h4 {
    font-size: 0.875rem;
    color: var(--text-primary);
    margin: 0 0 0.25rem 0;
  }

  p {
    font-size: 0.75rem;
    color: var(--text-secondary);
    margin: 0 0 0.25rem 0;
  }

  span {
    font-size: 0.75rem;
    color: #2563eb;
    font-weight: 500;
  }
`;

const CalendarView = () => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date().getDate();

  const appointments = {
    5: ['09:00', '11:00'],
    12: ['13:00'],
    19: ['15:00'],
    26: ['09:00']
  };

  const detailedAppointments = [
    {
      title: 'Dentist',
      doctor: 'Dr. Smitha',
      date: 'Oct 5, 2021',
      time: '09:00'
    },
    {
      title: 'Physiotherapy',
      doctor: 'Dr. Harsh',
      date: 'Oct 12, 2021',
      time: '13:00'
    }
  ];

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarIcon />
        <h3>October 2021</h3>
      </CalendarHeader>
      
      <CalendarGrid>
        {weekDays.map(day => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}
        {[...Array(31)].map((_, index) => {
          const day = index + 1;
          const dayAppointments = appointments[day] || [];
          
          return (
            <DayCell key={day} isToday={day === today}>
              <DayNumber>{day}</DayNumber>
              {dayAppointments.map((time, i) => (
                <AppointmentTime key={i}>{time}</AppointmentTime>
              ))}
            </DayCell>
          );
        })}
      </CalendarGrid>

      <AppointmentDetails>
        {detailedAppointments.map((appointment, index) => (
          <AppointmentCard key={index}>
            <h4>{appointment.title}</h4>
            <p>{appointment.doctor}</p>
            <span>{appointment.date} - {appointment.time}</span>
          </AppointmentCard>
        ))}
      </AppointmentDetails>
    </CalendarContainer>
  );
};

export default CalendarView;
