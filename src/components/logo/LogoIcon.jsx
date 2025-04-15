'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

// @project
// import branding from '@/branding.json';

/***************************  LOGO - ICON  ***************************/

export default function LogoIcon() {
  const theme = useTheme();
  const myLogoImagePath = '/assets/images/shared/ACMConnect-icon.png'

  return (
    <Box
      className="icon-logo"
      sx={{
        width: { xs: 19.5, sm: 22, md: 24 },
        height: 1,
        position: 'relative',
        cursor: 'pointer',
        display: 'block',
        WebkitTapHighlightColor: 'transparent',
        '& svg': {
          display: 'block'
        }
      }}
    >
       
        <CardMedia src={myLogoImagePath} component="img" alt="logo" sx={{ height: 1 }} loading='lazy' />
        
       
    </Box>
  );
} 
