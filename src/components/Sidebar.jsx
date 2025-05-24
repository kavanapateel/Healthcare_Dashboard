import { Home, Calendar, Users, Activity, Settings, ChevronRight } from 'lucide-react';
import styled from 'styled-components';
import { navLinks } from '../data/navigation';

const SidebarContainer = styled.aside`
  width: 280px;
  background: #f8fafc;
  height: 100vh;
  padding: 1.5rem;
  border-right: 1px solid #e2e8f0;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
  z-index: 100;

  @media (max-width: 1024px) {
    width: 80px;
    padding: 1rem 0.5rem;
  }

  @media (max-width: 768px) {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    
    &.open {
      transform: translateX(0);
    }
  }
`;

const SidebarHeader = styled.div`
  padding: 0 0.5rem;
  margin-bottom: 2rem;

  h2 {
    color: #1e293b;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;

    @media (max-width: 1024px) {
      display: none;
    }
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0.5rem 0;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: #64748b;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background: #f1f5f9;
    color: #2563eb;
  }

  &.active {
    background: #2563eb;
    color: white;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.75rem;
  }

  span {
    font-size: 0.875rem;
    font-weight: 500;

    @media (max-width: 1024px) {
      display: none;
    }
  }
`;

const getIcon = (link) => {
  switch (link.toLowerCase()) {
    case 'dashboard':
      return <Home size={20} />;
    case 'appointments':
      return <Calendar size={20} />;
    case 'patients':
      return <Users size={20} />;
    case 'activity':
      return <Activity size={20} />;
    case 'settings':
      return <Settings size={20} />;
    default:
      return <ChevronRight size={20} />;
  }
};

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <h2>General</h2>
      </SidebarHeader>
      <NavList>
        {navLinks.map((link, i) => (
          <NavItem key={i}>
            <NavLink className={i === 0 ? 'active' : ''}>
              {getIcon(link)}
              <span>{link}</span>
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </SidebarContainer>
  );
}

export default Sidebar;
