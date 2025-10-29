import DefenseIcon from 'assets/icons/defense.svg'

import { DefenseContainer, DefenseImage, DefensePiece } from './styles'
import { useEffect, useState } from 'react'

export const Defense = () => {
  const [armor, setArmor] = useState(0)
  const [shield, setShield] = useState(0)
  const [others, setOthers] = useState(0)
  const [dexterity, setDexterity] = useState(0)
  const [totalDefense, setTotalDefense] = useState(0)

  useEffect(() => {
    setDexterity(12)
    setArmor(12)
    setShield(12)
    setOthers(12)
  }, [])

  useEffect(() => {
    const total =
      Number(dexterity) + Number(armor) + Number(shield) + Number(others)
    setTotalDefense(total)
  }, [dexterity, armor, shield, others])

  return (
    <DefenseContainer>
      <DefenseImage>
        <img src={DefenseIcon} alt='defense-image' />
        <h3>{totalDefense}</h3>
      </DefenseImage>

      <span> = </span>

      <DefensePiece>
        <p>Destreza</p>
        <input
          type='number'
          value={dexterity}
          onChange={(e) => setDexterity(Number(e.target.value))}
        />
      </DefensePiece>

      <span> + </span>

      <DefensePiece>
        <p>Armadura</p>
        <input
          type='number'
          value={armor}
          onChange={(e) => setArmor(Number(e.target.value))}
        />
      </DefensePiece>

      <span> + </span>

      <DefensePiece>
        <p>Escudo</p>
        <input
          type='number'
          value={shield}
          onChange={(e) => setShield(Number(e.target.value))}
        />
      </DefensePiece>

      <span> + </span>

      <DefensePiece>
        <p>Outros</p>
        <input
          type='number'
          value={others}
          onChange={(e) => setOthers(Number(e.target.value))}
        />
      </DefensePiece>
    </DefenseContainer>
  )
}
