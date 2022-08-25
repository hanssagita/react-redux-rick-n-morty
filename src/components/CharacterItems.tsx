import React from 'react'
import { useSelector } from 'react-redux'
import { Character } from '../types/character'
import type { CharacterState } from '../store/modules/characterSlice'

const CharacterItems:React.FC = () => {

  const characters = useSelector((state: CharacterState) => state.character.results)

  return (
    <div>{
      characters?.map((character: Character) => {
        return (
          <div key={character.id}>
            {character.id} - {character.name}
          </div>
        )
      })
      }</div>
  )
}

export default CharacterItems