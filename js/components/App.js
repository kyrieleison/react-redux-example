import React from 'react'
import Filter from './Filter'
import AddItem from '../containers/AddItem'
import VisibleItemList from '../containers/VisibleItemList'

const App = () => (
  <div className="app">
    <h1>わたしの考えた最強のECサイト(仮)</h1>
    <AddItem />
    <Filter />
    <VisibleItemList />
  </div>
)

export default App
