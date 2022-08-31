// import { Card } from "@mui/material";
import { styled } from "@mui/system";
import { ReactNode } from "react";

import { colors } from "@elevarsalud/ravel.ui.theme.colors";

type RoundedButtonProps = {
  rounded?: boolean;
  isselected?: boolean;
  children: ReactNode;
  onClick?: () => void;
};

const Wrapper = styled("button")`
  font-family: "Metropolis";
  background-color: ${colors.getPrimary(1)};
  border-radius: 50%;
  /* padding: 16px 24px; */
  border: 1.5px solid ${colors.neutrals.input};
  /* margin: 0.3rem; */
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin: -6;

  /* @media screen and (max-width: 1100px) {
    width: 6.4rem;
  } */

  &:hover {
    border-color: ${colors.getPrimary(2)};
    background-color: ${colors.getPrimary(2)};
  }

  &:disabled {
    border-color: ${colors.neutrals.input};
    background-color: ${({ rounded }: RoundedButtonProps) =>
      rounded ? `${colors.getPrimary(6)}` : `${colors.neutrals.input}`};
    cursor: not-allowed;
  }

  ${({ isselected }: RoundedButtonProps) =>
    isselected && {
      "background-color": `${colors.getPrimary(3)}`,
      "border-color": `${colors.getPrimary(4)}`,
      color: `${colors.getPrimary(6)}`,
    }};

  ${({ rounded }: RoundedButtonProps) =>
    rounded && {
      "border-radius": "50%",
      width: "30px",
      height: "30px",
      margin: -6,
    }};
`;

export const RoundedButton = ({
  isselected,
  onClick,
  children,
}: RoundedButtonProps) => {
  return (
    <Wrapper onClick={onClick} isselected={isselected}>
      {children}
    </Wrapper>
  );
};
