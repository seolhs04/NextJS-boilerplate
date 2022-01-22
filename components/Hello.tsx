import { css, Global, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const sum = (a: number, b: number): number => a + b;

export default function hello() {
  const CustomDiv = styled.div`
    background: tomato;
  `;

  return <CustomDiv>hello</CustomDiv>;
}
