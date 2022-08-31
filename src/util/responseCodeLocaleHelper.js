import { t } from "@lingui/macro";

export const getFrontEndErrorMessage = (err) => {
  switch (err.status) {
    case 429:
      return `You have to wait 60 seconds before you can respeat this action`;
    default:
      return err.message;
  }
};
