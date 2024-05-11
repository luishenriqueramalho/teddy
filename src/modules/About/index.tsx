import React from "react";
import { Container, Subtitle, Text, Title } from "./styles";

const About: React.FC = () => {
  return (
    <Container>
      <Title>Múltiplas soluções financeiras em um único lugar.</Title>
      <Text>
        A Teddy Open Finance é uma fintech inovadora que visa revolucionar o
        mercado financeiro, oferecendo soluções modernas e lucrativas para
        profissionais autônomos e escritórios da área. Através da Teddy 360°,
        nossa plataforma busca digitalizar rotinas financeiras, conectar
        profissionais a uma ampla gama de produtos e instituições, e provar que
        é possível conquistar o sucesso bancário de forma autônoma.
      </Text>
      <Subtitle>O que nos MOTIVOU?</Subtitle>
      <Text>
        Com o aumento dos bancos digitais e o fechamento de agências bancárias,
        os profissionais precisam se reinventar para continuar ofertando
        produtos financeiros que antes só estavam disponíveis em ambientes
        físicos. Então surge a nossa plataforma que conecta em um único lugar,
        bancários autônomos e escritórios de investimento a mais de 150 produtos
        de mais de 70 instituições financeiras e assim descentralizamos a oferta
        de crédito no país e impulsionamos negócios.
      </Text>
    </Container>
  );
};

export default About;
