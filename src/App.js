import logo from './logo.svg';
import './App.css';
import { search } from './image-search';
import { WORDS, NOUNS } from './wordlist';
import { useEffect, useState } from 'react';

function App() {
  const words = WORDS;
  // const [pics, setPics] = useState([]);
  // console.log(words)

  // useEffect(() => {
  //   const s = async w => {
  //     return (await search(w)).previewURL
  //   }
  //   Promise.all(words.map(s)).then(
  //     x => setPics(x)
  //   );
  // }, []);

  // console.log(pics);

  return (
    <div className="app">
      {
        words.map((x, i) =>
          <div
            key={x}
            className={`card ${NOUNS.has(x) ? 'noun' : ''}`}
          // style={{ backgroundImage: `url(${pics[i]})` }}
          >
            {x}
          </div>
        )
      }
    </div>
  );
}

export default App;
