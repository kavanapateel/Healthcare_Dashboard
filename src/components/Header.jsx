import { Search, Bell, Plus, User } from 'lucide-react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #fff;
  box-shadow: 0 1px 5px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  right: 0;
  left: 280px;
  z-index: 50;
  height: 70px;

  @media (max-width: 1024px) {
    left: 80px;
    padding: 1rem;
  }

  @media (max-width: 768px) {
    left: 0;
  }
`;

const Logo = styled.h1`
  color: #2563eb;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

const SearchBar = styled.div`
  position: relative;
  width: 300px;

  @media (max-width: 768px) {
    display: none;
  }

  input {
    width: 100%;
    padding: 0.5rem 1rem 0.5rem 2.5rem;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-size: 0.875rem;
    outline: none;
    transition: all 0.2s;

    &:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
    }
  }

  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #6b7280;
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
  }
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 8px;
  border: none;
  background: ${props => props.primary ? '#2563eb' : 'transparent'};
  color: ${props => props.primary ? '#fff' : '#374151'};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.primary ? '#1d4ed8' : '#f3f4f6'};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>Healthcare.</Logo>
      <SearchBar>
        <Search size={20} />
        <input placeholder="Search patients, appointments..." />
      </SearchBar>
      <HeaderActions>
        <IconButton>
          <Bell size={20} />
        </IconButton>
        <UserProfile>
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" alt="user" />
          <span>Username</span>
        </UserProfile>
        <IconButton primary>
          <Plus size={20} />
        </IconButton>
      </HeaderActions>
    </HeaderContainer>
  );
}

export default Header;
  