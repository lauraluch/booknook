import styled from "styled-components";

interface Props {
  backgroundColor: string;
}

export const BadgeContainer = styled.div<Props>`
  display: flex;
  flex-direction: row;
  width: fit-content;
  padding: 0.15rem 0.5rem;
  border-radius: 0.3rem;
  justify-content: space-between;

  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? `${backgroundColor}40` : theme.colors.layout.surface};
`;
