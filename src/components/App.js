import './App.css';
import Header from "./components/Header";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TabelaHeroi from './components/TabelaHeroi';
import md5 from 'md5';
import Search from './components/Search';
import Favorito from './components/Favorito'


const ts = new Date(Date.UTC);

const privatekey = 'aba1493631e890eb5b8d63294d2f71f5a9fe3497'
const publickey = '8740e231ac955ebb947b2e5549bd7e95'

const hash = md5(ts + privatekey + publickey)
function App() {

  const [itens, setItens] = useState([])
  const [isLoading, setLoadig] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {

    const fetch = async () => {

      if (query === '') {
        const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=8740e231ac955ebb947b2e5549bd7e95&hash=${hash}`)
        console.log(result.data.data)
        setItens(result.data.data.results)
        setLoadig('')
      } else {

        const result = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=${ts}&apikey=8740e231ac955ebb947b2e5549bd7e95&hash=${hash}`)
        console.log(result.data.data)
        setItens(result.data.data.results)
        setLoadig('')
      }
    }

    fetch()
  }, [query])

  return (
    <div className='container'>
      <Header />
      <Search search={(q) => setQuery(q)}></Search>
      <Favorito />
      <TabelaHeroi itens={itens} isLoading={isLoading} />
    </div>
  );
}

export default App;