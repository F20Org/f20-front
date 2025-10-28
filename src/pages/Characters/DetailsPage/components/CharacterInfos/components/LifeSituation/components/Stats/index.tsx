import type { StatsProps } from './types'

import { Buttons, StatsInput, BorderImage, StatsContainer } from './styles'

export const Stats = (props: StatsProps) => {
  const {
    label,
    color,
    maxPoints,
    arrowImage,
    focusLabel,
    borderImage,
    currentPoints,
    arrowPlusImage,
  } = props

  return (
    <StatsContainer>
      <h2>
        {label} <br /> <span> {focusLabel} </span>
      </h2>
      <StatsInput color={color}>
        <BorderImage src={borderImage} inverted={false} />
        <Buttons inverted={false}>
          <img src={arrowPlusImage} />
          <img src={arrowImage} />
        </Buttons>
        <p>
          {currentPoints}/{maxPoints}
        </p>
        <Buttons inverted={true}>
          <img src={arrowPlusImage} />
          <img src={arrowImage} />
        </Buttons>
        <BorderImage src={borderImage} inverted={true} />
      </StatsInput>
    </StatsContainer>
  )
}
