import React from "react";
import {
  Container,
  Hero,
  HeroText,
  HeroTitle,
  HeroSubtitle,
  Button,
  ServicesGrid,
  ServiceCard,
  ServiceTitle,
  ServiceDescription,
} from "./styles";

function Home() {
  return (
    <Container>
      <Hero>
        <HeroText>
          <HeroTitle>Transforme seu espaço com elegância e estilo</HeroTitle>
          <HeroSubtitle>
            Design de interiores minimalista com foco no equilíbrio e harmonia,
            nós criamos ambientes que refletem sua personalidade.
          </HeroSubtitle>
          <Button
            href="https://wa.me/55S?text=Olá,%20gostaria%20de%20solicitar%20um%20projeto%20de%20interior."
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar Orçamento
          </Button>
        </HeroText>

        
        <img
          src="/img/logo.png" 
          alt="Interior"
        />
      </Hero>
    </Container>
  );
}

export default Home;
