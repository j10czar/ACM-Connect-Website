'use client';

// @next
import NextLink from 'next/link';

// @mui
// import Grid from '@mui/material/Grid2'; 
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';  

// @third-party
import { motion } from 'framer-motion';

// @project
import branding from '@/branding.json'; 
import { GraphicsCard } from '@/components/cards'; 
import ContainerWrapper from '@/components/ContainerWrapper';
// import { Copyright, FollowUS, Sitemap } from '@/components/footer';    FollowUS, Sitemap
import { Copyright } from '@/components/footer';
// import FollowUS from '@/components/footer/FollowUs';
// import Sitemap from '@/components/footer/Sitemap'; 
import LogoSection from '@/components/logo'; 
import SvgIcon from '@/components/SvgIcon'; 

import { CopyrightType } from '@/enum';
import { DOCS_URL } from '@/path'; 
import { PAGE_PATH } from '@/path';
// import { FREEBIES_URL } from '@/path'; //  
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types

/***************************  FOOTER - 7 DATA ( ) ***************************/
/*
const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
const data = [
  {
    id: 'company',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Company',
    menu: [
      {
        label: 'Why Phoenixcoded?',
        link: {
          href: 'https://blog.saasable.io/a-decade-of-expertise-the-phoenixcoded-story-and-why-you-should-trust-us',
          ...linkProps
        }
      },
      {
        label: 'About',
        link: { href: 'https://stage.saasable.io/about', ...linkProps }
      },
      {
        label: 'Contact Us',
        link: { href: '/contact', ...linkProps }
      }
    ]
  },
  {
    id: 'support',
    grid: { size: { xs: 6, sm: 'auto' } },
    title: 'Support',
    menu: [
      {
        label: 'Pricing',
        link: { href: '#' }
      },
      {
        label: 'FAQ',
        link: { href: '#' }
      },
      {
        label: 'Support',
        link: { href: branding.company.socialLink.support, ...linkProps }
      },
      {
        label: 'License Terms',
        link: { href: 'https://mui.com/store/license/', ...linkProps }
      }
    ]
  },
  {
    id: 'resources',
    grid: { size: { xs: 12, sm: 'auto' } },
    title: 'Resources',
    menu: [
      {
        label: 'Freebies',
        link: { href: FREEBIES_URL, ...linkProps }
      },
      {
        label: 'Documentation',
        link: { href: DOCS_URL, ...linkProps }
      },
      {
        label: 'Blog',
        link: { href: 'https://blog.saasable.io/', ...linkProps }
      },
      {
        label: 'Privacy Policy',
        link: { href: '/privacy-policy', ...linkProps }
      },
      {
        label: 'Refund Policy',
        link: { href: 'https://mui.com/store/customer-refund-policy/', ...linkProps }
      }
    ]
  }
];
*/

const iconProps = { color: 'text.secondary', size: 24 }; 

const usefullLinks = [
  {
    icon: <SvgIcon name="tabler-sparkles" {...iconProps} />,
    title: 'Documentation',
     href: DOCS_URL
  },
  {
    icon: <SvgIcon name="tabler-shield-lock" {...iconProps} />,
    title: 'Privacy Policy',
    href: PAGE_PATH.privacyPolicyPage
  }
];

/***************************  FOOTER - 7 ***************************/

export default function Footer7() {
  const instagramUrl = branding.company.socialLink.instagram || '#'; 

  /* //   
  const logoFollowContent = (
    <Stack sx={{ alignItems: 'flex-start', gap: { xs: 1.5, sm: 3 } }}>
      <LogoSection />
      <Typography variant="h6" sx={{ maxWidth: { sm: 280 }, mb: { xs: -1, sm: -2.5 } }}>
        {process.env.NEXT_PUBLIC_VERSION}
      </Typography>
      <Typography variant="body2" sx={{ maxWidth: { sm: 280 } }}>
        Explore the different versions of our SaasAble template.
      </Typography>
    </Stack>
  );
  */

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack id="footer-7" role="contentinfo" aria-label="Footer 7" sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
        {/* --- Top Section (Logo Only) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4
          }}
        >
          {/* <Stack direction="row" justifyContent="space-between" alignItems="center"> Adjust layout */}
             {/* <LogoSection sx={{ height: 'auto' }} /> Ensure logo scales */}
          {/* </Stack> */}

          {/*
          <Grid container spacing={{ xs: 4, md: 3 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack direction={{ sm: 'row', md: 'column' }} sx={{ gap: 3, justifyContent: 'space-between', height: 1 }}>
                {logoFollowContent} // Original logo/text section
                <Stack sx={{ gap: { xs: 2, sm: 2.5, md: 3 } }}>
                  {usefullLinks.map((item, index) => ( // Original useful links rendering
                    <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }} key={index}>
                      {item.icon}
                      <Link
                        component={NextLink}
                        variant="body2"
                        color="text.secondary"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Usefull Links"
                      >
                        {item.title}
                      </Link>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Sitemap list={data} isMenuDesign /> // Original Sitemap
            </Grid>
          </Grid>
          */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.4 
          }}
        >
          <GraphicsCard sx={{ borderRadius: { xs: 6, sm: 8 } }}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }} 
              sx={{
                width: 1,
                alignItems: 'center',
                justifyContent: 'space-between', 
                gap: { xs: 2, sm: 1.5 },
                py: { xs: 2, sm: 1.5 },
                px: { xs: 2, sm: 3 }
              }}
            >
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width: {xs: 1, sm: 'auto'}}}>
                <LogoSection sx={{ height: 'auto' }} />
              </Stack>

              <Copyright type={CopyrightType.TYPE3} />

              <Stack direction="row" spacing={2} alignItems="center">
                 <Link
                    component={NextLink}
                    href={DOCS_URL} 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Documentation"
                    sx={{
                      lineHeight: 0, 
                      color: 'text.secondary',
                      '&:hover': { color: 'text.primary' }
                    }}
                  >
                    <SvgIcon name="tabler-book" {...iconProps} />
                  </Link>

                  <Link
                    component={NextLink}
                    href={PAGE_PATH.privacyPolicyPage}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Privacy Policy"
                    sx={{
                      lineHeight: 0,
                      color: 'text.secondary',
                      '&:hover': { color: 'text.primary' }
                    }}
                  >
                    <SvgIcon name="tabler-shield-lock" {...iconProps} />
                  </Link>

                 <Link
                    component={NextLink}
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Instagram page"
                    sx={{
                      lineHeight: 0, 
                      color: 'text.secondary',
                      '&:hover': { color: 'text.primary' }
                    }}
                  >
                    <SvgIcon name="tabler-brand-instagram" {...iconProps} />
                  </Link>
              </Stack>

            </Stack>
          </GraphicsCard>
        </motion.div>
      </Stack>
    </ContainerWrapper>
  );
}
