/*
  HOW TO EDIT THIS FILE
  ---------------------
  This file is NOT HTML.
  It is also NOT a WYSIWYG editor.

  Think of it as a structured form:
  - You mostly replace the text inside quotes.
  - You can change links, names, dates, and lists.
  - Keep the commas, brackets, and quotation marks.
  - You usually do NOT need to edit index.html.

  Chinese note:
  - This is not HTML.
  - It is not a drag-and-drop editor.
  - Most of the time, you only edit the text in quotes here.

  HOW TO ADD PHOTOS
  -----------------
  1. Put your PI photo into assets/img/
     Example: assets/img/yi-yang.jpg
  2. Put member photos into assets/img/members/
     Example: assets/img/members/alice-chen.jpg
  3. Update the photo path in the corresponding field below.
  4. If a photo path is empty or wrong, the site will show a placeholder image.

  HOW TO ADD STUDENT PAPERS
  -------------------------
  Under each member, you can add:
    papers: [
      { title: 'Paper title here' },
      { title: 'Paper with a link', url: 'https://example.org/paper' }
    ]

  If a paper has a real URL, the title becomes clickable.
  If there is no URL, it will stay as plain text.
*/

window.SITE_DATA = {
  meta: {
    siteTitle: 'Yi Yang Research Group',
    siteSubtitle: 'Academia Sinica · High-Energy Physics',
    footerText: 'Copyright 2026 Yi Yang Research Group. Built as an editable static site template.',
    lastUpdated: 'March 2026'
  },

  hero: {
    eyebrow: 'High-Energy Physics Group',
    title: 'Precision measurements, detectors, and data-intensive discovery in particle and astroparticle physics.',
    text: 'This template is designed for desktop and mobile, with a clean layout and a single content file that is easy to update.',
    primaryLabel: 'Browse Publications',
    secondaryLabel: 'Meet the Group'
  },

  homeAffiliations: [
    {
      icon: 'iop',
      label: 'Institute of Physics, Academia Sinica',
      subtitle: 'Official site',
      url: 'https://www.phys.sinica.edu.tw/index_en.php'
    },
    {
      icon: 'ncku',
      label: 'Department of Physics, National Cheng Kung University',
      subtitle: 'Official site',
      url: 'https://phys.ncku.edu.tw/en/'
    },
    {
      icon: 'plus',
      label: 'Future Joint Appointment',
      subtitle: 'Reserved space for another institution',
      placeholder: true
    }
  ],

  labIntro: {
    paragraphs: [
      'Use this area to introduce the laboratory as a whole. You can describe the scientific goals of the group, the environment for students, and how projects connect across experiments such as STAR, ATLAS, AMS, and ePIC.',
      'You can also mention your mentoring style, opportunities for undergraduate and graduate researchers, instrumentation work, detector development, data analysis training, or collaboration across institutes.'
    ],
    highlightsTitle: 'Lab Highlights',
    highlights: [
      {
        label: 'Research directions',
        value: 'Add your main themes here, for example collider physics, astroparticle physics, detector instrumentation, or data-intensive analysis.'
      },
      {
        label: 'Student opportunities',
        value: 'Add a short note about thesis projects, coding, detector work, analysis, summer research, or international collaboration.'
      },
      {
        label: 'Collaborative structure',
        value: 'Use this line to explain ties between Academia Sinica, NCKU, and future joint appointments.'
      }
    ]
  },

  profile: {
    name: 'Yi Yang',
    title: 'Research Fellow',
    affiliation: 'Academia Sinica',
    photo: 'assets/img/profile-placeholder.svg',
    photoAlt: 'Portrait placeholder for Yi Yang',
    details: [
      { label: 'Email', value: 'your.email@sinica.edu.tw' },
      { label: 'Office', value: 'Add office / room here' },
      { label: 'Research Areas', value: 'Add your main topics here' },
      { label: 'CV', value: 'Add your CV link in Contact below' }
    ],
    bio: [
      'Add your short introduction here. You can describe your scientific background, current research interests, and the main questions your group studies.',
      'You can also mention your collaborations, student training style, detector work, instrumentation, or analysis expertise.'
    ],
    keywords: [
      'High-Energy Physics',
      'Collider Physics',
      'Astroparticle Physics',
      'Detector Instrumentation',
      'Data Analysis'
    ]
  },

  latestNews: [
    {
      date: '2026-03-01',
      title: 'Add your latest paper title here',
      summary: 'Use this box for your newest paper, conference proceeding, detector result, or collaboration milestone.',
      links: [
        { label: 'arXiv', url: '#' },
        { label: 'Journal', url: '#' },
        { label: 'INSPIRE', url: '#' }
      ]
    }
  ],

  experiments: [
    {
      name: 'STAR',
      subtitle: 'Relativistic heavy-ion physics',
      description: 'Describe your group contribution here: analysis topics, detector work, software development, operations, or student projects.',
      role: 'Example role: data analysis, detector performance, and student supervision.',
      status: 'Active'
    },
    {
      name: 'ATLAS',
      subtitle: 'LHC collider experiment',
      description: 'Summarize the physics program or instrumentation focus relevant to your group.',
      role: 'Example role: Higgs / BSM / tracking / trigger / upgrade work.',
      status: 'Active'
    },
    {
      name: 'AMS',
      subtitle: 'Astroparticle and cosmic-ray program',
      description: 'Add a short overview of your work in cosmic rays, detector calibration, or precision measurements.',
      role: 'Example role: analysis and interpretation.',
      status: 'Active'
    },
    {
      name: 'ePIC',
      subtitle: 'Electron-Ion Collider detector program',
      description: 'This card can highlight new initiatives, detector R and D, simulation, reconstruction, or planned student involvement.',
      role: 'Example role: future detector and physics preparation.',
      status: 'Growing'
    }
  ],

  members: {
    undergraduate: [
      {
        name: 'Student A',
        photo: 'assets/img/member-placeholder.svg',
        photoAlt: 'Portrait placeholder for Student A',
        topic: 'Detector simulation and visualization',
        years: '2025-present',
        note: 'Senior undergraduate research project',
        papers: [
          { title: 'Add the student paper title here' },
          { title: 'If there is a link, add the URL here', url: '' }
        ]
      }
    ],
    masters: [
      {
        name: "Master's Student A",
        photo: 'assets/img/member-placeholder.svg',
        photoAlt: "Portrait placeholder for Master's Student A",
        topic: 'Track reconstruction performance',
        years: '2024-present',
        note: 'M.S. thesis',
        papers: [
          { title: 'Master thesis paper title or proceeding' }
        ]
      }
    ],
    doctoral: [
      {
        name: 'PhD Student A',
        photo: 'assets/img/member-placeholder.svg',
        photoAlt: 'Portrait placeholder for PhD Student A',
        topic: 'Jet quenching observables',
        years: '2023-present',
        note: 'Lead analysis role',
        papers: [
          { title: 'First-author paper title' },
          { title: 'Collaboration paper with a link', url: '' }
        ]
      }
    ],
    postdocs: [
      {
        name: 'Postdoc A',
        photo: 'assets/img/member-placeholder.svg',
        photoAlt: 'Portrait placeholder for Postdoc A',
        topic: 'Real-time reconstruction and detector operations',
        years: '2024-present',
        note: 'Cross-collaboration development',
        papers: [
          { title: 'Recent postdoctoral paper title' }
        ]
      }
    ],
    alumni: [
      {
        name: 'Alumni A',
        photo: 'assets/img/member-placeholder.svg',
        photoAlt: 'Portrait placeholder for Alumni A',
        topic: 'Now at CERN',
        years: 'PhD, 2021-2025',
        note: 'Detector upgrade program',
        papers: [
          { title: 'Graduation paper title' }
        ]
      }
    ]
  },

  publications: [
    {
      year: 2026,
      title: 'Replace with your newest publication title',
      authors: 'Yi Yang, Student A, Collaborators',
      venue: 'Journal / Collaboration note / arXiv',
      summary: 'A one-line explanation of why this paper matters or what result it reports.',
      links: [
        { label: 'arXiv', url: '#' },
        { label: 'DOI', url: '#' },
        { label: 'INSPIRE', url: '#' }
      ],
      keywords: ['latest', 'analysis', 'collider']
    },
    {
      year: 2025,
      title: 'Example publication entry two',
      authors: 'Yi Yang, PhD Student A, Collaborators',
      venue: 'Physical Review / JHEP / conference proceedings',
      summary: 'Replace with a concise summary or leave blank if you prefer a cleaner list.',
      links: [
        { label: 'DOI', url: '#' }
      ],
      keywords: ['detector', 'tracking']
    }
  ],

  mapLocations: [
    {
      name: 'Current Student A',
      type: 'current',
      role: 'PhD Student',
      place: 'Taipei, Taiwan',
      lat: 25.0330,
      lng: 121.5654,
      note: 'Primary affiliation at Academia Sinica'
    },
    {
      name: 'Alumni A',
      type: 'alumni',
      role: 'Researcher',
      place: 'Geneva, Switzerland',
      lat: 46.2044,
      lng: 6.1432,
      note: 'Now working on detector upgrades'
    }
  ],

  contact: {
    groupTitle: 'Yi Yang Research Group',
    address: 'Add your institute / building / address here',
    links: [
      { label: 'Email', url: 'mailto:your.email@sinica.edu.tw' },
      { label: 'ORCID', url: '#' },
      { label: 'Google Scholar', url: '#' },
      { label: 'CV', url: '#' },
      { label: 'Institution', url: 'https://www.phys.sinica.edu.tw/index_en.php' }
    ]
  }
};
