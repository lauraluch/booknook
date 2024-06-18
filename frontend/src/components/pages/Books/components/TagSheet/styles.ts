import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  height: 100dvh;
  overflow: auto;
`;

export const TitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const TitleAndButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TagButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 30rem;

  background-color: ${({ theme }) => theme.colors.role.primary};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.role.primaryDark};
  }

  transition: background-color 0.3s ease;
`;

export const BackButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 30rem;

  background-color: ${({ theme }) => theme.colors.layout.white};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.role.primaryLightest};
  }

  transition: background-color 0.3s ease;
`;
