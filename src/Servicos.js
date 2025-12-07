import React from "react";
import {
  ServicosSection,
  ServicesGrid,
  ServiceCard,
  ServiceTitle,
  ServiceDescription,
} from "./styles";

const servicos = [
  {
    id: 1,
    titulo: "Consultoria de Design",
    descricao:
      "Análise detalhada do seu espaço com sugestões personalizadas para otimizar o design e funcionalidade.",
  },
  {
    id: 2,
    titulo: "Projeto de Interiores",
    descricao:
      "Criação de projetos completos de interiores, incluindo layout, seleção de móveis e decoração.",
  },
  {
    id: 3,
    titulo: "Decoração de Ambientes",
    descricao:
      "Transformação de ambientes com escolhas cuidadosas de cores, texturas e acessórios decorativos.",
  },
  {
    id: 4,
    titulo: "Design Sustentável",
    descricao:
      "Implementação de práticas sustentáveis no design para criar espaços ecológicos e eficientes.",
  },
];

function Servicos() {
  return (
    <ServicosSection>
      <h1>Nossos Serviços</h1>
      <p>
        Oferecemos soluções completas de design de interiores para transformar
        seus espaços em ambientes harmoniosos e funcionais.
      </p>

      <ServicesGrid>
        {servicos.map((servico) => (
          <ServiceCard key={servico.id}>
            <ServiceTitle>{servico.titulo}</ServiceTitle>
            <ServiceDescription>{servico.descricao}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicosSection>
  );
}

export default Servicos;