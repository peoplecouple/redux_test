import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Up, Change, Create } from './store'

const Sub = () => {
  const { num, input } = useSelector(state => state)
  const dispatch = useDispatch()

  console.log(input)
  return (
    <div>
      {num}
      <button onClick={() => dispatch(Up())}>숫자올리기</button>

      <button onClick={() => dispatch(Change())}>change mode</button>

      <button onClick={() => dispatch(Create())}>전달하기</button>
    </div >
  )
}

export default Sub