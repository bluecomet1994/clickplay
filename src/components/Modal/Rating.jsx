import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
const labels = {
  1: 'Wake Up!',
  2: 'Try Harder!',
  3: 'Good',
  4: 'Great',
  5: 'Your Brilliant!',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating({gago}) {
  return (
    <Box>
      <Rating style={{  display: 'flex',alignItems: 'center', justifyContent: 'center',}}
      
        name="read-only"
        readOnly
        value={gago}
        precision={0.5}
        getLabelText={getLabelText}
        emptyIcon={<StarBorderOutlinedIcon style={{ color: 'white',}}  fontSize="inherit" />}
      />
      {gago !== null && (
        <Box style={{ display: 'flex',alignItems: 'center', justifyContent: 'center',color: 'white'}}>{labels[gago]}</Box>
      )}
    </Box>
  );
}
