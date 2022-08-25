import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Character, PageInfo } from '../../types/character'

export type State =  {
  results: Character[],
  pageInfo: PageInfo
  page: number
}

export type CharacterState = {
  character: State
}

const initialState: State = {
  results: [],
  pageInfo: {
    count: 0,
    pages: 0
  },
  page: 1
}

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacterResults: (state, action: PayloadAction<Character[]>) => {
      state.results = action.payload
    },
    setCharacterPageInfo: (state, action: PayloadAction<PageInfo>) => {
      state.pageInfo = action.payload
    },
    setCharacterPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    }
  }
})

export const { setCharacterResults, setCharacterPageInfo, setCharacterPage } = characterSlice.actions

export default characterSlice.reducer
