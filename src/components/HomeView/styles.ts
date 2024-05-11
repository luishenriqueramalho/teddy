import styled from "styled-components";

type ItemsMenuProps = {
  select?: boolean;
};

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Menu = styled.div`
  width: 20%;
  background-color: #924e31;
`;

export const AreaLogo = styled.div`
  display: flex;
  width: 100%;
  background-color: #924e31;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

export const LogoTeddy = styled.img`
  width: 144px;
  height: 68px;
`;

export const LogoTeddyCentral = styled.img`
  width: 340px;
  height: 161px;
`;

export const CompMenu = styled.div`
  height: 100vh;
  background-color: #282828;
  border-top-left-radius: 20px;
  padding: 10px;
`;

export const ItemsMenu = styled.button<ItemsMenuProps>`
  width: 90%;
  background-color: ${({ select }) => (select ? "#ff6519" : "transparent")};
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin-top: 10px;
  cursor: pointer;
  outline: none;
  color: white;
  &:hover {
    background-color: ${({ select }) => (select ? "#e55f17" : "#444")};
  }
`;

export const NameItem = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: white;
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  background-color: #ae5937;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const ContentCentral = styled.div`
  display: flex;
  flex: 1;
`;

export const WelcomeUser = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;
