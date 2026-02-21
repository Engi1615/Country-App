import { useEffect, useState } from "react";
import CountriesCard from "./CountriesCard";
import SearchInput from "./SearchInput";
import { ShimmerEffecrtCountryCard } from "./ShimmerEffecrtCountryCard";

export function Home() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,population,region,flags",
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  return (
    <>
      <main>
        <SearchInput
          query={query}
          setQuery={setQuery}
          setFilter={setFilter}
          filter={filter}
        />
        {countries.length === 0 ? (
          <ShimmerEffecrtCountryCard />
        ) : (
          <CountriesCard
            Query={query}
            countriesData={countries}
            filter={filter}
          />
        )}
      </main>
    </>
  );
}
