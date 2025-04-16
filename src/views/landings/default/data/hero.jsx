// @mui
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

export const hero = {
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          Created by
        </Typography>
        <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main' }}>
              🐊 ACM at Univeristy of Florida
            </Typography>
          }
          sx={{ height: 24, bgcolor: 'primary.lighter', mr: -1, ml: 0.75, '& .MuiChip-label': { px: 1.25 } }} 
        />
      </>
    )
  },
  headLine: 'An Internship Solution for Students by Students',
  captionLine: 'ACM Connect is a Discord bot that instantly notifies students about the latest internship opportunities, helping them stay ahead in their career search.',
  primaryBtn: { children: 'Get Started', href: "https://airtable.com/appHWEk24suVUfw7b/pag7ZEEWc97aHfmEp/form" },
  //videoSrc: 'https://d2elhhoq00m1pj.cloudfront.net/saasable-intro.mp4',
  videoThumbnail: '/assets/videos/thumbnails/Promo.png',
  listData: [
    { image: '/assets/images/shared/react.svg', title: 'React' },
    { image: '/assets/images/shared/next-js.svg', title: 'Next.js' },
    { image: '/assets/images/shared/aws.png', title: 'Amazon AWS' },
    { image: '/assets/images/shared/typescript.svg', title: 'TypeScript' },
    { image: '/assets/images/shared/python.png', title: 'Python' },
    { image: '/assets/images/shared/figma.svg', title: 'Figma' }
  ]
};
