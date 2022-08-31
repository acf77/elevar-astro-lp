import { t } from "@lingui/macro";
import { i18n } from "@lingui/core";
import { AllowedUserAccessRoles } from "@lib//domain";

export const TranslatedAllowedUserAccessRoles = [
  { key: AllowedUserAccessRoles.guest, name: `guests` },
  { key: AllowedUserAccessRoles.doctor, name: `doctors` },
  { key: AllowedUserAccessRoles.patient, name: `patients` },
  {
    key: AllowedUserAccessRoles.allAuthenticated,
    name: `all authenticated users`,
  },
];

export const Languages = [
  { key: "ENGLISH", name: `English` },
  { key: "SPANISH", name: `Spanish` },
  { key: "PORTUGUESE", name: `Portuguese` },
  { key: "GERMAN", name: `German` },
  //TODO: Add all languages
];

export const Proficiencies = [
  { key: "BEGINNER", name: `Beginner` },
  { key: "INTERMEDIATE", name: `Intermediate` },
  { key: "FLUENT", name: `Fluen` },
  { key: "NATIVE", name: `Native` },
];

export const Genders = [
  { key: "MALE", name: `male` },
  { key: "FEMALE", name: `female` },
  { key: "OTHER", name: `other` },
];

export const Sexes = [
  { key: "MALE", name: `male` },
  { key: "FEMALE", name: `female` },
  { key: "OTHER", name: `other` },
];

export const QnACategories = [
  { key: "MED_OR_PRODUCT", name: `Medicine or Produc` },
  { key: "EXAMS_INTERPRETATION", name: `Exams Interpretation` },
];

export const WeekDays = [
  { key: "MONDAY", name: `Monday` },
  { key: "TUESDAY", name: `Tuesday` },
  { key: "WEDNESDAY", name: `Wednesday` },
  { key: "THURSDAY", name: `Thursday` },
  { key: "FRIDAY", name: `Friday` },
  { key: "SATURDAY", name: `Saturday` },
  { key: "SUNDAY", name: `Sunday` },
];

export const FamilyRelations = [
  { key: "SIBLING", name: `sibling` },
  { key: "PARENT", name: `paren` },
  { key: "CHILD", name: `child` },
  { key: "GRANDPARENT", name: `grandparen` },
  { key: "GRANDCHILD", name: `grandchild` },
  { key: "PARENT_SIBLING", name: `aunt / uncle` },
  { key: "COUSIN", name: `cousin` },
];

export const translateDict = (dict) => {
  return dict.map((item) => {
    return {
      trans: i18n._(item.name),
      key: item.key,
    };
  });
};

export const getTranslation = (dict, key) => {
  const getByKey = (arr, key) => arr.find((x) => x.key === key) || {};
  return getByKey(translateDict(dict), key).trans || "";
};

export const getValuesFromDict = (dict) => {
  return dict.map((item) => i18n._(item.name));
};
