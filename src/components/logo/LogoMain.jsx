'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

// @project
import branding from '@/branding.json';

/***************************  LOGO - MAIN  ***************************/

export default function LogoMain() {
  const theme = useTheme();
  const logoMainPath = '/assets/images/Instagram post - 3.png'  



  return logoMainPath ? (
    <CardMedia src={logoMainPath} component="img" alt="logo" sx={{ width: { xs: 82, lg: 70 } }} loading="lazy" />
  ) : (
    <Box
      className="icon-logo"
      sx={{
        width: { xs: 50.5, sm: 40, md: 24 },
        height: 2,
        position: 'relative',
        cursor: 'pointer',
        display: 'block',
        WebkitTapHighlightColor: 'transparent',
        '& svg': {
          display: 'block'
        }
      }}
    >
       
        <CardMedia src={myLogoImagePath} component="img" alt="logo" sx={{ height: 2 }} loading='lazy' />
        
       
    </Box>
  );
}
