import styled from "styled-components";

interface Props {
  isFilled: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 1rem;
  height: 1rem;
  border-radius: 50px;

  background-color: ${({ theme, isFilled }) =>
    isFilled ? `${theme.colors.role.primary}` : `${theme.colors.layout.white}`};

  border: ${({ theme }) => `1px solid ${theme.colors.role.primary}`};

  transition: background-color 0.3s ease-in;
`;
