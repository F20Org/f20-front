type InventoryItem = {
  id: string
  name: string
  quantity: number
  description: string
}

export const INVENTORY_ITEMS_LIST: InventoryItem[] = [
  {
    id: '1',
    name: 'Poção de Cura Menor',
    quantity: 5,
    description: 'Restaura 2d8+2 pontos de vida quando consumida.',
  },
  {
    id: '2',
    name: 'Corda de Seda',
    quantity: 1,
    description: 'Corda resistente de 15 metros, suporta até 500kg.',
  },
  {
    id: '3',
    name: 'Tocha',
    quantity: 10,
    description: 'Ilumina uma área de 6 metros por 1 hora.',
  },
  {
    id: '4',
    name: 'Ração de Viagem',
    quantity: 7,
    description: 'Alimento preservado que dura uma semana.',
  },
  {
    id: '5',
    name: 'Gema Mística',
    quantity: 3,
    description:
      'Cristal mágico usado para encantamentos. Vale 50 peças de ouro.',
  },
  {
    id: '6',
    name: 'Kit de Primeiros Socorros',
    quantity: 1,
    description: 'Contém bandagens e ervas medicinais. 10 usos restantes.',
  },
  {
    id: '7',
    name: 'Pergaminho de Teletransporte',
    quantity: 2,
    description: 'Permite teletransportar para um local conhecido.',
  },
  {
    id: '8',
    name: 'Chave Enferrujada',
    quantity: 1,
    description: 'Chave antiga e misteriosa. Propósito desconhecido.',
  },
]
