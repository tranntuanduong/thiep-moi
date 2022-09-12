import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CountDown, StyledBigDay, StyledHello } from "./style";
import ReactCountdown, { CountdownRenderProps } from "react-countdown";

function App() {
  const date = Date.now() + 10 * 24 * 60 * 60 * 1000;

  return (
    <div className="App">
      <StyledHello>
        <div className="overlay"></div>

        <div className="parallax">
          <div className="parallax-innter">
            <div className="content">
              <div className="title">SAVE THE DATE</div>
              <div className="content__foot">
                <div className="location">
                  Yen Bai <br />
                </div>
                <div className="divider-horizontal"></div>
                <div className="me">Dương Dịu</div>
                <div className="divider-horizontal"></div>

                <div className="time">
                  October
                  <br />
                  10th
                  <br />
                  2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledHello>
      <StyledBigDay>
        <div className="overlay"></div>

        <div className="content">
          <div className="invite-title mt80">Trân trọng kính mời</div>
          <div className="invite-name">Bạn Nguyễn Mạnh Thiện</div>
          <div className="invite-desc">
            Tới dự bữa cơm thân mật <br />
            Mừng lễ thành hôn của hai đứa tớ
          </div>

          <div className="time-desc">Vào hồi 9 giờ 00, thứ hai</div>
          <div className="invite-desc">Tại nhà gái (Đồng Khê)</div>
          <div className="time">
            <div className="time__item">Ngày 10</div>
            <div className="dot"></div>
            <div className="time__item">tháng 10</div>
            <div className="dot"></div>
            <div className="time__item">năm 2022</div>
          </div>

          <div className="title mt60">Chỉ còn...</div>
          <div className="count-down">
            <ReactCountdown
              date={date}
              daysInHours
              renderer={(props: CountdownRenderProps) => (
                <Renderer {...props} />
              )}
            />
          </div>
          <div className="title mt40">...là tới ngày vui của chúng tớ!</div>
        </div>
      </StyledBigDay>
    </div>
  );
}

export default App;

const Renderer = (props: CountdownRenderProps) => {
  const {
    completed,
    formatted: { hours, minutes, seconds },
  } = props;

  const day = Math.floor(parseInt(hours) / 24);
  const newHours = parseInt(hours) - day * 24;

  if (completed) {
    return <div>Hoan thanh</div>;
  }

  return (
    <CountDown>
      <div className="wrap">
        <div className="item">
          <div className="item__time">{day}</div>
          <div className="item__text">Ngày</div>
        </div>
        <div className="item">
          <div className="item__time">{newHours}</div>
          <div className="item__text">Giờ</div>
        </div>
        <div className="item">
          <div className="item__time">{minutes}</div>
          <div className="item__text">Phút</div>
        </div>
        <div className="item">
          <div className="item__time">{seconds}</div>
          <div className="item__text">Giây</div>
        </div>
      </div>
    </CountDown>
  );
};
