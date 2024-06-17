import styled from "styled-components";

interface Props {
  isFilled: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 1.125rem;
  height: 1.125rem;
  border-radius: 50px;

  /* background-color: ${({ theme, isFilled }) =>
    isFilled
      ? `${theme.colors.role.primary}`
      : `${theme.colors.layout.white}`}; */

  background-color: transparent;

  border: ${({ theme }) => `1px solid ${theme.colors.role.primary}`};

  /* transition: background-color 0.3s ease-in; */
`;

export const SelectedCircle = styled.div<Props>`
  display: flex;
  flex-direction: row;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50px;

  background-color: ${({ theme, isFilled }) =>
    isFilled ? `${theme.colors.role.primary}` : `transparent`};

  transition: background-color 0.3s ease-in;
`;
