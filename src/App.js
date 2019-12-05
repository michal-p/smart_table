import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Campaigns from './components/Campaigns'
import Filter  from './components/Filter'
import './App.css'

const App = () => {
  const url = "https://gist.githubusercontent.com/ondrejbartas/173cc52ed3841432c06e6b6b1f4d02f6/raw/beb0056d563eb017368150ba165019b6a235da6e/2_data.json"
  const [campaigns, setCampaigns] = useState([])
  const [columns, setColumns] = useState({})
  useEffect(() => {
    axios
      .get(`${url}`)
      .then( response => {
        setCampaigns(response.data)
        setColumns(Object.keys(response.data[0]).reduce((prev, cur) => {
          prev[cur] = true
          return prev
        }, {}))
      })
  }, [])

  const handlerFilter = (event) => {
    console.log(event.target.name)
    console.log(event.target.checked)
    let col = event.target.name
    let checked = event.target.checked
    let columnsNew = {...columns}
    columnsNew[col] = checked
    setColumns(columnsNew)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Smart table
        </h1>
        {/* {columns.join(' | ')} */}
      </header>
      <Filter columns={columns} handler={handlerFilter}/>
      <Campaigns campaigns={campaigns} columns={columns}/>
    </div>
  )
}

export default App;
