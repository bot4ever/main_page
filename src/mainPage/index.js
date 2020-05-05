import React from "react";

import chatImg from "../assets/chat.svg";
import shoppingImg from "../assets/shopping.svg";
import onlineShoppingImg from "../assets/online_shopping.svg";
import dealImg from '../assets/deal.svg';
import dataAnalysisImg from "../assets/data_analysis.svg";
import checkImg from '../assets/check.svg';
import octocatImg from '../assets/octocat.svg'

import communityImg from '../assets/pricing/community.svg';
import basicImg from '../assets/pricing/basic.svg';
import proImg from '../assets/pricing/pro.svg';
import enterpriseImg from '../assets/pricing/enterprise.svg';

import {
  Container,
  Info,
  InfoText,
  TextTitle,
  TextSubTitle,
  Divider,
  InfoTextDescription,
  Cards,
  Card,
  CardText,
  CardTitle,
  CardDescription,
  Pricing,
  PricingDescription,
  PricingBoxes,
  PricingBox,
  PricingAdvantages,
  PricingAdvantagesTitle,
  PricingAdvantage,
  PricingButton,
  MasterBoxes
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
        <TextSubTitle>Otimize sua gestão</TextSubTitle>
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
      <Pricing>
        <TextSubTitle>Comece agora mesmo</TextSubTitle>
        <Divider top={'20px'} />
        <PricingDescription>Escolha o melhor plano para seu negócio</PricingDescription>
        <MasterBoxes>
          <PricingBoxes>
            <PricingBox col={"#F1F2F5"}>
              <div>
                <img src={communityImg} alt="community plan" />
                <div>
                  <h5>Community</h5>
                  <p><span>R$</span>&#160;<strong>0</strong>&#160;&#47;&#160;pergunta</p>
                </div>
              </div>
              <PricingAdvantages>
                <PricingAdvantagesTitle>O plano inclui:</PricingAdvantagesTitle>
                <PricingAdvantage>
                  <img src={checkImg} alt="check" />
                  <h6>Suporte da comunidade</h6>
                </PricingAdvantage>
                <PricingAdvantage>
                  <img src={checkImg} alt="check" />
                  <h6>Acesso a versões antecipadas</h6>
                </PricingAdvantage>
                <PricingAdvantage>
                  <img src={checkImg} alt="check" />
                  <h6>Para uso pessoal/educacional</h6>
                </PricingAdvantage>
              </PricingAdvantages>
              <PricingButton bg={"#E4E4E4"} icon={octocatImg}>
                Acessar GitHub
              </PricingButton>
            </PricingBox>
            <PricingBox bg={"linear-gradient(180deg, #68E1FD 0%, rgba(104, 225, 253, 0.75) 100%)"}>
              <div>
                <img src={basicImg} alt="basic plan" />
                <div>
                  <h5>Basic</h5>
                  <p><span>R$</span>&#160;<strong>20</strong>&#160;&#47;&#160;500p</p>
                </div>
              </div>
              <PricingAdvantages>
                <PricingAdvantagesTitle>O plano inclui:</PricingAdvantagesTitle>
                <PricingAdvantage>
                  <img src={checkImg} alt="check" />
                  <h6>Vantagens anteriores +</h6>
                </PricingAdvantage>
                <PricingAdvantage>
                  <img src={checkImg} alt="check" />
                  <h6>Suporte especializado</h6>
                </PricingAdvantage>
                <PricingAdvantage>
                  <img src={checkImg} alt="check" />
                  <h6>Hospedagem da API 24/7</h6>
                </PricingAdvantage>
                <PricingAdvantage>
                  <img src={checkImg} alt="check" />
                  <h6>Ideal para desenvolvedores</h6>
                </PricingAdvantage>
              </PricingAdvantages>
              <PricingButton col="#63B0C1;" bg="rgba(241, 242, 245, 0.7)">
                Escolher Basic
              </PricingButton>
            </PricingBox>
          </PricingBoxes>
          <PricingBoxes>
            <PricingBox bg="linear-gradient(180deg, #5B8BFE 0%, rgba(91, 139, 254, 0.75) 100%);">
              <div>
                <img src={proImg} alt="pro plan" />
                <div>
                  <h5>Pro</h5>
                  <p><span>R$</span>&#160;<strong>30</strong>&#160;&#47;&#160;500p</p>
                </div>
              </div>
              <PricingAdvantages>
                <PricingAdvantagesTitle white>O plano inclui:</PricingAdvantagesTitle>
                <PricingAdvantage white>
                  <img src={checkImg} alt="check" />
                  <h6>Vantagens anteriores +</h6>
                </PricingAdvantage>
                <PricingAdvantage white>
                  <img src={checkImg} alt="check" />
                  <h6>Painel de controle</h6>
                </PricingAdvantage>
                <PricingAdvantage white>
                  <img src={checkImg} alt="check" />
                  <h6>Estatísticas básicas</h6>
                </PricingAdvantage>
                <PricingAdvantage white>
                  <img src={checkImg} alt="check" />
                  <h6>Ideal para vendedores individuais</h6>
                </PricingAdvantage>
              </PricingAdvantages>
              <PricingButton col="#4B69B0;" bg="rgba(241, 242, 245, 0.7)">
                Escolher Pro
              </PricingButton>
            </PricingBox>
            <PricingBox last bg="linear-gradient(180deg, #2A2951 0%, rgba(42, 41, 81, 0.85) 100%)">
              <div>
                <img src={enterpriseImg} alt="enterprise plan" />
                <div>
                  <h5>Enterprise</h5>
                </div>
              </div>
              <PricingAdvantages>
                <PricingAdvantagesTitle white>O plano inclui:</PricingAdvantagesTitle>
                <PricingAdvantage white>
                  <img src={checkImg} alt="check" />
                  <h6>Vantagens anteriores +</h6>
                </PricingAdvantage>
                <PricingAdvantage white>
                  <img src={checkImg} alt="check" />
                  <h6>Hospedagem dedicada</h6>
                </PricingAdvantage>
                <PricingAdvantage white>
                  <img src={checkImg} alt="check" />
                  <h6>Métricas avançadas</h6>
                </PricingAdvantage>
                <PricingAdvantage white>
                  <img src={checkImg} alt="check" />
                  <h6>Ideal para grande empresas</h6>
                </PricingAdvantage>
              </PricingAdvantages>
              <PricingButton bg="rgba(241, 242, 245, 0.7)" col="#444366">
                Escolher Enterprise
              </PricingButton>
            </PricingBox>
          </PricingBoxes>
        </MasterBoxes>
      </Pricing>
    </Container>
  );
}
