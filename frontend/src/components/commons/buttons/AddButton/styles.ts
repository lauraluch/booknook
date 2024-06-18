import styled from "styled-components";

export const AddButtonContainer = styled.div`
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
