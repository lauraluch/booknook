import styled from "styled-components";

interface Props {
  backgroundColor: string;
  borderColor: string;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  padding: 1rem;
  /* background-color: ${({ theme }) => theme.colors.layout.surface}; */
  background-color: ${({ backgroundColor }) => backgroundColor};

  width: 12rem;
  height: 16rem;

  text-align: center;
  border-radius: 0.5rem;
  /* border: 2px solid ${({ theme }) => theme.colors.border}; */
  border: 2px solid ${({ borderColor }) => borderColor};

  &:hover {
    box-shadow: ${({ theme }) =>
      `0px 0px 0px 3px ${theme.colors.role.primaryLightest}`};
  }
`;
