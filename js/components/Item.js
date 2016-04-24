import React, { PropTypes } from 'react'

const Item = ({ onClick, completed, name, stock, created_at }) => (
  <div className="item" onClick={onClick}>
    <span className="name">最強の{name}</span>
    { stock <= 0 ? <span className="soldout">在庫なし</span> : '' }
    { completed ? <span className="soldout">削除済</span> : '' }
    <div className="right">
      <span className="date">{created_at}</span>
      <span className="delete"><i className="icon">close</i></span>
    </div>
  </div>
)

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  stock: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired
}

export default Item
