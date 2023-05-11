import styled from "styled-components";
import './reset.css';

export const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  /* margin-top: 30px; */
  display: flex;
  flex-direction: row;
`;

export const MapButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin: 0 0 0 0;
`;

export const MapNormalButton = styled.button`
  width: 70px;
  height: 40px;
  background: #fff;
  color: #897EDB;
  border: 1px solid #897EDB;
  margin: 0 0 0 20px;
  border-radius: 10px;
  position: absolute;
  bottom: 460px;
  right: 190px;
  z-index: 999;
  cursor: pointer;
  transition: 0.3s all;
   &:hover{
     transform:translateY(-3px);
   }
`;

export const MapAbnormalButton = styled.button`
  width: 70px;
  height: 40px;
  background: #fff;
  color: #897EDB;
  border: 1px solid #897EDB;
  margin: 0 0 0 20px;
  border-radius: 10px;
  position: absolute;
  bottom: 460px;
  right: 100px;
  z-index: 999;
  cursor: pointer;
  transition: 0.3s all;
   &:hover{
     transform:translateY(-3px);
   }
`;

export const MapBothButton = styled.button`
  width: 70px;
  height: 40px;
  background: #fff;
  color: #897EDB;
  border: 1px solid #897EDB;
  margin: 0 0 0 20px;
  border-radius: 10px;
  position: absolute;
  bottom: 460px;
  right: 10px;
  z-index: 999;
  cursor: pointer;
  transition: 0.3s all;
   &:hover{
     transform:translateY(-3px);
   }
`;