import DefenseIcon from 'assets/icons/defense.svg'

import { DefenseContainer, DefenseImage, DefensePiece } from './styles'

export const Defense = () => {
  return (
    <DefenseContainer>
      <DefenseImage>
        <img src={DefenseIcon} alt='defense-image' />
        <h3>22</h3>
      </DefenseImage>

      <span> = </span>

      <DefensePiece>
        <p>Destreza</p>
        <input type='number' value={12} />
      </DefensePiece>

      <span> + </span>

      <DefensePiece>
        <p>Armadura</p>
        <input type='number' value={12} />
      </DefensePiece>

      <span> + </span>

      <DefensePiece>
        <p>Escudo</p>
        <input type='number' value={12} />
      </DefensePiece>

      <span> + </span>

      <DefensePiece>
        <p>Outros</p>
        <input type='number' value={12} />
      </DefensePiece>
    </DefenseContainer>
  )
}
