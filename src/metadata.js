// @project
import branding from '@/branding.json';
import { PAGE_PATH, SECTION_PATH } from '@/path';

/***************************  SEO METADATA - MAIN LAYOUT  ***************************/

const title = `${branding.brandName} ${branding.title}`;
const description = `ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.`;

const ogCommonMetadata = {
  locale: 'en_US',
  type: 'website',
  siteName: `${branding.brandName}`,
  images: '/assets/images/metadata/og.png' // recommended dimensions of 1200x630
};

export const mainMetadata = {
  title: {
    template: `%s | ${title}`,
    default: title // a default is required when creating a template
  },
  description,
  applicationName: title,
  keywords: [
    'Internship',
    `${branding.brandName}`,
    'Discord bot',
    'ACM',
    'aws',
    'university of florida'
  ],
  creator: `${branding.company.name}`,
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE || 'http://localhost:3000'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title,
    description,
    url: '/',
    ...ogCommonMetadata
  }
};

/***************************  SEO METADATA - SECTIONS  ***************************/

const sectionCommonMeta = {
  title: 'Blocks',
  description:
    'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration'
};

const aboutPageCommonMeta = {
  title: 'About',
  description:
    'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration'
};

const careerPageCommonMeta = {
  title: 'Career',
  description:
    'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration'
};

const faqPageCommonMeta = {
  title: 'FAQ',
  description:
    'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration'
};

const pricingPageCommonMeta = {
  title: 'Pricing',
  description:
    'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration'
};

const comingSoonPageCommonMeta = { title: 'Coming soon', description: 'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.' };

const privacyPolicyCommonMeta = {
  title: 'Privacy Policy',
  description:
    'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration'
};

const contactUsCommonMeta = {
  title: 'Contact US',
  description:
    'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration'
};

const error404PageCommonMeta = { title: 'Error 404', description: 'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.' };
const error500PageCommonMeta = { title: 'Error 500', description: 'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.' };

const underMaintenanceCommonMeta = {
  title: 'Under Maintenance',
  description:
    'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration'
};

export const SEO_CONTENT = {
  section: { sectionCommonMeta, openGraph: { ...sectionCommonMeta, ...ogCommonMetadata, url: SECTION_PATH } },
  aboutPage: { aboutPageCommonMeta, openGraph: { ...aboutPageCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.aboutPage } },
  careerPage: { careerPageCommonMeta, openGraph: { ...careerPageCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.careerPage } },
  faqPage: { faqPageCommonMeta, openGraph: { ...faqPageCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.faqPage } },
  pricingPage: { pricingPageCommonMeta, openGraph: { ...pricingPageCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.pricingPage } },
  comingSoonPage: { comingSoonPageCommonMeta, openGraph: { ...comingSoonPageCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.comingSoon } },
  privacyPolicy: {
    privacyPolicyCommonMeta,
    openGraph: { ...privacyPolicyCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.privacyPolicyPage }
  },
  contactUs: { contactUsCommonMeta, openGraph: { ...contactUsCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.contactPage } },
  error404Page: { error404PageCommonMeta, openGraph: { ...error404PageCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.error404 } },
  error500Page: { error500PageCommonMeta, openGraph: { ...error500PageCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.error500 } },
  underMaintenance: {
    underMaintenanceCommonMeta,
    openGraph: { ...underMaintenanceCommonMeta, ...ogCommonMetadata, url: PAGE_PATH.underMaintenance }
  },

  about: {
    title: 'About Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  benefit: {
    title: 'Benefits Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  forgotPassword: {
    title: 'Forgot Password Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  login: {
    title: 'Login Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  newPassword: {
    title: 'New Password Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  otpVerification: {
    title: 'OTP Verification Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  register: {
    title: 'Register Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  clientele: {
    title: 'Clientele Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  blog: {
    title: 'Blog Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  color: {
    title: 'Color',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  comingSoon: {
    title: 'Coming Soon Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  cookie: {
    title: 'Cookie Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  cta: {
    title: 'Call to Action Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  earlyAccess: {
    title: 'Early Access Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  error404: {
    title: 'Error 404 Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  error500: {
    title: 'Error 500 Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  faq: {
    title: 'FAQ Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  feature: {
    title: 'Feature Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  footer: {
    title: 'Footer Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  gallery: {
    title: 'Gallery Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  hero: {
    title: 'Hero Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  icon: {
    title: 'Icon',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  integration: {
    title: 'Integration Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  megaMenu: {
    title: 'Mega Menu Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  navbar: {
    title: 'Navbar Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  onBoard: {
    title: 'Onboard Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  other: {
    title: 'Other',
    description: 'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  pricing: {
    title: 'Pricing Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  process: {
    title: 'Process Sections',
    description:
      'acm connect! woo hoo'
  },

  smallHero: {
    title: 'Small Hero Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  team: {
    title: 'Team Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  testimonial: {
    title: 'Testimonial Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  termsCondition: {
    title: 'Terms Condition',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  topOffer: {
    title: 'Top Offer Sections',
    description:
      'ACM Connect is a student-built Discord bot from the University of Florida Association for Computing Machinery that delivers daily internship opportunities directly to your server. Stay ahead in your career search with easy integration.'
  },

  typography: {
    title: 'Typoghaphy',
    description:
      'Try again.'
  }
};
