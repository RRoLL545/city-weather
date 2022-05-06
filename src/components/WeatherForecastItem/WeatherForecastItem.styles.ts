import styled from 'styled-components'

export const WeatherForecastItemStyled = styled.div`
  width: 109px;
  height: 100%;
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 400;

  & > h3 {
    font-weight: 400;
    font-size: 25px;
    line-height: 33px;
    color: #000000;
    margin: 0;
  }

  & > h4 {
    font-size: 20px;
    line-height: 27px;
    color: rgba(0, 0, 0, 0.4);
    margin: 0;
    margin-bottom: 30px;
  }

  & > div {
    margin-left: 10px;
  }

  & > ul {
    margin: 20px 0 14px;
    padding-left: 0;
    display: flex;
    flex-direction: row;
  }

  & > ul > li {
    list-style-type: none;
    font-weight: 600;
    font-size: 25px;
    line-height: 33px;
    color: #000000;
    width: 55px;
  }

  & > ul > li:last-child {
    color: rgba(0, 0, 0, 0.4);
    width: auto;
  }

  & > span {
    font-size: 16px;
    line-height: 21px;
    color: rgba(0, 0, 0, 0.4);
  }
`