export type RollsContextDataProps = {
  attackRollsHistory: {
    name: string
    result: number
    formula: string
  }[]
  addAttackRoll: (name: string, result: number, formula: string) => void
  clearAttackRolls: () => void

  spellRollsHistory: {
    name: string
    result: number
    formula: string
  }[]
  addSpellRoll: (name: string, result: number, formula: string) => void
  clearSpellRolls: () => void
}

export type RollsProviderProps = {
  children: React.ReactNode
}
