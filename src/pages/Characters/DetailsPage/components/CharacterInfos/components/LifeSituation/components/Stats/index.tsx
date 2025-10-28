import type { StatsProps } from './types'

import { Buttons, StatsInput, BorderImage, StatsContainer } from './styles'

export const Stats = (props: StatsProps) => {
  const {
    label,
    color,
    maxPoints,
    setPoints,
    arrowImage,
    focusLabel,
    borderImage,
    currentPoints,
    arrowPlusImage,
  } = props

  const handleClick = (type: 'increment' | 'decrement', plus: boolean) => {
    if (type === 'increment') {
      if (currentPoints < maxPoints) {
        setPoints(Math.min(currentPoints + (plus ? 10 : 1), maxPoints))
      }
    } else {
      if (currentPoints > 0) {
        setPoints(Math.max(currentPoints - (plus ? 10 : 1), 0))
      }
    }
  }

  return (
    <StatsContainer>
      <h2>
        {label} <br /> <span> {focusLabel} </span>
      </h2>
      <StatsInput color={color} percentage={(currentPoints / maxPoints) * 100}>
        <BorderImage src={borderImage} inverted={false} />
        <Buttons inverted={false}>
          <img
            onClick={() => handleClick('decrement', true)}
            src={arrowPlusImage}
          />
          <img
            onClick={() => handleClick('decrement', false)}
            src={arrowImage}
          />
        </Buttons>
        <p>
          {currentPoints}/{maxPoints}
        </p>
        <Buttons inverted={true}>
          <img
            onClick={() => handleClick('increment', true)}
            src={arrowPlusImage}
          />
          <img
            onClick={() => handleClick('increment', false)}
            src={arrowImage}
          />
        </Buttons>
        <BorderImage src={borderImage} inverted={true} />
      </StatsInput>
    </StatsContainer>
  )
}
