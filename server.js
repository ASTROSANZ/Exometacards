const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, "public")));

// Rota para gerar chave PIX (chave fictícia)
app.get("/api/generate-payment", (req, res) => {
  // Simulando uma chave PIX. Substitua isso pela lógica real ou integração de API se necessário.
  const pixKey = "00020126480014BR.GOV.BCB.PIX0136sua-chave-pix";

  res.json({
    pixKey: pixKey,
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
