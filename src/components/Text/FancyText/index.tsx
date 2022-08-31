import { Typography } from "@mui/material";
import { styled } from "@mui/system";

type FancyTextProps = React.HTMLProps<HTMLHeadingElement> & {
  textType?: "light" | "heavy";
};

export const FancyText = styled(Typography)`
  font-weight: ${({ textType }: FancyTextProps) => {
    switch (textType) {
      case "light":
        return 400;
      case "heavy":
        return 600;
      default:
        return 400;
    }
  }};
  font-family: 'Caveat';
  font-size: 32px;
  line-height: 48px;

  @media (max-width: 780px) {
    font-size: 24px;
    line-height: 28px;
  }
`;
