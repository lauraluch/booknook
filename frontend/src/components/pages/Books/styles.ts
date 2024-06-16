import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  width: 100dvw;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  /* position: fixed; */
  width: 100%;
  padding: 0 1rem;
  height: 4.5rem;
  gap: 0.75rem;
  background-color: ${({ theme }) => theme.colors.role.primaryLightest};
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.role.primaryLight};
`;

export const BooksContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  padding: 2rem;
  gap: 2rem;
`;

export const CreateBookButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 5rem;
  bottom: 2rem;
  right: 2rem;

  background-color: ${({ theme }) => theme.colors.role.primary};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.role.primaryDark};
  }

  transition: background-color 0.3s ease;
`;

export const TitleAndDescriptionSheet = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 0.25rem;
`;
