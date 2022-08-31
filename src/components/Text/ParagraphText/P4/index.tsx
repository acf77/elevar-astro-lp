import { Typography } from "@mui/material";
import { styled } from "@mui/system";

type P4Props = React.HTMLProps<HTMLHeadingElement> & {
  textType?: string;
};

export const P4 = styled(Typography)`
  font-weight: ${({ textType }: P4Props) => {
    switch (textType) {
      case "light":
        return 400;
      case "heavy":
        return 600;
      default:
        return 400;
    }
  }};
  font-size: 12px;
  line-height: 16px;
`;
