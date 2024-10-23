import { useState } from 'react';
import Main from './src/components/Main';
import SearchBar from './src/components/SearchBar';
import Images from './src/components/Images';

function App() {
  const [query, setQuery] = useState('African');
  return (
    <Main>
      <SearchBar query={query} setQuery={setQuery} />
      <Images query={query} />
    </Main>
  );
}

export default App;
