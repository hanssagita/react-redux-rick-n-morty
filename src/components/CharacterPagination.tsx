import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { CharacterState } from '../store/modules/characterSlice'
import { setCharacterPage } from '../store/modules/characterSlice'

const actionStyle = {
  display: 'flex',
  justifyContent: 'center'
}

const CharacterPagination: React.FC = () => {

  const page = useSelector((state: CharacterState) => state.character.page)
  const pageInfo = useSelector((state: CharacterState) => state.character.pageInfo)

  const dispatch = useDispatch()

  const handlePrev = () => {
    if(page === 1) return
    const p: number = page - 1
    dispatch(setCharacterPage(p))
  }

  const handleNext = () => {
    if(page === pageInfo.pages) return
    const p: number = page + 1
    dispatch(setCharacterPage(p))
  }

  return (
    <div>
      Current Page: {page} With Max Page: {pageInfo?.pages}
      <br />
      <div style={actionStyle}>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default CharacterPagination