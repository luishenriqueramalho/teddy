import React, { useState } from "react";
import {
  AccessTxt,
  AreaLogin,
  Button,
  CardLeft,
  CardRight,
  CheckboxContainer,
  CheckboxLabel,
  Container,
  FooterText,
  InputField,
  LogoTeddy,
  SubTitle,
  Title,
} from "./styles";
import Logo from "../../assets/logoTeddy.png";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const user = [
  {
    userEmail: "luishenrique.ramalhodasilva@gmail.com",
    userPassword: "Teddy2024",
  },
];

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  const handleLogin = () => {
    if (email === "luis" && password === "123") {
      if (rememberMe) {
        Cookies.set("userEmail", email, { expires: 7, secure: true });
      }
      navigate("/home-view");
    } else {
      setErrorMessage(
        "E-mail ou senha incorretos. Por favor, tente novamente."
      );
    }
  };

  return (
    <>
      <Container>
        <CardLeft>
          <LogoTeddy src={Logo} alt="Teddy" />
          <Title>Gerenciamento de parceiros</Title>
        </CardLeft>
        <CardRight>
          <AccessTxt>Acesse sua conta</AccessTxt>
          <SubTitle>
            Utilize o seu E-mail cadastrado e a sua senha para acessar a
            plataforma
          </SubTitle>
          <AreaLogin>
            <InputField
              placeholder="Digite seu E-mail"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            <InputField
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <Button onClick={handleLogin}>Acessar</Button>
            {errorMessage && (
              <FooterText style={{ color: "red" }}>{errorMessage}</FooterText>
            )}
            <CheckboxContainer>
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <CheckboxLabel htmlFor="remember-me">Lembrar-me</CheckboxLabel>
            </CheckboxContainer>
            <FooterText>Esqueceu sua senha?</FooterText>
            <FooterText>
              © 2023 - Teddy Open Finance. Todos os Direitos Reservados
            </FooterText>
          </AreaLogin>
        </CardRight>
      </Container>
    </>
  );
};

export default Login;
