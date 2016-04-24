import React, { PropTypes } from 'react'
import Item from './Item'

const ItemList = ({ items, onItemClick }) => (
  <div className="itemList">
    {items.map(item =>
      <Item
        key={item.id}
        {...item}
        onClick={() => onItemClick(item.id)}
      />
    )}
  </div>
)

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    stock: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onItemClick: PropTypes.func.isRequired
}

export default ItemList
