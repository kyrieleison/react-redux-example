import React, { PropTypes } from 'react'

const Item = ({ onClick, completed, name, created_at }) => (
  <div className="item" style={{ textDecoration: completed ? 'line-through' : 'none'}} onClick={onClick}>
    <span className="name">最強の{name}</span>
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
  created_at: PropTypes.string.isRequired
}

export default Item
