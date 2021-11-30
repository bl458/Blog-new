export const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) window.opener = null;
};

export const openEmail = (email) => {
  openInNewTab("mailto:" + email);
};
