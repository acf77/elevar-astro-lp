import { Typography } from "@mui/material";
import { styled } from "@mui/system";

type SubheadingTextProps = React.HTMLProps<HTMLHeadingElement> & {
  textType?: "light" | "heavy";
};

export const SubheadingText = styled(Typography)`
  font-weight: ${({ textType }: SubheadingTextProps) => {
    switch (textType) {
      case "light":
        return 400;
      case "heavy":
        return 600;
      default:
        return 400;
    }
  }};
  font-size: 18px;
  line-height: 22px;
`;
