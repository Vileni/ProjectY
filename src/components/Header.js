import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ge' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <AppBar position='static'>
      <Toolbar style={styles.toolbar}>
        <Box display='flex' flexGrow={1}>
          <Button color='inherit' component={Link} to='/'>
            {t('home')}
          </Button>
          <Button color='inherit' component={Link} to='/photos'>
            {t('photos')}
          </Button>
          <Button color='inherit' component={Link} to='/about'>
            {t('about')}
          </Button>
        </Box>
        <Box>
          <Button color='inherit' onClick={changeLanguage}>
            {i18n.language === 'en' ? 'ქართული' : 'English'}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export default Header;
