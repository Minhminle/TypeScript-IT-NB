import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Container_WelcomeTo = () => {
  return (
    <Stack direction="row" spacing={2} sx={{backgroundColor:'#F8FBDC', color:'black', height:'600px'}}>
      {/* Bên trái */}
      <Box sx={{width:'50%'}}>
        <img
          src="/images/5.png"
          alt="Description"
          style={{ width: '125%', height: 'auto', position:'relative', top: '-170px', left: '20px'}}
        />
      </Box>

      {/* Bên phải */}
      <Box textAlign={'center'} sx={{width:'50%'}}>
        <Typography variant="h3" gutterBottom sx={{fontWeight:'bold'}}>
        Welcome to our Dhabi Restaurant
        </Typography>
        <Typography variant="body1" paragraph sx={{width:'50%', margin:'auto'}}>
        food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: '25px',
            fontStyle: 'normal',
            fontWeight: 600,
            borderRadius: '50px',
            background: '#DAE952',
            color: '#000',
            flexShrink: 0,
            marginTop: '45px',
            '&:hover': {background: '#33691e'}}}>
          Find More
        </Button>
      </Box>
    </Stack>
  );
};

export default Container_WelcomeTo;
