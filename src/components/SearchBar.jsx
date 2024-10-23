function SearchBar({ query, setQuery }) {
  return (
    <header className="bg-bgHeader bg-contain">
      <input
        placeholder="Search for photo"
        className=" w-[80%] m-[10%] p-5 focus:outline-0 border border-transparent rounded-md"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </header>
  );
}

export default SearchBar;
