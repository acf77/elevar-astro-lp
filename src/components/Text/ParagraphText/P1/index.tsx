import { Typography } from "@mui/material";
import { styled } from "@mui/system";

type P1Props = {
  type?: "light" | "heavy";
};

export const P1 = styled(Typography)`
  font-weight: ${({ type }: P1Props) => {
    switch (type) {
      case "light":
        return 400;
      case "heavy":
        return 600;
      default:
        return 400;
    }
  }};
  font-size: 18px;
  line-height: 30px;
`;
