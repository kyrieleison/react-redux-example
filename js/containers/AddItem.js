import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'

let AddItem = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        className="form itemCreateForm"
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addItem(input.value))
          input.value = ''
        }}
      >
        <input
          type="text"
          placeholder="商品名"
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          追加
        </button>
      </form>
    </div>
  )
}
AddItem = connect()(AddItem)

export default AddItem
