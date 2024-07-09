import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
      {/* <h1>hi</h1> */}
    </li>
  );
}

export default CountryItem;
