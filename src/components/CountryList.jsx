import Spinner from "./Spinner";
import styles from "./CountriesList.module.css";
import CountryItem from "./CityItem";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((city) => (
        <CountryItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CountryList;
