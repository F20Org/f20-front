import { createContext, useState } from 'react'
import type { RollsContextDataProps, RollsProviderProps } from './types'

export const RollsContext = createContext<RollsContextDataProps>(
  {} as RollsContextDataProps,
)

export const RollsContextProvider = (props: RollsProviderProps) => {
  const { children } = props

  const [rollsHistory, setRollsHistory] = useState<
    RollsContextDataProps['rollsHistory']
  >([])

  const addRoll = (name: string, result: number, formula: string) => {
    setRollsHistory((prev) => [{ name, result, formula }, ...prev])

    if (rollsHistory.length >= 9) {
      setRollsHistory((prev) => prev.slice(0, 9))
    }
  }

  const clearRolls = () => {
    setRollsHistory([])
  }

  return (
    <RollsContext.Provider
      value={{
        rollsHistory,
        addRoll,
        clearRolls,
      }}
    >
      {children}
    </RollsContext.Provider>
  )
}
