import { Link } from "react-router-dom";

export default function CountriesCard({ countriesData, Query, filter }) {
  return (
    <>
      <div className="countries-container">
        {countriesData
          .filter((data) => {
            const matchesQuery = data.name.common
              .toLowerCase()
              .includes(Query.toLowerCase());
            const matchesFilter = filter ? data.region === filter : true;
            return matchesQuery && matchesFilter;
          })
          .map((data) => (
            <Link
              key={data.name.common}
              to={`/country?name=${data.name.common}`}
              className="country-card"
            >
              <div key={data.name.common} className="country-card">
                <img src={data.flags.svg} alt={data.name.common} />
                <h2 className="card-title card-text">{data.name.common}</h2>
                <p className="card-text">
                  Population: {data.population.toLocaleString()}
                </p>
                <p className="card-text">Region: {data.region}</p>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}
