import React from "react";

import chatImg from "../assets/chat.svg";
import shoppingImg from "../assets/shopping.svg";
import onlineShoppingImg from "../assets/online_shopping.svg";
import dealImg from '../assets/deal.svg';
import dataAnalysisImg from "../assets/data_analysis.svg";

import {
  Container,
  Info,
  InfoText,
  TextTitle,
  Divider,
  InfoTextDescription,
  Cards,
  Card,
  CardText,
  CardTitle,
  CardDescription,
} from "./styles";

export default function MainPage() {
  return (
    <Container>
      <Info>
        <InfoText>
          <TextTitle>Perguntas comuns? Respostas Hermes</TextTitle>
          <Divider />
          <InfoTextDescription>Não deixe seu cliente esperando uma resposta simples, deixe Hermes fazer esse trabalho para você.</InfoTextDescription>
        </InfoText>
        <img src={chatImg} alt="chat with a Hermes answer" />
      </Info>
      <Cards>
        <TextTitle>Otimize sua gestão</TextTitle>
        <Divider />
        <Card invert={true}>
          <CardText invert={true}>
            <CardTitle>Agilize a decisão do seu cliente</CardTitle>
            <CardDescription>Uma resposta rápida ao seu cliente, em até 1 hora, aumenta em até 14% a decisão de compra. Com o Hermes, as respostas mais simples são respondidas na hora!</CardDescription>
          </CardText>
          <img src={shoppingImg} alt="woman holding some products"/>
        </Card>
        <Card>
          <img src={onlineShoppingImg} alt="woman buying some online products"/>
          <CardText>
            <CardTitle>Hermes funciona em todo marketplace!</CardTitle>
            <CardDescription>Mercado Livre, Americanas ou Amazon...<br />
Não importa a plataforma que você utiliza, nós sempre estaremos aqui!
Utilize a nossa API ou adquira um de nossos planos pagos.</CardDescription>
          </CardText>
        </Card>
        <Card invert={true}>
          <CardText invert={true}>
            <CardTitle>Mais ajuda quem não atrapalha</CardTitle>
            <CardDescription>Muitos sistemas respondem mesmo sem saber a real resposta, já o Hermes só responde as perguntas que sabe, deixando o restante para seus atendentes.</CardDescription>
          </CardText>
          <img side="right" src={dealImg} alt="two mans making a deal"/>
        </Card>
        <Card>
          <img src={dataAnalysisImg} alt="a man analysing some data"/>
          <CardText>
            <CardTitle>Agilidade para seus atendentes</CardTitle>
            <CardDescription>Respondendo as perguntas mais simples, deixamos apenas as mais  complexas para os seus atendentes. Assim ninguém perde tempo e as perguntas podem ser respondidas o quanto antes.</CardDescription>
          </CardText>
        </Card>
      </Cards>
    </Container>
  );
}
