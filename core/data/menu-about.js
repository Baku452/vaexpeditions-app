const menuAbout = [
  {
    id: 1,
    titulo: 'Who we are',
    slug: '/about/who-we-are',
    active: true,
    submenu: [
      {
        titulo: 'About us',
        slug: '/about/who-we-are#aboutUs',
      },
      {
        titulo: 'Our Purpose',
        slug: '/about/who-we-are#ourPurpose',
      },
      {
        titulo: 'Our Philosophy',
        slug: '/about/who-we-are#OurPhilosophy',
      },
      {
        titulo: 'Our sustainability efforts',
        slug: '/about/who-we-are#travelWithPurpose',
      },
      {
        titulo: 'Our History',
        slug: '/about/who-we-are#OurHistory',
      },
      {
        titulo: 'Why Va Expeditions',
        slug: '/about/who-we-are#WhyVaExpeditions',
      },
    ],
  },
  {
    id: 2,
    titulo: 'Our people',
    slug: '/about/our-people',
    active: false,
    submenu: [
      {
        titulo: 'Our team',
        slug: '/about/our-people#OurTeam',
      },
      {
        titulo: 'LocalExperts',
        slug: '/about/our-people#LocalExperts',
      },
      {
        titulo: 'Our core values',
        slug: '/about/our-people#OurCoreValues',
      },
    ],
  },
];

export { menuAbout };
