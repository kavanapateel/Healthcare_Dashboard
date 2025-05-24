import { FaCheckCircle, FaEye, FaHeart, FaBrain } from 'react-icons/fa';

export const upcomingAppointments = [
    {
      day: 'Thursday',
      appointments: [
        {
          title: 'Health checkup complete',
          time: '08:00 AM',
          icon: <FaCheckCircle />, 
        },
        {
          title: 'Ophthalmologist',
          time: '10:30 AM',
          icon: <FaEye />,
        },
      ],
    },
    {
      day: 'Saturday',
      appointments: [
        {
          title: 'Cardiologist',
          time: '09:00 AM',
          icon: <FaHeart />,
        },
        {
          title: 'Neurologist',
          time: '12:00 PM',
          icon: <FaBrain />,
        },
      ],
    },
  ];
  