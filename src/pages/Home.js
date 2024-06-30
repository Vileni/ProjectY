import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useNickname from '../hooks/useNickName';
import { useTranslation } from 'react-i18next';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

const Home = () => {
  const { t } = useTranslation();
  const [nickname, saveNickname] = useNickname('nickname');
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      nickname: nickname || '',
    },
    validationSchema: Yup.object({
      nickname: Yup.string()
        .max(5, t('nick_name_error'))
        .required('Nickname is required'),
    }),
    onSubmit: (values) => {
      saveNickname(values.nickname);
      alert(t('nickname_saved'));
    },
    enableReinitialize: true,
  });

  const navigateToPhotos = () => {
    navigate('/Photos');
  };

  return (
    <Container maxWidth='sm' style={styles.container}>
      <Typography variant='h4' component='h1' style={styles.title}>
        {t('title')}
      </Typography>
      <Box component='form' onSubmit={formik.handleSubmit} style={styles.form}>
        <TextField
          variant='outlined'
          fullWidth
          name='nickname'
          label={t('enter_nickname')}
          value={formik.values.nickname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.nickname && Boolean(formik.errors.nickname)}
          helperText={formik.touched.nickname && formik.errors.nickname}
          style={styles.input}
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          fullWidth
          style={styles.button}>
          {t('save_nickname')}
        </Button>
      </Box>
    </Container>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    marginBottom: '10px',
  },
  button: {
    marginTop: '10px',
  },
};

export default Home;
