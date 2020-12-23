import React, { useEffect } from 'react';
import './item.css';

import Title from '../../components/title/title';
import {
  countriesActions,
  fetchCountries,
} from '../../store/slices/countriesSlice';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '../../components/autocomplete';
import {
  filteredCountries,
  isPending,
  searchQuery,
  selectedCountry,
  selectedCountryByCode,
} from '../../store/selectors';

const News = () => {
  const dispatch = useDispatch();
  const search = useSelector(searchQuery);
  const countries = useSelector(filteredCountries);
  const selected = useSelector(selectedCountryByCode);
  const isCountiesPending = useSelector(isPending);
  const selectedCode = useSelector(selectedCountry);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  function handleValueChange(value) {
    dispatch(countriesActions.changeSearchQuery(value));
  }

  function handleCountryPick(value) {
    dispatch(countriesActions.setSelected(value));
  }

  return (
    <div>
      <Title title="COVID19" />
      <Autocomplete
        placeholder="Type country name to search..."
        value={search}
        onChange={handleValueChange}
        options={countries}
        onValuePick={handleCountryPick}
      />
      {!isCountiesPending && (
        <div >
          <div className="item">{selected.Country}</div>

          <div className="item">
            <span>Total Confirmed: </span>
            <span>{selected.TotalConfirmed}</span>
          </div>

          <div className="item">
            <span>Total Deaths: </span>
            <span>{selected.TotalDeaths}</span>
          </div>

          <div className="item">
            <span>Total Recovered: </span>
            <span>{selected.TotalRecovered}</span>
          </div>

          <div className="item">
            <span>New Confirmed: </span>
            <span>{selected.NewConfirmed}</span>
          </div>

          <div className="item">
            <span>New Deaths: </span>
            <span>{selected.NewDeaths}</span>
          </div>

          <div className="item">
            <span>New Recovered: </span>
            <span>{selected.NewRecovered}</span>
          </div>

          <span className="item">Updated: {new Date(selected.Date).toLocaleDateString()}</span>
        </div>
      )}
    </div>
  );
};

export default News;
