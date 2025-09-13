import { useTranslation } from 'react-i18next';
import styles from '../components/LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select onChange={changeLanguage} value={i18n.language} className={styles.switcher}>
      <option value="en">EN</option>
      <option value="it">IT</option>
      <option value="es">ES</option>
      <option value="fr">FR</option>
      <option value="de">DE</option>
    </select>
  );
}
