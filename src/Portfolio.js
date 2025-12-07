import React from "react";
import { PortfolioSection, PortfolioGrid, Card, CardImage, CardTitle, CardPrice } from "./styles";

const produtos = [
  { id: 1, nome: "Parede Moderna", preco: "R$ 4.000", imagem: "/img/sala.jpeg" },
  { id: 2, nome: "Quadro Decorativo", preco: "R$ 620", imagem: "/img/quadro.jpeg" },
  { id: 3, nome: "Sala Aconchegante", preco: "R$ 5.700", imagem: "/img/estar.jpeg" },
{ id: 4, nome: "Criado Mudo Sofisticado", preco: "R$ 450", imagem: "/img/criado.png" },
  { id: 5, nome: "Poltrona Confort", preco: "R$ 1.350", imagem: "/img/poltrona.png" },
  { id: 6, nome: "Mesa de Centro", preco: "R$ 800", imagem: "/img/mesa.png" },
];

function Portfolio() {
  return (
    <PortfolioSection>
      <h1>Portfólio</h1>
      <p>
        Conheça alguns dos nossos projetos e peças que transformaram espaços
        em ambientes únicos e acolhedores.
      </p>

      <PortfolioGrid>
        {produtos.map((produto) => (
          <Card key={produto.id}>
            <CardImage src={produto.imagem} alt={produto.nome} />
            <CardTitle>{produto.nome}</CardTitle>
            <CardPrice>{produto.preco}</CardPrice>
          </Card>
        ))}
      </PortfolioGrid>
    </PortfolioSection>
  );
}

export default Portfolio;
