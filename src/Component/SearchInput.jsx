export default function SearchInput({ setQuery, setFilter, filter, query }) {
  return (
    <>
      <div className="search-filter-container">
        <div className="search-container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            placeholder="Search for a country..."
          />
        </div>
        <div className="filter-container">
          <select
            placeholder="Filter by Region"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setQuery("");
            }}
            className="filter-by-region"
          >
            <option value="" disabled>
              Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          <button
            className="clear-filter-btn"
            onClick={() => {
              setFilter("");
            }}
          >
            Clear Filter
          </button>
        </div>
      </div>
    </>
  );
}
