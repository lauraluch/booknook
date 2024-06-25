import styled from "styled-components";

export const Container = styled.div`
  /* width: 100%;
  height: 100%; */
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  height: 100dvh;
  overflow: auto;
  align-items: flex-end;
`;

export const TitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
`;

export const TitleAndButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0.75rem;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  gap: 0.25rem;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* width: 100%; */
  gap: 0.25rem;
`;

export const HeaderButton = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 2.5rem;
  height: 2.5rem;
  border-radius: 30rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.role.primaryLight};

  &:hover {
    background-color: ${({ theme }) => theme.colors.role.primarySemilight};
  }

  transition: background-color 0.3s ease;
`;
