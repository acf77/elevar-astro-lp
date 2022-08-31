import { colors } from "../../../theme/colors";

export const styles = {
  primaryButton: {
    fontFamily: "Metropolis, Arial",
    color: colors.neutrals.offwhite,
    border: "none",
    padding: "0 16px",
    gap: "6px",
    borderRadius: "8px",
    backgroundColor: colors.getPrimary(6),
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
  },
};
