// @project
import SvgIcon from '@/components/SvgIcon';
import { DOCS_URL } from '@/path';

export const integration = {
  headLine: 'Credits',
  captionLine: 'Meet the team that made this amazing project possible.',
  primaryBtn: {
    children: 'Learn more',
    startIcon: <SvgIcon name="tabler-help" color="background.default" />,
    href: DOCS_URL,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  tagList: [
    { label: 'Jason Tenczar' },
    { label: 'Alex Fisher' },
    { label: 'Steve Sajeev' },
    { label: 'Tanmay Saxena' },
    { label: 'Devan Parketh' },
    { label: 'Mukul Vinoid' },
    { label: 'Jacob Frankel' },
    
  ]
};
