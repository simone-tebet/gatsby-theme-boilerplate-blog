import React from "react";
import MainPageWrapper from "@BlockBuilder/MainPageWrapper";
import { defaultSchema } from "../configs/schemas";
import Brasil from "@Images/brasil.svg";

const AtosSimone = ({ location }) => {
  return (
    <MainPageWrapper seoSchema={defaultSchema(location)} title='Módulos'>
      <Brasil />
      <h2>O que são módulos?</h2>
      <p>Teste aqui de tipografia aleatório contendo texto em língua nativa.</p>
    </MainPageWrapper>
  );
};

export default AtosSimone;
