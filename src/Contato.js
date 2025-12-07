import React from "react";
import {
  ContatoSection,
  FormGroup,
  Label,
  FormInput,
  FormTextarea,
  SubmitButtonForm,
} from "./styles";

function Contato() {
  return (
    <ContatoSection>
      <h1>Contato</h1>
      <p>
        Preencha o formulário abaixo para entrar em contato conosco. Estamos
        ansiosos para ouvir suas ideias e ajudar a transformar seus espaços!
      </p>

      <form action="https://formspree.io/f/yourformid" method="POST">
        <FormGroup>
          <Label htmlFor="name">Nome:</Label>
          <FormInput
            type="text"
            id="name"
            name="name"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">E-mail:</Label>
          <FormInput
            type="email"
            id="email"
            name="email"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Mensagem:</Label>
          <FormTextarea
            id="message"
            name="message"
            rows="6"
            required
          ></FormTextarea>
        </FormGroup>

        <SubmitButtonForm type="submit">Enviar Mensagem</SubmitButtonForm>
      </form>
    </ContatoSection>
  );
}

export default Contato;
