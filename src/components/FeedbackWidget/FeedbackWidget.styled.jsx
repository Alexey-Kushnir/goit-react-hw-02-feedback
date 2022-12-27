import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin: 0 0 20px 0;
`;

export const StatsButtonsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 5px;
  gap: 10px;
  margin: 10px 0 25px 0;
`;
export const StatsButtonsListItem = styled.li``;

export const StatsButton = styled.button`
  background-color: white;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #afb1b8;
  border-radius: 4px;
  cursor: pointer;
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: 0 5px;
`;

export const StatsListItem = styled.li``;

export const StatsItem = styled.p`
  font-size: 25px;
  margin: 10px 0;
`;
