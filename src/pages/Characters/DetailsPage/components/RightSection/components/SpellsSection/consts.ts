type SpellAttributes = {
  execution: string
  range: string
  target: string
  duration: string
}

type Spell = {
  id: number
  name: string
  circle: string
  description: string
  attributes: SpellAttributes
}

export const SPELLS_LIST: Spell[] = [
  {
    id: 1,
    name: 'Bola de Fogo',
    circle: '3º Círculo',
    description:
      'Lança uma esfera flamejante que explode ao impactar, causando 8d6 de dano de fogo em área.',
    attributes: {
      execution: 'Ação Padrão',
      range: '30 metros',
      target: 'Área de 6 metros de raio',
      duration: 'Instantânea',
    },
  },
  {
    id: 2,
    name: 'Escudo Arcano',
    circle: '1º Círculo',
    description:
      'Cria uma barreira mágica invisível que concede +4 de bônus na Defesa.',
    attributes: {
      execution: 'Ação de Movimento',
      range: 'Pessoal',
      target: 'Você',
      duration: '1 cena',
    },
  },
  {
    id: 3,
    name: 'Raio Congelante',
    circle: '2º Círculo',
    description:
      'Dispara um raio de gelo que causa 4d6 de dano de gelo e pode deixar o alvo lento.',
    attributes: {
      execution: 'Ação Padrão',
      range: '18 metros',
      target: '1 criatura',
      duration: 'Instantânea',
    },
  },
  {
    id: 4,
    name: 'Cura Ferimentos',
    circle: '2º Círculo',
    description: 'Restaura 2d8+5 pontos de vida da criatura tocada.',
    attributes: {
      execution: 'Ação Padrão',
      range: 'Toque',
      target: '1 criatura',
      duration: 'Instantânea',
    },
  },
  {
    id: 5,
    name: 'Invisibilidade',
    circle: '2º Círculo',
    description:
      'O alvo se torna invisível, ganhando +20 em testes de Furtividade e camuflagem total.',
    attributes: {
      execution: 'Ação Padrão',
      range: 'Toque',
      target: '1 criatura',
      duration: '1 cena ou até atacar',
    },
  },
  {
    id: 6,
    name: 'Relâmpago',
    circle: '3º Círculo',
    description:
      'Invoca um poderoso raio elétrico em linha reta causando 10d6 de dano elétrico.',
    attributes: {
      execution: 'Ação Padrão',
      range: '30 metros',
      target: 'Linha de 30m',
      duration: 'Instantânea',
    },
  },
  {
    id: 7,
    name: 'Voo',
    circle: '3º Círculo',
    description:
      'Concede capacidade de voar com deslocamento de 18 metros por rodada.',
    attributes: {
      execution: 'Ação Padrão',
      range: 'Toque',
      target: '1 criatura',
      duration: '10 minutos',
    },
  },
  {
    id: 8,
    name: 'Sono',
    circle: '1º Círculo',
    description:
      'Faz criaturas em uma área adormecerem profundamente por alguns minutos.',
    attributes: {
      execution: 'Ação Padrão',
      range: '9 metros',
      target: 'Área de 3 metros de raio',
      duration: '1 minuto',
    },
  },
]
