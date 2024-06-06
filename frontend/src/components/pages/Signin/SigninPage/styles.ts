import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100dvh;
`;

export const Banner = styled.div`
  display: flex;
  width: 45%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.role.primaryLight};
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;

  align-items: center;
  background-color: ${({ theme }) => theme.colors.layout.backgroud};
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 21rem;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.layout.backgroud};
`;
