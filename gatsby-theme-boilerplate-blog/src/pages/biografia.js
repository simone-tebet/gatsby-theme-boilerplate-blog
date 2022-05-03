import React from "react";
import MainPageWrapper from "@BlockBuilder/MainPageWrapper";
import { defaultSchema } from "../configs/schemas";

const Biografia = ({ location }) => {
  return (
    <MainPageWrapper
      seoSchema={defaultSchema(location)}
      title='Biografia'
      classes='main-page-wrapper'
    >
      <p>
        A pré-candidata do MDB à presidência da república é hoje a mulher mais
        influente dentro da política brasileira.
      </p>
      <h2>Quem é Simone Tebet?</h2>

      <p>
        Simone Tebet é líder da bancada feminina no senado Brasileiro. Primeira
        mulher a presidir diversas frentes políticas, tendo sempre forte atuação
        na área da política feminina.
      </p>

      <p>
        A senadora iniciou a sua trajetória política há vinte anos, como
        deputada estadual pelo MDB, partido do seu falecido pai e seu único
        partido até hoje. Eleita prefeita da sua cidade natal, Três Lagoas, por
        duas vezes, depois saltou para ser vice-governadora e ainda exerceu a
        função de Secretária de Governo.
      </p>
      <p>
        No senado, Simone Tebet ingressou com o seu mandato em 2015. Tem se
        destacado pela sua capacidade de pela sua competência técnica como
        jurista. É vista como uma forte influência pela sua capacidade política.
      </p>

      <h2>Origem</h2>

      <p>
        De origem árabe-libanesa Simone Nassar Tebet nasceu em 22 de fevereiro
        de 1970, em Três Lagoas, Mato Grosso do Sul. É a filha mais velha de
        Fairte Nassar Tebet e do ex-senador e ex-presidente do Congresso
        Nacional, Ramez Tebet, falecido em 2006. Casada com deputado estadual
        Eduardo Rocha, com quem tem duas filhas.
      </p>

      <p>
        Simone é advogada, professora universitária e política. Formou-se em
        Direito pela Universidade Federal do Rio de Janeiro. É especialista em
        Ciência do Direito pela Escola Superior de Magistratura.
      </p>

      <p>
        Começou sua vida profissional como professora universitária aos 22 anos,
        atividade que exerceu por 12 anos. Trabalhou na Universidade Federal de
        Mato Grosso do Sul, Universidade Católica Dom Bosco, Universidade para o
        Desenvolvimento do Estado e Região do Pantanal e Faculdades Integradas
        de Campo Grande.
      </p>

      <p>
        Trabalhou como consultora técnica jurídica e foi diretora técnica
        legislativa da Assembleia Legislativa do Mato Grosso do Sul .
      </p>

      <p>
        Fossem apenas{" "}
        <sup>
          <a name='ref1' href='#myfootnote1' id='ref1'>
            1
          </a>
        </sup>{" "}
      </p>

      <sup id='myfootnote1' name='myfootnote1'>
        1. Some: Existe sim.{" "}
        <a href='#ref1' title='Voltar para footnote 1.'>
          ↩
        </a>
      </sup>
    </MainPageWrapper>
  );
};

export default Biografia;
