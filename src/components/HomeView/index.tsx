import React, { useState } from "react";
import {
  AreaLogo,
  CompMenu,
  Container,
  Content,
  ContentCentral,
  Header,
  ItemsMenu,
  LogoTeddy,
  LogoTeddyCentral,
  Menu,
  NameItem,
  WelcomeUser,
} from "./styles";
import Logo from "../../assets/logoTeddy.png";
import RegisterPartner from "../../modules/RegisterPartner";
import ListPartner from "../../modules/ListPartner";
import About from "../../modules/About";
import Dashboard from "../../modules/Dashboard";
import Login from "../../modules/Login";
import { useNavigate } from "react-router-dom";

const HomeView: React.FC = () => {
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState<string>("dashboard");

  const showComponent = (componentName: string) => {
    setActiveComponent(componentName);
  };

  const renderContent = () => {
    switch (activeComponent) {
      case "register":
        return <RegisterPartner />;
      case "list":
        return <ListPartner />;
      case "about":
        return <About />;
      case "dashboard":
        return <Dashboard />;
      default:
    }
  };

  return (
    <Container>
      <Menu>
        <AreaLogo>
          <LogoTeddy src={Logo} alt="Teddy" />
        </AreaLogo>
        <CompMenu>
          <ItemsMenu
            select={activeComponent === "dashboard"}
            onClick={() => showComponent("dashboard")}
          >
            <NameItem>Dashboard</NameItem>
          </ItemsMenu>
          <ItemsMenu
            select={activeComponent === "list"}
            onClick={() => showComponent("list")}
          >
            <NameItem>Listar Parceiro</NameItem>
          </ItemsMenu>
          <ItemsMenu
            select={activeComponent === "register"}
            onClick={() => showComponent("register")}
          >
            <NameItem>Cadastrar Parceiro</NameItem>
          </ItemsMenu>
          <ItemsMenu
            select={activeComponent === "about"}
            onClick={() => showComponent("about")}
          >
            <NameItem>Sobre nós</NameItem>
          </ItemsMenu>
          <ItemsMenu onClick={() => navigate("/")}>
            <NameItem>Sair</NameItem>
          </ItemsMenu>
        </CompMenu>
      </Menu>
      <Content>
        <Header>
          <WelcomeUser>Bem vindo, Luis Henrique</WelcomeUser>
        </Header>
        <ContentCentral>{renderContent()}</ContentCentral>
      </Content>
    </Container>
  );
};

export default HomeView;
