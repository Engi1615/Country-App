import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function CountryPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const CountryName = queryParams.get("name");
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/name/${CountryName}?fields=name,population,region,flags,capital,tld,currencies,languages,border`,
    )
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data);
      });
  }, []);

  return (
    <>
      {countryData.map((data) => (
        <main key={data.name.common}>
          <div className="country-details-container">
            <span
              className="back-button"
              onClick={() => {
                window.history.back();
              }}
            >
              <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
            </span>
            <div className="country-details">
              <img src={data.flags.svg} alt={data.flags.alt} />
              <div className="details-text-container">
                <h1>{data.name.common}</h1>
                <div className="details-text">
                  <p>
                    <b>Population: </b>
                    <span className="population">
                      {data.population.toLocaleString()}
                    </span>
                  </p>
                  <p>
                    <b>Region: </b>
                    <span className="region">{data.region}</span>
                  </p>
                  <p>
                    <b>Capital: </b>
                    <span className="capital">{data.capital}</span>
                  </p>
                  <p>
                    <b>Top Level Domain: </b>
                    <span className="top-level-domain">{data.tld}</span>
                  </p>

                  <p>
                    <b>Languages: </b>
                    <span className="languages">
                      {Object.values(data.languages).join(", ")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      ))}
    </>
  );
}
