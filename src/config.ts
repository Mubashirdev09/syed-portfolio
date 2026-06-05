const getEnv = (key: string, fallback: string = ''): string => {
  return import.meta.env[key] ?? fallback;
};

export const siteConfig = {
  url: getEnv('SITE_URL', 'https://example.com'),
  language: getEnv('SITE_LANGUAGE', 'en'),

  title: getEnv('SITE_TITLE', 'Syed Abdul Rahman | Data Engineering Portfolio'),

  description: getEnv(
    'SITE_DESCRIPTION',
    'Portfolio of Syed Abdul Rahman, a data engineering candidate building cloud-based ETL pipelines, analytics systems, and automation workflows.'
  ),

  author: {
    name: getEnv('SITE_AUTHOR_NAME', 'Syed Abdul Rahman'),

    title: getEnv('SITE_AUTHOR_TITLE', 'Data Engineering Candidate'),

    bio: getEnv(
      'SITE_AUTHOR_BIO',
      'Data engineering candidate with a Master’s in Computer Science from Lakehead University and a PG Diploma in Artificial Intelligence from Durham College. Builds cloud-based data pipelines and analytics systems focused on reliability, structure, and decision-ready outputs.'
    ),

    email: getEnv('SITE_AUTHOR_EMAIL', 'rahmanksa2001@gmail.com'),

    location: getEnv('SITE_AUTHOR_LOCATION', 'Ontario, Canada'),
  },

  social: {
    github: getEnv('SOCIAL_GITHUB', 'https://github.com/Mubashirdev09'),
    linkedin: getEnv('SOCIAL_LINKEDIN', 'https://www.linkedin.com/in/rahman09/'),
    twitter: getEnv('SOCIAL_TWITTER', ''),
    mastodon: getEnv('SOCIAL_MASTODON', ''),
    bluesky: getEnv('SOCIAL_BLUESKY', ''),
  },

  nav: [
    { label: 'Projects', href: '/projects' },
    { label: 'Journey', href: '/journey' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
export type SocialLinks = typeof siteConfig.social;
export type NavItem = typeof siteConfig.nav[number];