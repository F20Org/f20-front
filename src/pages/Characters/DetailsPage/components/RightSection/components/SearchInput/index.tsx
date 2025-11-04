import { Button } from 'components/Button'

import type { SearchInputProps } from './types'

import { InputContainer, SearchInputContainer } from './styles'

export const SearchInput = (props: SearchInputProps) => {
  const {
    icon,
    placeholder,
    buttonText,
    searchInput,
    buttonColor,
    handleClick,
    setSearchInput,
  } = props

  return (
    <SearchInputContainer>
      <InputContainer
        placeholder={placeholder}
        type='text'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <Button
        backgroundColor={buttonColor}
        label={buttonText}
        onClick={handleClick}
        icon={icon}
      />
    </SearchInputContainer>
  )
}
