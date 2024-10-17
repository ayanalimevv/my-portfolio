export const getFormattedUrl = () => {
  const url = new URL(window.location.href);
  const hostname = url.hostname;
  const path = url.pathname;
  return hostname + path;
};

export function isExternalUrl(url: string): boolean {
  return /^(https?:)?\/\//.test(url);
}

export const openUrl = (link: string) => {
  if (isExternalUrl(link)) {
    return window.open(link, "_blank");
  } else {
    return (window.location.href = link);
  }
};

export const isPasswordCorrect = (
  password: string,
  correctPasswords: string[]
): boolean => {
  // If password exists in correctPasswordsList return true
  let res = false;
  correctPasswords.forEach((correctPassword: string) => {
    if (correctPassword.trim() === password.trim().toLowerCase()) {
      res = true;
    }
  });
  return res;
};
