import { Typography } from "@mui/material";
import { styled } from "@mui/system";

type CaptionTextProps = React.HTMLProps<HTMLHeadingElement> & {
  textType?: string;
  textSize?: string;
};

export const CaptionText = styled(Typography)`
  font-weight: ${({ textType }: CaptionTextProps) => {
    switch (textType) {
      case "light":
        return 400;
      case "heavy":
        return 600;
      default:
        return 400;
    }
  }};
  font-size: ${({ textSize }: CaptionTextProps) => {
    switch (textSize) {
      case "normal":
        return 12;
      case "large":
        return 14;
      default:
        return 12;
    }
  }};;
  line-height: 30px;
`;
