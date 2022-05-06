import styled from 'styled-components'

export const InputCityStyled = styled.input.attrs(props => ({
  type: 'text'
}))`
  width: 151px;
  height: 29px;
  position: absolute;
  top: 56px;
  right: 43px;
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  color: #FFFFFF;
  background: none;
  outline:none;
  border: none;

  ::placeholder {
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 29px;
    color: #FFFFFF;
  }
`