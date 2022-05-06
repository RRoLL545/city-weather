import styled from 'styled-components'

export const CityWeatherStyled = styled.div`
  height: 131px;
  margin-left: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;

  & > span {
    margin-right: 20px;
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    line-height: 133px;
    color: #FFFFFF;
    box-sizing: border-box;
    padding-right: 10px;
  }

  & > div {
    margin-top: 10px;
  }

  & > ul {
    margin: 19px 0 16px 33px;
    padding-left: 0;
  }

  & > ul > li {
    list-style-type: none;
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: rgba(255, 255, 255, 0.5);
    margin: 3px 0;
  }

  & > ul > li > span {
    color: #FFFFFF;
  }
`