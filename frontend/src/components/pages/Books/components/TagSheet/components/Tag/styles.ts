import styled from "styled-components";

interface Props {
  backgroundColor: string;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const TagContainer = styled.div<Props>`
  display: flex;
  flex-direction: row;
  width: fit-content;
  padding: 0.15rem 0.5rem;
  border-radius: 0.3rem;
  justify-content: space-between;

  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? `${backgroundColor}40` : theme.colors.layout.surface};
`;

export const DeleteButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 30rem;
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.role.errorLightest};

  &:hover {
    background-color: ${({ theme }) => theme.colors.role.errorSemilight};
  }

  cursor: pointer;

  transition: background-color 0.3s ease;
`;
