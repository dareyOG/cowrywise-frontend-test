import { useState } from 'react';
import Main from './src/components/Main';
import SearchBar from './src/components/SearchBar';
import Images from './src/components/Images';
import ModalImage from './src/components/ModalImage';

function App() {
  const [query, setQuery] = useState('African');
  const [isModal, setIsModal] = useState(false);
  return (
    <Main>
      <SearchBar query={query} setQuery={setQuery} />
      <Images query={query} setIsModal={setIsModal} />
      {isModal && <ModalImage />}
    </Main>
  );
}

export default App;
