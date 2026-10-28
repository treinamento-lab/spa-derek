export const mainContent = (hash) => {
  switch (hash) {
    case "#inicio":
      console.log("Início", hash);
      break;
    case "#sobre":
      console.log("Sobre", hash);
      break;
    case "#contato":
      console.log("Contato", hash);
      break;
  }
};
