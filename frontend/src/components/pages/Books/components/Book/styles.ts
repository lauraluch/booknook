import styled from "styled-components";

interface Props {
  backgroundColor: string;
  borderColor: string;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.75rem;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  background-color: ${({ backgroundColor }) => backgroundColor};

  width: 12rem;
  height: 16rem;

  text-align: center;
  border-radius: 0.5rem;
  border: 2px solid ${({ borderColor }) => borderColor};

  &:hover {
    box-shadow: ${({ theme, backgroundColor }) =>
      `0px 0px 0px 6px ${
        backgroundColor
          ? `${backgroundColor}66`
          : theme.colors.role.primaryLightest
      }`};
  }
  cursor: pointer;

  transition: box-shadow 0.3s ease;
`;

export const FavoriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;

  right: -0.75rem;
  bottom: -0.75rem;
`;
