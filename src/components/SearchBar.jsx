function SearchBar({ query, setQuery }) {
  return (
    <header className="bg-bgHeader bg-contain">
      <input
        placeholder="Search for photo"
        className=" w-[80%] mx-[10%] my-[10%] md:my-[5%] p-5 md:p-10 focus:outline-0 border border-transparent rounded-[0.5rem]"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </header>
  );
}

export default SearchBar;

{
  /* <input
          placeholder="Search for photo"
          className=" w-[80%] m-[10%] p-5 focus:outline-0 border border-transparent rounded-[0.5rem]"
          value={query}
          onChange={e => setQuery(e.target.value)}
        /> */
}
