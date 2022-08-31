import { Typography } from "@mui/material";
import { styled } from "@mui/system";

type H5Props = {
  type?: "light" | "heavy";
};

export const H5 = styled(Typography)`
  font-weight: ${({ type }: H5Props) => {
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
  font-size: 22px;
  line-height: 26px;
`;
