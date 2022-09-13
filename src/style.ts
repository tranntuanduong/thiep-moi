import { url } from "inspector";
import styled from "styled-components";

export const StyledHello = styled.div`
  color: #a02a2a;
  position: relative;

  .overlay {
    width: 100%;
    height: 100%;
    background-color: red;
    position: absolute;
    top: 0;
    background-color: #0000001f;
    z-index: 1;
  }

  .parallax {
    height: 100vh;
    background: url("/bigday1.jpg") no-repeat fixed 51% 64%;
  }

  .parallax-innter {
    padding-top: 465px;
    padding-bottom: 30%;
    position: relative;
    z-index: 2;
  }

  .content {
    position: relative;
    .title {
      font-family: "Amatic SC", cursive;
      font-weight: bold;
      font-size: 130px;
      line-height: 1.3;
      text-shadow: 3px 3px 3px #fbd2d2;
    }
  }

  .content__foot {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 100%;
    text-shadow: 1px 1px 1px #ffffff87;
    column-gap: 10px;
    font-weight: 500;

    .me {
      font-family: "Ms Madi", cursive;
      font-size: 60px;
      width: 150px;
    }
  }

  .divider-horizontal {
    width: 2px;
    height: 40px;
    background-color: #893535;
    margin: 0 2px;
  }

  .time {
    line-height: 1.3;
  }

  @media (min-width: 0px) {
    .content .title {
      font-size: 80px;
    }
  }
  @media (min-width: 655px) {
    .content .title {
      font-size: 80px;
    }
  }
  @media (min-width: 1300px) {
    .content .title {
      font-size: 130px;
    }
  }
`;

export const StyledBigDay = styled.div`
  height: 700px;
  background-image: url("/bigday1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 65% center;
  color: #fff;
  font-size: 33px;
  font-family: "Dancing Script", cursive;
  position: relative;

  .content {
    position: relative;
    z-index: 2;
  }

  .title {
  }

  .mt80 {
    padding-top: 60px;
  }

  .mt40 {
    padding-top: 30px;
  }
  .mt60 {
    padding-top: 60px;
  }

  .invite-name {
    font-size: 25px;
    margin-top: 20px;
  }

  .invite-title {
    font-size: 40px;
  }

  .time {
    font-weight: bold;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    align-items: flex-end;
    font-size: 20px;
  }

  .desc {
    margin-top: 30px;
    font-size: 18px;
    font-family: "Roboto", sans-serif;
    line-height: 1.6;
  }

  .overlay {
    width: 100%;
    height: 100%;
    background-color: red;
    position: absolute;
    top: 0;
    background-color: #10101069;
    z-index: 1;
  }

  .dot {
    width: 4px;
    height: 4px;
    background-color: #fff;
    border-radius: 50%;
    margin: 0 10px 3px 10px;
  }

  .invite-desc {
    font-size: 18px;
    margin-top: 25px;
    font-family: "Roboto", sans-serif;
    line-height: 1.4;
  }

  .time-desc {
    text-transform: uppercase;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    margin-top: 30px;
  }
`;

export const CountDown = styled.div`
  font-family: "Roboto", sans-serif;

  .wrap {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    column-gap: 30px;
  }
  .item {
  }

  .item__time {
    font-size: 50px;
  }

  .item__text {
    font-size: 16px;
    color: #ffffffba;
    text-transform: uppercase;
    margin-top: 4px;
  }
`;
