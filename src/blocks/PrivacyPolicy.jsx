'use client';
import { useEffect, useState } from 'react';

// @mui
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';

// Helper functions for scrollspy
const clamp = (value) => Math.max(0, value);
const isBetween = (value, floor, ceil) => value >= floor && value <= ceil;

/***************************  HOOKS - SCROLLSPY  ***************************/

function useScrollspy(ids, offset = 0) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      setActiveId(position?.id || '');
    };

    window.addEventListener('scroll', listener);
    window.addEventListener('resize', listener);
    listener(); // Initial call to set the activeId

    return () => {
      window.removeEventListener('scroll', listener);
      window.removeEventListener('resize', listener);
    };
  }, [ids, offset]);

  return activeId;
}

/***************************  PRIVACY POLICY - DATA  ***************************/

const menuItems = [
  {
    id: 'introduction',
    heading: 'Introduction',
    caption:
      'ACM Connect is a Discord bot designed to notify students about internship opportunities. This privacy policy explains what information we collect, how it’s used, and your rights regarding your data.'
  },
  {
    id: 'changes-to-terms',
    heading: 'Changes to Terms',
    caption:
      'We reserve the right to modify or replace these terms at our sole discretion. It is your responsibility to check these terms periodically for changes. Your continued use of the website after the posting of any changes constitutes acceptance of those changes.'
  },
  {
    id: 'user-conduct',
    heading: 'User Conduct',
    caption:
      'You agree to use this website only for lawful purposes and in a manner consistent with all applicable local, national, and international laws and regulations.'
  },
  {
    id: 'intellectual-property',
    heading: 'Intellectual Property',
    caption:
      'All content on this website, including but not limited to text, graphics, logos, images, audio clips, video clips, digital downloads, and data compilations, is the property of UF ACM or its content suppliers and protected by international copyright laws.'
  },
  {
    id: 'information-we-collect',
    heading: 'Information We Collect',
    caption:
      'The only information collected by ACM Connect is the Discord server ID, channel ID, and role ID used during bot setup. We do not collect any personal user data or messages.'
  },
  {
    id: 'information-use',
    heading: 'How We Use Your Information',
    caption:
      'This information is used exclusively to deliver internship alerts to the correct server channel and role. It allows the bot to function as intended within your community.'
  },
  {
    id: 'data-sharing',
    heading: 'Data Sharing',
    caption:
      'ACM Connect is hosted on Amazon Web Services (AWS), and your data is securely stored and processed through their infrastructure. No data is sold or shared with third parties beyond what is required for hosting and bot operations.'
  },
  {
    id: 'data-retention',
    heading: 'Data Retention',
    caption:
      "Data is stored only while ACM Connect remains active in your server. Once the bot is removed, all related data is automatically deleted."
  },
  {
    id: 'security',
    heading: 'Security',
    caption:
      'Access control measures are in place to protect server data and prevent unauthorized access.'
  },
  {
    id: 'user-rights',
    heading: 'User Rights',
    caption:
      'If you would like your servers data to be manually deleted, you may request removal at any time by submitting a request through the Feedback & Bug Report Form.'
  },
  {
    id: 'contact-info',
    heading: 'Contact Information',
    caption:
      'For any questions or concerns about this policy, please use the Feedback & Bug Report Form to get in touch with our team.'
  }
];

/***************************  SECTIONS - PRIVACY POLICY  ***************************/

export default function PrivacyPolicyPage() {
  const ids = menuItems.map((item) => item.id);

  // Adjust offset as per header height
  const activeId = useScrollspy(ids, 60);
  const [selectedID, setSelectedID] = useState(activeId);

  useEffect(() => {
    if (activeId) {
      setSelectedID(activeId);
    }
  }, [activeId]);

  return (
    <ContainerWrapper sx={{ pb: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid size={{ xs: 12, sm: 4, md: 3 }}>
          <List component="div" sx={{ position: 'sticky', top: 20 }} disablePadding>
            {menuItems.map((item, index) => (
              <ListItemButton
                key={index}
                href={`#${item.id}`}
                sx={{
                  py: 1.25,
                  px: 1.5,
                  borderRadius: 3,
                  mb: 0.75,
                  ...(selectedID === item.id && { color: 'primary.main', bgcolor: 'grey.100' }),
                  '&:hover': { bgcolor: 'grey.50' }
                }}
                onClick={() => setSelectedID(item.id)}
              >
                <ListItemText primary={item.heading} primaryTypographyProps={{ variant: 'subtitle1' }} sx={{ my: 0 }} />
              </ListItemButton>
            ))}
          </List>
          <Divider sx={{ display: { xs: 'block', sm: 'none' } }} />
        </Grid>
        <Grid size={{ xs: 12, sm: 8, md: 9 }}>
          {menuItems.map((item, index) => (
            <Stack
              key={index}
              id={item.id}
              sx={{ py: { xs: 1, sm: 1.5, md: 3 }, px: { md: 3 }, gap: 1, '&:first-of-type': { pt: { sm: 0 } } }}
            >
              <Typography variant="h4">{item.heading}</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {item.caption}
              </Typography>
            </Stack>
          ))}
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}
