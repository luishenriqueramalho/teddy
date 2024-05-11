import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  background-color: #1c1c1c;
  align-items: center;
  justify-content: center;
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: #1c1c1c;
  margin: 50px 80px 50px 80px;
  border-radius: 20px;
  padding: 40px;
`;

export const LogoTeddy = styled.img``;

export const Title = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: white;
  margin-top: 40px;
`;

export const AccessTxt = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: white;
`;

export const SubTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: white;
  margin-top: 30px;
`;

export const AreaLogin = styled.div`
  margin-top: 40px;
`;

export const InputField = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  background-color: #ff6600;
  color: white;
  padding: 15px;
  margin-top: 20px;
  width: 100%;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const CheckboxLabel = styled.label`
  margin-left: 10px;
  font-size: 14px;
  color: white;
`;

export const FooterText = styled.span`
  display: block;
  color: white;
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
`;
