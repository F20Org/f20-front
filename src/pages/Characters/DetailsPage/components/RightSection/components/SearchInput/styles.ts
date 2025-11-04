import styled from 'styled-components'

export const SearchInputContainer = styled.div`
  display: flex;

  gap: 14px;

  width: 100%;
`

export const InputContainer = styled.input`
  width: 100%;
  padding: 0px 14px;

  border: 0;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  &:focus {
    outline: none;
  }
`
