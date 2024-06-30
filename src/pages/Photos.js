import React from 'react';
import usePhotos from '../hooks/usePhotos';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Container,
} from '@mui/material';
import { motion } from 'framer-motion';

const Photos = () => {
  const { photos, loading, error } = usePhotos(
    'https://jsonplaceholder.typicode.com/photos?_limit=5'
  );

  if (loading)
    return (
      <Container style={styles.loadingContainer}>
        <CircularProgress />
      </Container>
    );
  if (error) return <p>Error loading photos: {error.message}</p>;

  return (
    <Container style={styles.photosContainer}>
      <Grid container spacing={3}>
        {photos.map((photo) => (
          <Grid item key={photo.id} xs={12} sm={6} md={4}>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}>
              <Card style={styles.photoCard}>
                <CardMedia
                  component='img'
                  image={photo.thumbnailUrl}
                  alt={photo.title}
                  style={styles.photo}
                />
                <CardContent>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'>
                    {photo.title}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const styles = {
  photosContainer: {
    padding: '20px',
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  photoCard: {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  photo: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
  },
};

export default Photos;
