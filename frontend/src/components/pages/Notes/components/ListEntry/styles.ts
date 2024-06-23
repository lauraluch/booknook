import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  width: 22rem;
  gap: 0.15rem;

  /* Quadrados */
  /* background-color: #ffedab;
  opacity: 0.8;
  background-image: linear-gradient(#ffdd61 1px, transparent 1px),
    linear-gradient(to right, #ffdd61 1px, #ffedab 1px);
  background-size: 20px 20px; */

  /* Linhas */
  /* background-color: #ffedab;
  opacity: 0.8;
  background-size: 20px 20px;
  background-image: repeating-linear-gradient(
    0deg,
    #ffdd61,
    # 1px,
    #ffedab 1px,
    #ffedab
  ); */

  /* Pontilhados */
  background-color: #ffedab;
  opacity: 0.8;
  background-image: radial-gradient(#f7d040 1px, #ffedab 1px);
  background-size: 18px 18px;

  border-radius: 0.25rem;
  border: 2px solid #ffdd61;
  justify-content: center;
  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) => `0px 0px 0px 3px #ffedab99`};
  }

  transition: box-shadow 0.2s ease-in-out;
`;
