export type RollsContextDataProps = {
  rollsHistory: {
    name: string
    result: number
    formula: string
  }[]
  addRoll: (name: string, result: number, formula: string) => void
  clearRolls: () => void
}

export type RollsProviderProps = {
  children: React.ReactNode
}
