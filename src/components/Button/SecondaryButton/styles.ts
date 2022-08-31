import { colors } from "../../../theme/colors";

export const secondaryButtonStyles = {
  fontFamily: "Metropolis, Arial",
  color: colors.getPrimary(6),
  border: " 1.5px solid",
  padding: "0 16px",
  gap: "6px",
  borderRadius: "8px",
  backgroundColor: "transparent",
  width: "initial",
  lineHeight: "18px",
  height: "34px",
  cursor: "pointer",
  [":disabled"]: {
    backgroundColor: colors.neutrals.disabled,
    cursor: "not-allowed",

    [":hover"]: {
      backgroundColor: colors.neutrals.disabled,
    },
  },
  [":hover"]: {
    backgroundColor: colors.getPrimary(5),
  },
};
