import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Box, Button, TextField, Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
});

const About = () => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    alert('Thank you! You will get a response as soon as possible.');
    console.log(data);
  };

  return (
    <Container maxWidth='sm'>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        height='100vh'>
        <Typography variant='h4' component='h1' gutterBottom>
          {t('about')}
        </Typography>
        <Typography variant='body1' gutterBottom>
          {t('about_feedback')}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <Controller
            name='email'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                label={t('email_address')}
                variant='outlined'
                fullWidth
                margin='normal'
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
              />
            )}
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            style={{ marginTop: '16px' }}>
            {t('submit')}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default About;
