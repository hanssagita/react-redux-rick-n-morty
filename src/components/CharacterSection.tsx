import React from 'react'
import api from '../constants/api'
import useFetch from '../hooks/useFetch'
import { Character, PageInfo } from '../types/character'
import { useDispatch, useSelector } from 'react-redux'
import { setCharacterResults, setCharacterPageInfo } from '../store/modules/characterSlice'
import CharacterItems from './CharacterItems'
import type { CharacterState } from '../store/modules/characterSlice'
import CharacterPagination from './CharacterPagination'

interface CharacterResponse {
  results: Character[]
  info: PageInfo
}

const CharacterSection: React.FC = () => {

  const dispatch = useDispatch()
  const characterPage = useSelector((state: CharacterState) => state.character.page)

  const [response, loading] = useFetch({
    url: `${api.character}?page=${characterPage}`,
    method: 'GET'
  })
  const { results, info }: CharacterResponse = response
  dispatch(setCharacterResults(results))
  dispatch(setCharacterPageInfo(info))

  return (
    <div>
      {loading ? <div>Is Loading</div> : (
      <div>
        <CharacterItems />
        <CharacterPagination />
      </div>)}
    </div>
  )
}

export default CharacterSection