import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer style={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} {t('footer_text')}
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1976d2',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1rem',
    position: 'fixed',
    bottom: 0,
  },
};

export default Footer;
