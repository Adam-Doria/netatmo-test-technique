import "./Filter.css";

export default function Filters({
  genderFilter,
  setGenderFilter,
  inputSearch,
  setInputSearch,
}) {
  return (
    <div className="filtersBar">
      <div className="searchBar">
        {/* <label htmlFor="inputsearch">Search</label> */}
        <input
          id="inputsearch"
          type="text"
          value={inputSearch}
          placeholder="Entrez votre recherche"
          onChange={(e) => setInputSearch(e.target.value)}
        />
      </div>
      <div className="genderFilters">
       
        <div className="femaleFilter">
          <input
            type="radio"
            id="female"
            name="genderfilter"
            onChange={(e) => setGenderFilter(e.target.id)}
          />
          <label htmlFor="female">&#x2640;</label>
        </div>
        <div className="maleFilter">
          <input
            type="radio"
            id="male"
            name="genderfilter"
            onClick={(e) => setGenderFilter(e.target.id)}
          />
          <label htmlFor="male">&#x2642;</label>
        </div>

        {genderFilter !== "" && (
          <div className="resetFilter">
            <input
              type="radio"
              id="resetfilter"
              name="genderfilter"
              onChange={() => setGenderFilter("")}
            />
            <label htmlFor="resetfilter">Reset</label>
          </div>
        )}
      </div>
    </div>
  );
}
