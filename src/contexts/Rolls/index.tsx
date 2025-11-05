import { createContext, useState } from 'react'
import type { RollsContextDataProps, RollsProviderProps } from './types'

export const RollsContext = createContext<RollsContextDataProps>(
  {} as RollsContextDataProps,
)

export const RollsContextProvider = (props: RollsProviderProps) => {
  const { children } = props

  const [attackRollsHistory, setAttackRollsHistory] = useState<
    RollsContextDataProps['attackRollsHistory']
  >([])

  const [spellRollsHistory, setSpellRollsHistory] = useState<
    RollsContextDataProps['spellRollsHistory']
  >([])

  const addAttackRoll = (name: string, result: number, formula: string) => {
    setAttackRollsHistory((prev) => [{ name, result, formula }, ...prev])

    if (attackRollsHistory.length >= 9) {
      setAttackRollsHistory((prev) => prev.slice(0, 9))
    }
  }

  const clearAttackRolls = () => {
    setAttackRollsHistory([])
  }

  const addSpellRoll = (name: string, result: number, formula: string) => {
    setSpellRollsHistory((prev) => [{ name, result, formula }, ...prev])

    if (spellRollsHistory.length >= 9) {
      setSpellRollsHistory((prev) => prev.slice(0, 9))
    }
  }

  const clearSpellRolls = () => {
    setSpellRollsHistory([])
  }

  return (
    <RollsContext.Provider
      value={{
        attackRollsHistory,
        addAttackRoll,
        clearAttackRolls,
        spellRollsHistory,
        addSpellRoll,
        clearSpellRolls,
      }}
    >
      {children}
    </RollsContext.Provider>
  )
}
