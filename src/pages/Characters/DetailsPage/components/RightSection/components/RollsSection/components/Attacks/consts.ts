type AttackMocksType = {
  name: string
  attack: string
  damage: string
  extraDamage: string
  critical: string
  type: string
  range: string
  skill: string
}

export const attackMocks: AttackMocksType[] = [
  {
    name: 'Lâmina Revólver',
    attack: '1d20+12',
    damage: '2d6+11',
    extraDamage: '-',
    critical: 'x2',
    type: 'Cortante',
    range: 'Curto',
    skill: 'Pontaria',
  },
  {
    name: 'Arco Longo',
    attack: '1d20+10',
    damage: '1d8+8',
    extraDamage: 'Fogo',
    critical: 'x3',
    type: 'Perfurante',
    range: 'Longo',
    skill: 'Arqueria',
  },
  {
    name: 'Machado de Guerra',
    attack: '1d20+9',
    damage: '1d12+6',
    extraDamage: 'Gelo',
    critical: 'x2',
    type: 'Cortante',
    range: 'Curto',
    skill: 'Briga',
  },
  {
    name: 'Cajado Místico',
    attack: '1d20+7',
    damage: '2d4+5',
    extraDamage: 'Mágico',
    critical: 'x2',
    type: 'Impacto',
    range: 'Médio',
    skill: 'Magia',
  },
  {
    name: 'Adaga Sombria',
    attack: '1d20+11',
    damage: '1d4+9',
    extraDamage: 'Veneno',
    critical: 'x4',
    type: 'Perfurante',
    range: 'Curto',
    skill: 'Furtividade',
  },
]
