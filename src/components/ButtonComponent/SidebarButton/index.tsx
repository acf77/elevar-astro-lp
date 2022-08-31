// import { Card } from "@mui/material";
import { styled } from "@mui/system";

import { colors } from "../../../theme/colors";

type SidebarButtonProps = {
  isselected?: boolean;
  rounded?: boolean;
};

export const SidebarButton = styled("button")`
  border: none;
  width: 90%;
  height: 2.5rem;
  font-family: "Metropolis";
  color: ${colors.neutrals.placeholder};
  background-color: ${colors.neutrals.white};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    border-color: ${colors.getPrimary(2)};
    background-color: ${colors.getPrimary(2)};
  }

  &:disabled {
    border-color: ${colors.neutrals.input};
    background-color: ${({ rounded }: SidebarButtonProps) =>
      rounded ? `${colors.getPrimary(6)}` : `${colors.neutrals.input}`};
    cursor: not-allowed;
  }

  ${({ isselected }: SidebarButtonProps) =>
    isselected && {
      "background-color": `${colors.getPrimary(3)}`,
      "border-color": `${colors.getPrimary(4)}`,
      color: `${colors.getPrimary(6)}`,
      fontWeight: "600",
    }};

  ${({ rounded }) =>
    rounded && {
      "border-radius": "50%",
      width: "30px",
      height: "30px",
      margin: -13,
    }};
`;
