import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';
import tattoos from './data/tattoos'
import AppSearch from './components/AppSearch';

function App() {
  const [selectedTattoo, setSelectedTattoo] = useState(null)
  const [search, setSearch] = useState('');
  // function___________________________{
  function XonClick(xTattoo) {
    setSelectedTattoo(xTattoo)
  }
  function closeTattoo() {
    setSelectedTattoo(null)
  }
  // ___________________________________}
  const tattooElement = tattoos.filter((arr) => {
    return arr.title.includes(search)
  }).map((tattoo, index) => {
    return <TattooItem key={index} tattoo={tattoo} onTattooClick={XonClick} />
  });
  let tattooPost = null;
  if (!!selectedTattoo) {
    tattooPost = <TattooPost tattoo={selectedTattoo} onBg={closeTattoo} />
  }
  return (
    <div className="app">
      <AppHeader />
      <section className='section'>
        <div className='container'>
          <AppSearch search={search} onChange={setSearch} />
          <div className='app-grid'>
            {tattooElement}
          </div>
          {tattooPost}
        </div>
      </section>
    </div>
  );
}

export default App;
