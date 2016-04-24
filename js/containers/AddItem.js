import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'

let AddItem = ({ dispatch }) => {
  let name, stock

  return (
    <div>
      <form
        className="form itemCreateForm"
        onSubmit={e => {
          e.preventDefault()
          if (!name.value.trim() || !stock.value.trim()) {
            return
          }
          dispatch(addItem(name.value, stock.value))
          name.value = ''
          stock.value = ''
        }}
      >
        <input
          type="text"
          placeholder="商品名"
          ref={node => {
            name = node
          }}
        />
        <input
          type="number"
          placeholder="在庫数"
          ref={node => {
            stock = node
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
