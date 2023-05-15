import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from "./components/Header";
import SearchForm from './components/SearchFrom';
import Home from './components/Home';
import SongPreview from './components/SongPreview';



function App() {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);

  const searchSong = (params) => {
    setIsLoading(true);

    var url = new URL("https://itunes.apple.com/search");
    url += '?term=' + params.term;
    url += '&entity=' + params.entity;
    url += '&limit=' + params.limit;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCount(data.resultCount);
        setSongs(data.results);
        setIsLoading(false);
      })
      .catch(err => {
        window.alert(err);
        setIsLoading(false);
      });
  }

  return (
    <div className='containe mt-3' >

      <Header />
      <SearchForm searchSong={searchSong} />
      <br />
      <h4 className=' mx-auto w-75' style={{ fontSize: '24px' }} >Result Count: {count}</h4>
      {isLoading && <h4 className='text-warning  mx-auto w-75' style={{ fontSize: '24px' }}>Loading...</h4>}
      <br />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home songs={songs} />} />
          <Route path='/preview' element={<SongPreview />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
