// @next
import NextLink from 'next/link';

// @mui
import branding from '@/branding.json';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export const cta4 = {
  headLine: 'Why Trust Phoenixcoded for Your Dashboard Template Needs?',
  primaryBtn: {
    children: 'Read Our story',
    href: 'https://blog.saasable.io/a-decade-of-expertise-the-phoenixcoded-story-and-why-you-should-trust-us',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: '250+ Author Reviews (4.65 out of 5)'
  },
  list: [
    { primary: '10+ Years Expertise' },
    { primary: '8k+ Satisfied Customers' },
    { primary: 'Elite Envato Author' },
    { primary: 'Timely Support, Guaranteed' },
    { primary: 'Regular Updates Provided' },
    { primary: 'Proven Industry Leader' }
  ],
  clientContent: 'Learn More'
};

function DescriptionLine() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      Have questions? ACM is here to help. Learn more about{' '}
      <Link component={NextLink} variant="caption2" color="primary" href="https://uf-acm.com/" underline="hover">
        our community
      </Link>
    </Typography>
  );
}

export const cta5 = {
  label: '🐊 ACM at University of Florida',
  heading: 'Connect with us on Discord',
  caption: 'Get support, share insights, and grow together.',
  primaryBtn: {
    children: 'Join Discord Community',
    href: "https://discord.gg/wcYxbcgbVN",
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  description: <DescriptionLine />,
  saleData: { count: 2.2, defaultUnit: 'k+', caption: 'Members' },
  profileGroups: {
    avatarGroups: [ 
      { avatar: '/assets/images/user/ConnectLogo.png' }
    ],
    review: 'Created by UF ACM Design Team'
  }
};

export const cta10 = {
  heading: "Couldn't find the perfect role for you?",
  caption: 'No worries – we encourage you to apply anyway! Your unique skills and talents might be just what we need.',
  primaryBtn: { children: 'Send Your Resume', href: '#' },
  secondaryBtn: { children: 'Contact Us', href: '#' },
  image: '/assets/images/graphics/ai/graphics15-light.svg',
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: '10k+ Reviews (4.5 out of 5)'
  }
};
