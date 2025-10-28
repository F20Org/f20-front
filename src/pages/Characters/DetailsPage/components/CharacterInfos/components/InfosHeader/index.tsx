import { Button } from 'components/Button'

import {
  Avatar,
  Infos,
  InfosHeaderContainer,
  LevelInfos,
  PrimaryInfos,
  SecondaryInfos,
} from './styles'

export const InfosHeader = () => {
  return (
    <InfosHeaderContainer>
      <PrimaryInfos>
        <Avatar />
        <Infos>
          <h4> Personagem </h4>
          <h2> Nome do Personagem </h2>
          <p> By Jogador </p>
        </Infos>
        <Button label='Editar' onClick={() => {}} />
      </PrimaryInfos>
      <SecondaryInfos>
        <div>
          <p> Raca </p> <p> Classe </p> <p> Origem </p>
        </div>
        <LevelInfos>
          <div>
            <p> Nível </p>
            <span> 5 </span>
          </div>
          <div>
            <p> XP </p>
            <span> 1200 / 2000 </span>
          </div>
        </LevelInfos>
      </SecondaryInfos>
    </InfosHeaderContainer>
  )
}
