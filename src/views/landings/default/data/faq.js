// @project
import branding from '@/branding.json';

export const faq = {
  heading: 'Frequently Asked Questions',
  caption: `Answers to common questions about ${branding.brandName}.`,
  defaultExpanded: 'Fees & Charges',
  faqList: [
    {
      question: `How do I get early access?`,
      answer: `Fill out our beta request form. If selected, you’ll receive a beta key and setup instructions.`,
      category: 'General'
    },
    {
      question: `Is ACM Connect free to use?`,
      answer: `Yes! During the beta phase, access is completely free for selected organizations.`,
      category: 'General'
    },
    {
      question: `Can we customize alerts?`,
      answer: {
        content: `Yes! You can filter opportunities by roles, locations, and experience levels based on your server’s needs coming soon!`,
        type: 'list',
        data: [
          { primary: 'Freshman and Sophomore Internships' },
          { primary: 'New Grad Roles' },
          { primary: 'Traditional Internships' }
        ]
      },
      category: 'General'
    },
    {
      question: `What are the requirements to be accepted for the beta?`,
      answer:
        'We’re prioritizing ACM chapters and University of Florida organizations for first access. Any student-led organization with an active Discord server focused on tech, career development, or student engagement is encouraged to apply. Preference is given to groups that can offer feedback during the beta.',
      category: 'General'
    },

    {
      question: 'How can I provide feedback during the beta?',
      answer: {
        content:
          'You can submit feedback or bug reports through our feedback form. We review every submission to improve the bot throughout the beta.',
        type: 'list',
        data: [{ primary: `Link: https://airtable.com/appHWEk24suVUfw7b/pagM1QMhQG1WAs3lC/form` },]
      },
      category: 'Support & Updates'
    },
    {
      question: 'When is official release available?',
      answer: 
          'The official release of ACM Connect is planned for Mid Fall 2025. Stay tuned for updates and announcements!',
      category: 'Support & Updates'
    }
  ],
  getInTouch: {
    link: { children: 'Get in Touch', href: "https://airtable.com/appHWEk24suVUfw7b/pagM1QMhQG1WAs3lC/form", target: '_blank', rel: 'noopener noreferrer' }
  },
  categories: ['General', 'Support & Updates'],
  activeCategory: 'General'
};
