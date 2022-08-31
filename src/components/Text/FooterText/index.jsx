import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const FooterText = styled(Typography)`
  font-weight: ${({ type }) => {
    switch (type) {
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
