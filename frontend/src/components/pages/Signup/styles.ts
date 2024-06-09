import styled from "styled-components";
import { defaultAnchors } from "@utils/facepaint";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.role.primaryLight};
  gap: 1rem;
  width: 100%;
  height: 100dvh;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.layout.white};
  padding: 2rem;
  ${defaultAnchors({
    width: ["18rem", "18rem", "20rem", "26rem", "32rem"],
  })}
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
