export type RollsContextDataProps = {
  attackRollsHistory: {
    name: string
    result: number
    formula: string
  }[]
  addAttackRoll: (name: string, result: number, formula: string) => void
  clearAttackRolls: () => void
}

export type RollsProviderProps = {
  children: React.ReactNode
}
