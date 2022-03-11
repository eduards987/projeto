import React from 'react';


const CharacterItem = ({ item }) => {

  const afavorite = (item) => {

    var previousData = JSON.parse(localStorage.getItem('favorites'))
    previousData.push(item)
    localStorage.setItem('favorites', JSON.stringify(previousData))
  }

  return (
    <div className='content'>
      <div className='content-inner'>
        <div className='content-front'>
          <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt='' />
        </div>
        <div className='content-back'>

          <h1>{item.name}</h1>
          <strong>Name:</strong> {item.name}<p></p>
          <strong>Description:</strong> {item.description}<p></p>
          <button type="button" onClick={() => afavorite(item)}>Favorito</button>

        </div>
      </div>
    </div >
  )
}

export default CharacterItem
