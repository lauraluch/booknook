import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

interface Props {
  isCreating?: boolean;
}

export const StarContainer = styled.div<Props>`
  display: flex;
  height: fit-content;
  cursor: ${({ isCreating }) => (isCreating ? "default" : "pointer")};
`;
