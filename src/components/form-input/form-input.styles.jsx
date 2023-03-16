import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyles = css`
  top: -12px;
  font-size: 0.75rem;
  color: ${mainColor};
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 1rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background: none;
  background-color: #fff;
  color: ${subColor};
  font-size: 1.25rem;
  padding: 10px;
  display: block;
  width: 100%;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin-top: 24px;
  margin-bottom: 24px;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }
`;
export const Group = styled.div`
  position: relative;
  margin-top: 48px;
  margin-bottom: 48px;

  input[type="password"] {
    letter-spacing: 1px;
  }
`;
