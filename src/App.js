import Header from './components/Header';
import Cards from './components/Cards'
import data from './data';
import React from 'react';


function App() {
  const cards = data.map(item => {
    return (
      <Cards 
        key = {item.id}
        title = {item.title}
        location = {item.location}
        googleMapsUrl = {item.googleMapsUrl}
        startDate = {item.startDate}
        endDate = {item.endDate}
        description = {item.description}
        img = {item.imageUrl}
        // [...item]
      />
    )
  })

  return (
    <div>
      <Header />
      <div>{cards}</div>
    </div>
  )
}

export default App;
