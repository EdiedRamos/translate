export const DETECT_LANGUAGE = {
  id: "6bb226c9-f565-4a75-b332-d6f1973b27d7",
  value: "Detect Language",
};

export const INITIAL_OPTIONS = [
  { id: "8a9b9cfc-860a-484c-aa79-583071500494", value: "English" },
  { id: "0981618e-eac0-4f00-ba5a-c0a5896e3f93", value: "French" },
];

export const SELECT_OPTIONS = [
  { id: "396b2ed9-5f69-4deb-8751-68bc081218b7", value: "Spanish" },
  { id: "3924b033-e3db-4c67-8fbd-e8e7a1a16d0c", value: "Italian" },
  { id: "71ff27df-433b-4a7b-9903-54dff6107653", value: "Portuguese" },
];

export function getDefaultLanguage(withDetectionLanguage: boolean) {
  return withDetectionLanguage ? DETECT_LANGUAGE.id : INITIAL_OPTIONS[0]?.id;
}

export function languageIsInSelect(language: string) {
  return SELECT_OPTIONS.some((option) => option.id === language);
}

export function whenLanguageIsActiveStyles(
  currentLanguage: string,
  targetLanguage: string
): string {
  return targetLanguage === currentLanguage ? "language-button--active" : "";
}
