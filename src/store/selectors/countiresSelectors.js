import { createSelector } from '@reduxjs/toolkit';

export const searchQuery = (state) => state.countries.searchQuery;
export const countries = (state) => state.countries.items;
export const isPending = (state) => state.countries.isPending;
export const selectedCountry = (state) => state.countries.selected;

export const selectedCountryByCode = createSelector(
  countries,
  selectedCountry,
  (items, code) => {
    return items.find((item) => item['CountryCode'] === code) || null;
  }
);

export const filteredCountries = createSelector(
  countries,
  searchQuery,
  (items, search) => {
    const formattedSearch = search.toLowerCase();
    return items.filter((item) => {
      const code = item['CountryCode'].toLowerCase();
      const country = item['Country'].toLowerCase();

      return (
        code.includes(formattedSearch) || country.includes(formattedSearch)
      );
    }).slice(0, 10).map(item => ({value: item['CountryCode'], label: item['Country']}));
  }
);
