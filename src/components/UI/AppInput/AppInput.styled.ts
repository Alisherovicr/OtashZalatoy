import { css, styled } from "styled-components";

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.red};
  margin-top: 10px;
`;

interface IStyledInputProps {
  $isError: boolean;
}

export const SCAppInput = styled.input<IStyledInputProps>`
  outline: 0;
  font-family: inherit;
  padding: 12px 15px;
  background-color: ${(props) => props.theme.colors.bgc};
  border-radius: 10px;
  border: 3px solid ${(props) => props.theme.colors.red};
  width: 100%;

  ${(props) =>
    props.$isError &&
    css`
      border-color: ${(props) => props.theme.colors.red};
    `}

  transition: 200ms;

  &:is(:hover, :focus) {
    border-color: ${(props) => props.theme.colors.green};
  }

  @media (max-width: 730px) {
    padding: 10px 12px;
  }
`;
