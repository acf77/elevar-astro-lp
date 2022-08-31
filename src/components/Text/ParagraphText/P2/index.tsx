import {Typography} from "@mui/material";
import {styled} from "@mui/system";

type P2Props = React.HTMLProps<HTMLHeadingElement> & {
    textType?: "light" | "heavy";
    size?: "small" | "large";
};

export const P2 = styled(Typography)`
  font-weight: ${({textType}: P2Props) => {
    switch (textType) {
      case "light":
        return 400;
      case "heavy":
        return 600;
      default:
        return 400;
    }
  }};
  font-size: ${({size}: P2Props) => {
    switch (size) {
      case "small":
        return '16px';
      case "large":
        return '18px';
      default:
        return '18px';
    }
  }};
  line-height: 24px;

  @media (max-width: 780px) {
    font-size: 16px;
  }
`;
