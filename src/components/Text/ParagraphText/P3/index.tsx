import { Typography } from "@mui/material";
import { styled } from "@mui/system";

type P3Props = {
  type?: "light" | "heavy";
};

export const P3 = styled(Typography)`
  font-weight: ${({ type }: P3Props) => {
    switch (type) {
      case "light":
        return 400;
      case "heavy":
        return 600;
      default:
        return 400;
    }
  }};
  font-size: 14px;
  line-height: 20px;
`;
