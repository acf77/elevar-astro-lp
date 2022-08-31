import { Typography } from "@mui/material";
import { styled } from "@mui/system";

type H1Props = {
  type?: "light" | "heavy";
};

export const H1 = styled(Typography)`
  font-weight: ${({ type }: H1Props) => {
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
  font-size: 38px;
  line-height: 42px;

  @media (max-width: 780px) {
    font-size: 30px;
    line-height: 35px;
  }
`;
