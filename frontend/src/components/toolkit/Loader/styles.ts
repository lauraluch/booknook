import styled from "styled-components";
import { IMargin } from "../Typography/types";
import { applyMargin } from "@utils/functions/style/applyCss";

export type ContainerProps = IMargin;

export const Container = styled.div<ContainerProps>`
  ${(props) => applyMargin(props)}
`;
