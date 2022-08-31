import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { ReactNode } from "react";

type ParagraphTextProps = {
  textType?: "light" | "heavy";
  paragraphType: "p1" | "p2" | "p3" | "p4";
  children: ReactNode;
};

export const ParagraphText = styled(Typography)`
  font-weight: ${({ textType }: ParagraphTextProps) => {
    switch (textType) {
      case "light":
        return 400;
      case "heavy":
        return 600;
      default:
        return 400;
    }
  }};

  ${({ paragraphType }: ParagraphTextProps) => {
    switch (paragraphType) {
      case "p1":
        return {
          fontSize: "18px",
          lineHeight: "30px",
          fontStyle: "normal",
        };
      case "p2":
        return {
          "font-size": "18px",
          "line-height": "24px",
        };
      case "p3":
        return {
          "font-size": "14px",
          "line-height": "20px",
        };
      case "p4":
        return {
          "font-size": "12px",
          "line-height": "16px",
        };

      default:
        return {
          "font-size": "18px",
          "line-height": "30px",
        };
    }
  }};
`;

// export const ParagraphText = ({
//   variant,
//   textType,
//   children,
// }: ParagraphTextProps) => {
//   return (
//     <Wrapper variant={variant} textType={textType}>
//       {children}
//     </Wrapper>
//   );
// };
