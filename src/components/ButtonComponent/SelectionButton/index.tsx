// import { Card } from "@mui/material";
import { styled } from "@mui/system";
import { ReactNode } from "react";

import { colors } from "../../../theme/colors";

type SelectionButtonProps = React.HTMLProps<HTMLButtonElement> & {
  isSelected?: boolean;
  children: ReactNode;
};

const Wrapper = styled("button")`
  font-family: "Metropolis";
  background-color: ${colors.getPrimary(1)};
  border-radius: 8px;
  /* padding: 16px 24px; */
  border: 1.5px solid ${colors.neutrals.input};
  margin: 0.3rem;
  cursor: pointer;
  width: 6.5rem;

  /* @media screen and (max-width: 1100px) {
    width: 5.5rem;
  } */

  &:hover {
    border-color: ${colors.getPrimary(2)};
    background-color: ${colors.getPrimary(2)};
  }

  &:disabled {
    border-color: ${colors.neutrals.input};
    cursor: not-allowed;
  }

  ${({ isSelected }: SelectionButtonProps) =>
    isSelected && {
      "background-color": `${colors.getPrimary(3)}`,
      "border-color": `${colors.getPrimary(4)}`,
      color: `${colors.getPrimary(6)}`,
    }};
`;

export const SelectionButton = ({
  isSelected,
  children,
}: SelectionButtonProps) => {
  return <Wrapper isSelected={isSelected}>{children}</Wrapper>;
};
