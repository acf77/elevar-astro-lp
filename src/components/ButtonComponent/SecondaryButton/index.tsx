// import { Card } from "@mui/material";
import { styled } from "@mui/system";

import { colors } from "../../../theme/colors";

type SecondaryButtonProps = React.HTMLProps<HTMLButtonElement> & {
  buttonColor?: string;
  buttonSize?: string;
};

export const SecondaryButton = styled("button")`
  border-radius: 8px;
  padding: 0px 16px;
  cursor: pointer;
  border: 1.5px solid;
  font-family: "Metropolis";

  &:hover {
    &:hover {
      ${({ buttonColor }: SecondaryButtonProps) => {
        switch (buttonColor) {
          case "green":
            return {
              "border-color": colors.getAccentGreen(5),
              color: colors.getAccentGreen(5),
            };
          case "red":
            return {
              "border-color": colors.getAccentRed(5),
              color: colors.getAccentRed(5),
            };

          default:
            return {
              "border-color": colors.getPrimary(5),
              color: colors.getPrimary(5),
            };
        }
      }};
    }
  }

  &:active {
    border-color: ${colors.getPrimary(7)};
    color: ${colors.getPrimary(7)};
  }
  &:disabled {
    border-color: ${colors.neutrals.disabled};
    color: ${colors.neutrals.disabled};
    cursor: not-allowed;

    &:hover {
      border-color: ${colors.neutrals.disabled};
      color: ${colors.neutrals.disabled};
    }
  }

  ${({ buttonColor }: SecondaryButtonProps) => {
    switch (buttonColor) {
      case "green":
        return {
          "border-color": colors.getAccentGreen(6),
          color: colors.getAccentGreen(6),
        };
      case "red":
        return {
          "border-color": colors.getAccentRed(6),
          color: colors.getAccentRed(6),
        };

      default:
        return {
          "border-color": colors.getPrimary(6),
          color: colors.getPrimary(6),
        };
    }
  }};

  ${({ buttonSize }: SecondaryButtonProps) => {
    switch (buttonSize) {
      case "xlarge":
        return {
          "line-height": "20px",
          height: "44px",
          width: "167px",
        };
      case "large":
        return {
          "line-height": "20px",
          height: "44px",
        };
      case "regular":
        return {
          "line-height": "18px",
          height: "34px",
        };
      case "small":
        return {
          "line-height": "24px",
        };

      default:
        return {
          "line-height": "20px",
          height: "34px",
        };
    }
  }};
`;
