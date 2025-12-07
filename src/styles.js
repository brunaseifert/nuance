import styled from "styled-components";

/* PALETA DE CORES */
const lilas = "#922f92ff";
const lilasEscuro = "#601360ff";

/* CONTAINER GERAL */
export const Container = styled.div`
  font-family: "Inter", sans-serif;
  color: #000;
`;

/* NAVBAR */
export const Navbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: #ce93b348;
  position: fixed;
  top: 0;
  left: 0;
  right: 30px;
  z-index: 4;
  width: 100%;
  box-shadow: 4px 4px 10px rgba(94, 6, 94, 0.49);

  h2 {
    color: ${lilas};
    font-size: 24px;
    font-weight: 800;
    margin-right: 30px;
  }

  nav {
    display: flex;
    justify-content: space-around;
    flex-grow: 1;
  }

  nav a {
    color: #251923ff;
    text-decoration: none;
    font-family: bold;
    font-weight: 500;
    font-size: 16px;
    padding: 6px 12px;
    transition: color 0.3s ease;
  }

  nav a:hover {
    color: ${lilasEscuro};
  }

  nav a.active {
    color: ${lilasEscuro};
    font-weight: 700;
    border-bottom: 2px solid ${lilas};
    padding-bottom: 4px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 10px 15px;
    
    h2 {
      margin-right: 0;
      margin-bottom: 10px;
    }

    nav {
      flex-direction: column;
      align-items: center;
    }

    nav a {
      margin: 5px 0;
    }
  }
`;

/* HERO */
export const Hero = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 80px 200px;
  gap: 20px;
  padding-top: 190px;

  img {
    width: 40%;
    margin-left: 70px;
    margin-top: -16px;
    object-fit: cover;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    img {
      width: 100%;
      margin-top: 30px;
    }
  }
`;

export const HeroText = styled.div`
  max-width: 700px;

`;

export const HeroTitle = styled.h1`
text-align: left;
  font-size: 42px;
  margin-bottom: 24px;
  line-height: 1.2;
`;

export const HeroSubtitle = styled.p`
  font-size: 18px;
  color: #444;
  margin-bottom: 24px;
`;


export const Button = styled.a`
  background: #870a87ff;
  box-shadow: 4px 4px 10px rgba(139, 71, 139, 0.91);
  color: white;
  padding: 16px 28px;
  font-family: bold;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  transition: 0.3s ease;
  
  &:hover {
    background: #9f107e9a;
  }
`;



/* PORTFOLIO */
export const PortfolioSection = styled.section`
  padding: 6px 150px;
  margin-top: 80px;
  background: linear-gradient(135deg, #fff 0%, #f9f5f8 100%);

  h1 {
    font-size: 38px;
    margin-bottom: 15px;
    color: #601360ff;
    text-align: left;
  }

  > p {
    font-size: 18px;
    color: #555;
    margin-bottom: 50px;
    max-width: 700px;
  }

  @media (max-width: 900px) {
    padding: 80px 30px;
    margin-top: 100px;

    h1 {
      font-size: 28px;
    }

    > p {
      font-size: 16px;
    }
  }
`;

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  background: transparent;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(146, 47, 146, 0.1);
  background: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 28px rgba(146, 47, 146, 0.15);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  margin: 16px 16px 8px 16px;
  color: #601360ff;
  font-weight: 700;
`;

export const CardPrice = styled.p`
  font-size: 16px;
  margin: 0 16px 16px 16px;
  color: #922f92ff;
  font-weight: 600;
`;

/* SERVIÇOS */
export const ServicosSection = styled.section`
  padding: 120px 150px;
  margin-top: 40px;
  background: linear-gradient(135deg, #fff 0%, #f9f5f8 100%);
  overflow: hidden;

  h1 {
    font-size: 38px;
    margin-bottom: 15px;
    color: #601360ff;
    text-align: left;
  }

  > p {
    font-size: 18px;
    color: #555;
    margin-bottom: 50px;
    max-width: 700px;
  }

  @media (max-width: 900px) {
    padding: 80px 30px;
    margin-top: 100px;

    h1 {
      font-size: 28px;
    }

    > p {
      font-size: 16px;
    }
  }
`;

export const ServicesGrid = styled.div`
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
  margin-top: 30px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.div`
  background: #fff;
  padding: 32px 24px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(146, 47, 146, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid #922f92ff;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 28px rgba(146, 47, 146, 0.15);
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 12px;
  color: #601360ff;
  font-weight: 700;
`;

export const ServiceDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
`;

/* CONTATO */
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 100px;
`;

export const Input = styled.input`
  padding: 5px -80px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export const Textarea = styled.textarea`
  padding: 5px 2px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export const SubmitButton = styled.button`
  background: #870a87ff;
  color: #fff;
  padding: 12px 18px;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #9f107e9a;
  }
`;

/* CONTATO Card */
export const ContatoSection = styled.section`
  padding: 20px 20px;
  margin-left: 150px;  
  margin-top: 70px;
  background: #fff;

  h1 {
    font-size: 38px;
    margin-bottom: 20px;
    color: #601360ff;
    text-align: left;
  }

  > p {
    font-size: 18px;
    color: #444;
    margin-bottom: 40px;
    max-width: 600px;
  }

  @media (max-width: 900px) {
    padding: 40px 20px; /* Ajustando para telas pequenas */
    margin-top: 100px;

    h1 {
      font-size: 28px;
    }

    > p {
      font-size: 16px;
    }
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  color: #601360ff;
  margin-bottom: 8px;
`;

export const FormInput = styled.input`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  width: 100%; /* Faz com que o input ocupe toda a largura disponível */
  max-width: 600px; /* Aumento da largura máxima para 600px */
  box-sizing: border-box; /* Inclui padding no cálculo da largura total */

  &:focus {
    outline: none;
    border-color: #922f92ff;
    box-shadow: 0 0 0 3px rgba(146, 47, 146, 0.1);
  }
`;

export const FormTextarea = styled.textarea`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  width: 100%; /* Faz com que o textarea ocupe toda a largura disponível */
  max-width: 600px; /* Aumento da largura máxima para 600px */
  box-sizing: border-box; /* Inclui padding no cálculo da largura total */

  &:focus {
    outline: none;
    border-color: #922f92ff;
    box-shadow: 0 0 0 3px rgba(146, 47, 146, 0.1);
  }
`;

export const SubmitButtonForm = styled.button`
  background: #870a87ff;
  color: white;
  padding: 16px 28px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 4px 4px 10px rgba(139, 71, 139, 0.3);

  &:hover {
    background: #9f107e9a;
    box-shadow: 6px 6px 15px rgba(139, 71, 139, 0.4);
  }

  &:active {
    transform: translateY(2px);
  }
`;
