import styled from 'styled-components'

type Props = {
  url: string
  width: string
  height: string
}

export const WeatherIconStyled = styled.div<Props>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-image: url(${props => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`
