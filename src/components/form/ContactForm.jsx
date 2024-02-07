import React from "react";
import { useForm } from "@formspree/react";
import "./ContactForm.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xzbnekne");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form
      className="container_form"
      id="fs-frm"
      name="simple-contact-form"
      acceptCharset="utf-8"
      action="https://formspree.io/f/xzbnekne"
      method="post"
    >
      <h1 className="title_form" id="email">
        Enviar Email
      </h1>
      <fieldset id="fs-frm-inputs">
        <label htmlFor="full-name">Nome</label>
        <input
          type="text"
          name="name"
          id="full-name"
          placeholder="First and Last"
          required
        />
        <label htmlFor="email-address">Email</label>
        <input
          type="email"
          name="_replyto"
          id="email-address"
          placeholder="email@domain.tld"
          required
        />
        <label htmlFor="message">Mensagem</label>
        <textarea
          rows="5"
          name="message"
          id="message"
          placeholder="Olá Rodolpho Reis. Gostaríamos de agendar uma entrevista com você. Gostamos do seu trabalho e queremos ter você em nossa equipe. Vamos entrar em contato e discutir os detalhes. Atenciosamente"
          required
        ></textarea>
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Contact Form Submission"
        />
      </fieldset>
      <input type="submit" value="Enviar" className="btn_form" />
    </form>
  );
}

export default ContactForm;
