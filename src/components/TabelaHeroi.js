import React from 'react';
import ItensHeroi from './ItensHeroi';

const TabelaHeroi = ({ itens, isLoading }) => {
  console.log(itens)
  return isLoading ? <h1>Loading</h1> :
    <section className="contents">
      {
      itens.map(item => (
        <ItensHeroi key={item.id}  item={item}></ItensHeroi>
      )
     )
    }
    </section>;
}

export default TabelaHeroi
