import { Typography } from "@mui/material";
import { styled } from "@mui/system";

import { colors } from "../../../theme/colors";

type BodyTextProps = React.HTMLProps<HTMLHeadingElement> & {
  underline?: boolean;
  textType?: "light" | "heavy";
};

export const BodyText = styled(Typography)`
  font-weight: ${({ textType }: BodyTextProps) => {
    switch (textType) {
      case "light":
        return 400;
      case "heavy":
        return 600;
      default:
        return 400;
    }
  }};
  font-size: 16px;
  line-height: 20px;
  border-bottom: ${({ underline }: BodyTextProps) => (underline ? 2 : 0)}px
    solid ${colors.getPrimary(6)};
`;
