import styled from "styled-components";
import { colors } from "../../config/elements";

export const StyledSelect = styled.select`
  // color: var(--blue);
  color: ${colors.blue};
`;

export const StyledErrorMessage = styled.div`
  font-size: 12px;
  // color: var(--red-600);
  color: ${colors.red};
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    //   color: var(--red-300);
    color: ${colors.red};
  }
`;

export const StyledLabel = styled.label`
  margin-top: 0rem;
`;
