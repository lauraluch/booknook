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
  padding: 4rem 0;
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

  border-radius: 0.75rem;

  box-shadow: 0px 4px 19px 5px rgba(106, 82, 128, 0.2);
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DatePickerComponent = styled.input`
  padding: 0.65rem;
  border: solid 1px ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
`;
