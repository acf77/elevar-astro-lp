import { Typography } from "@mui/material";
import { styled } from "@mui/system";

type H3Props = {
  type?: "light" | "heavy";
};

export const H3 = styled(Typography)`
  font-weight: ${({ type }: H3Props) => {
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
  font-size: 30px;
  line-height: 34px;

  @media (max-width: 780px) {
    font-size: 24px;
    line-height: 28px;
  }
`;
