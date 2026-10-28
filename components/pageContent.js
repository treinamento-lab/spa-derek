export const PageContent = (title, text) => {
  const content = document.createElement("div");

  const pageTitle = document.createElement("h2");
  pageTitle.textContent = title;

  const pageText = document.createElement("p");
  pageText.textContent = text;

  content.appendChild(pageTitle);
  content.appendChild(pageText);

  return content;
};
