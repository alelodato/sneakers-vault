import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaTwitter, FaThreads } from "react-icons/fa6";
import styles from "./Contact.module.css";

export default function Contact() {
  const { t } = useTranslation();
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccessMessage(t("contact.success"));
    setTimeout(() => setSuccessMessage(""), 5000);

    // Pulisci il form se vuoi
    e.target.reset();
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.coverText}>
        {successMessage && <div className={styles.alert}>{successMessage}</div>}
        <h2 className={styles.title}>{t("contact.title")}</h2>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <label>
            {t("contact.name")}
            <input
              type="text"
              placeholder={t("contact.namePlaceholder")}
              required
            />
          </label>

          <label>
            {t("contact.email")}
            <input
              type="email"
              placeholder={t("contact.emailPlaceholder")}
              required
            />
          </label>

          <label>
            {t("contact.message")}
            <textarea placeholder={t("contact.messagePlaceholder")} required />
          </label>

          <button type="submit">{t("contact.submit")}</button>
        </form>

        <div className={styles.details}>
          <h3>{t("contact.others")}</h3>
          <p>{t("contact.phone")}: +44 7435 206 405</p>
          <p>{t("contact.mail")}: info@sneakersvault.com</p>

          <h3>{t("contact.follow")}</h3>
          <div className={styles.socialIcons}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a
              href="https://www.threads.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaThreads />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
