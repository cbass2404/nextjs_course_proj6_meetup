// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isValidFormData = (
  data: string | { [key: string]: string },
  isValid = true
): boolean => {
  if (typeof data === "object") {
    Object.keys(data).forEach((key) => {
      if (!isValid) {
        return;
      }
      isValid = isValidFormData(data[key], isValid);
    });
  } else {
    isValid = !!data.trim().length;
  }

  return isValid;
};
