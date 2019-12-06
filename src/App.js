import React, { useState, useEffect } from 'react'
import './App.css'
import tableService from './services/table'
import Campaigns from './components/Campaigns'
import Filter  from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  const [campaigns, setCampaigns] = useState([])
  const [columns, setColumns] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    tableService
      .getAll()
      .then(initCampaigns => {
        setCampaigns(initCampaigns)
        setColumns(Object.keys(initCampaigns[0]).reduce((prev, cur) => {
          prev[cur] = true
          return prev
        }, {}))
      })
  }, [])

  const handlerFilter = (event) => {
    let columnsNew = {...columns}
    columnsNew[event.target.name] = event.target.checked
    setColumns(columnsNew)
  }

  const handlerTable = (event) => {
    event.preventDefault()
    let camps = [...campaigns]
    let editCamp = camps.find(obj => obj.id === Number(event.target.id))
    editCamp[event.target.name] = event.target.value
    const id = Number(event.target.id)
    tableService
      .update(id, editCamp)
        .then(returnedCamp => {
          setCampaigns(campaigns.map(camp => camp.id !== id ? camp : returnedCamp))
        })
        .catch(error => {
          setErrorMessage(`Campaign id: '${id}' has been already removed from server`)
          setTimeout(() => setErrorMessage(null), 5000);
          setCampaigns(campaigns.filter(camp => camp.id !== id))
        })
  }

  return (
    <div className="App">
      <header className="App-header">
        <Notification message={errorMessage} />
        <h1>Smart table</h1>
        <div className="filter">
          <Filter columns={columns} handler={handlerFilter}/>
        </div>
      </header>
      <main>
        <Campaigns campaigns={campaigns} columns={columns} handlerTable={handlerTable}/>
      </main>
    </div>
  )
}

export default App;
