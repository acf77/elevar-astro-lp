import { Typography } from "@mui/material";
import { styled } from "@mui/system";

type H4Props = {
  type?: "light" | "heavy";
};

export const H4 = styled(Typography)`
  font-weight: ${({ type }: H4Props) => {
    switch (type) {
      case "light":
        return 400;
      case "heavy":
        return 600;
      default:
        return 400;
    }
  }};
  letter-spacing: -0.5px;
  font-size: 26px;
  line-height: 30px;
`;
