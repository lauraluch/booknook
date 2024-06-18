import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const TagsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;

  flex-wrap: wrap;
`;

export const TitleAndButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
