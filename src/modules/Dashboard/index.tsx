import React, { useState } from "react";
import { Container, LogoTeddyCentral } from "./styles";
import Logo from "../../assets/logoTeddy.png";
import RegisterPartner from "../RegisterPartner";
import ListPartner from "../ListPartner";
import About from "../About";

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <LogoTeddyCentral src={Logo} alt="Teddy" />
      </Container>
    </>
  );
};

export default Dashboard;
