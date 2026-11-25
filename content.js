// All portfolio content lives here. Edit this file to update the site.
// Content is drawn only from the candidate's resume and LinkedIn profile.

export const profile = {
  name: 'Anagha Mary Valluvassery George',
  shortName: 'Anagha George',
  title: 'Master of Pharmaceutical Science | HPLC method development and validation',
  headline:
    'I validate HPLC methods and test how long medicines stay stable.',
  positioning:
    'Master of Pharmaceutical Science graduate seeking QC Analyst, Laboratory Analyst or Quality Assurance roles in pharmaceutical manufacturing and analytical testing.',
  description:
    'Portfolio of Anagha George, Master of Pharmaceutical Science graduate (University of Tasmania) with HPLC method validation and pharmaceutical stability testing experience.',
  location: 'Tasmania, Australia',
  availability: 'Full Australian working rights. Open to relocating within Australia.',
  email: 'anaghageorge24@gmail.com',
  phone: '0405 561 651',
  linkedin: 'https://www.linkedin.com/in/anagha-maryvalluvassery-george-12b83840a',
  cv: '/Anagha_George_CV.pdf',
};

export const glance = {
  label: 'Thesis assay at a glance',
  items: [
    { value: '48', label: 'triplicate samples prepared and analysed' },
    { value: 'R² > 0.999', label: 'linearity, 3.125–50 µg/mL' },
    { value: '2.83% / 5.38%', label: 'intra-day / inter-day precision (RSD)' },
    { value: '> 95%', label: 'of initial concentration kept for 48 h' },
  ],
};

export const about = {
  paragraphs: [
    'I graduated from the University of Tasmania with a Master of Pharmaceutical Science in 2025. My thesis was an independent stability study in which I developed and validated a reversed-phase HPLC-DAD assay to ICH guidelines, then used it to track prednisolone solutions over seven days.',
    'I have also trained in aseptic cell culture and bioassays, and spent three months as a QC intern running routine water-quality tests at a petrochemical plant. I work to documented SOPs and keep records in line with Good Documentation Practice and Data Integrity principles.',
    'Beyond QC and laboratory analysis, I am interested in clinical research, drug development and regulatory sciences.',
  ],
  facts: [
    { label: 'Based in', value: 'Tasmania, Australia' },
    { label: 'Looking for', value: 'QC Analyst, Laboratory Analyst, Quality Assurance' },
    { label: 'Sector', value: 'Pharmaceutical manufacturing or analytical testing' },
    { label: 'Work rights', value: 'Full Australian working rights' },
    { label: 'Relocation', value: 'Open within Australia' },
  ],
};

export const featured = {
  name: 'Stability of prednisolone in allergy diagnosis',
  type: "Master's research thesis, University of Tasmania, 2025",
  problem:
    'Prednisolone solutions used in allergy diagnosis are prepared extemporaneously. This study tested how long they stay stable under different dilution, container and storage conditions.',
  approach:
    'Two concentrations (0.5 and 0.05 mg/mL) in two diluents (Water for Injection BP, 0.9% sodium chloride BP), two container types (plastic syringes, glass vials) and two storage temperatures. Samples were analysed at baseline, 24 h, 48 h and 7 days.',
  contribution: [
    'Planned and carried out the whole study independently, preparing and analysing 48 triplicate samples.',
    'Developed and validated a reversed-phase HPLC-DAD assay to ICH guidelines (linearity, intra-day and inter-day precision).',
    'Assessed physical stability by visual inspection, light microscopy, calibrated pH measurement and UV-Visible spectrophotometry.',
    'Wrote the full thesis, including a literature review and a journal-style manuscript.',
  ],
  outcome: [
    'Validation met the predefined protocol acceptance criteria.',
    'Solutions kept more than 95% of their initial concentration for 48 hours in every condition tested.',
    'Refrigerated Water for Injection in glass vials performed best, supporting short-term advance preparation of skin-test solutions.',
    'No precipitation or particulate formation was seen over 7 days.',
  ],
  tools: [
    'HPLC-DAD (Thermo Dionex UltiMate 3000)',
    'Chromeleon 7.3.1',
    'C18 reversed-phase',
    'ICH validation',
    'UV-Visible spectrophotometry',
    'Light microscopy',
    'Microsoft Excel',
  ],
};

export const coursework = [
  {
    name: 'Paracetamol dissolution testing',
    summary: 'Compared paracetamol release from three tablet types by HPLC-UV.',
    details: [
      'Quantified release using duplicate standard curves (1.25–20 µg/mL) across five time points from 5 to 30 minutes.',
      'Calculated the percentage dissolved at each time point.',
    ],
    tools: ['HPLC-UV', 'Standard curves', 'Dissolution testing'],
  },
  {
    name: 'Ciprofloxacin photodegradation',
    summary: 'Measured how much ciprofloxacin remained after UV exposure.',
    details: [
      'Exposed 2 mg/mL ciprofloxacin solutions to short-wavelength UV light at 23 °C.',
      'Quantified remaining drug over time with an 11-point triplicate standard curve (0.12–125 µg/mL).',
      'Reported the percentage remaining as mean ± SD.',
    ],
    tools: ['HPLC-UV', 'Forced degradation', 'Triplicate calibration'],
  },
  {
    name: 'Stability of co-trimoxazole dilutions',
    summary: 'Evaluated trimethoprim and sulfamethoxazole across four dilution ratios.',
    details: [
      'Tested dilution ratios from 1:10 to 1:25 v/v.',
      'Concentrations stayed at 98–101% of initial over 4 hours.',
      'Assessed particulate counts by microscopy against positive and negative controls.',
    ],
    tools: ['HPLC', 'Light microscopy', 'Stability testing'],
  },
  {
    name: 'Heparin studies',
    summary: 'Profiled heparin elution and measured its activity.',
    details: [
      'Profiled heparin elution by flame photometry and HPLC.',
      'Ran a timed antithrombin/Factor Xa activity assay at 37 °C.',
    ],
    tools: ['Flame photometry', 'HPLC', 'Enzymatic assay'],
  },
];

export const experience = [
  {
    role: 'Master’s research thesis',
    org: 'University of Tasmania, Australia',
    period: '2025',
    group: 'Research',
    bullets: [
      'Designed and ran an independent multi-condition stability study of prednisolone solutions, from sample preparation to written thesis.',
      'Developed and validated the HPLC-DAD assay to ICH guidelines.',
      'Showed that refrigerated Water for Injection in glass vials gave the best stability.',
    ],
  },
  {
    role: 'QC intern, water analysis',
    org: 'Hindustan Organic Chemicals Ltd, Ambalamugal, Kerala, India',
    period: '2021, 3 months',
    group: 'Laboratory',
    bullets: [
      'Performed over 15 routine water-quality tests daily, including pH, conductivity and turbidity.',
      'Carried out titrations and spectrophotometric analyses as part of daily quality control testing.',
      'Recorded and assessed test results in line with site procedures at a petrochemical plant.',
    ],
  },
  {
    role: 'Food and beverage supervisor',
    org: 'Ibis Styles Hotel, Hobart, Tasmania',
    period: 'December 2024 to present',
    group: 'Additional employment',
    bullets: [
      'Supervise shift staff and deliver customer service in a fast-paced environment, with a focus on reliability, clear communication, teamwork and time management.',
    ],
  },
];

export const skills = [
  {
    group: 'Chromatography',
    items: [
      'HPLC-DAD (Dionex UltiMate 3000)',
      'Reversed-phase C18 method development (ACE, Kinetex)',
      'Isocratic mobile phase preparation',
      'Multi-point calibration curves',
      'Ion-exchange chromatography',
      'Assay of actives and excipients',
    ],
  },
  {
    group: 'Method validation (ICH)',
    items: ['Linearity', 'Accuracy', 'Intra-day and inter-day precision (%RSD)', 'Reproducibility', 'LOD, LOQ and robustness (familiar)'],
  },
  {
    group: 'Stability testing',
    items: ['Multi-condition study design', 'Chemical and physical stability', '% recovery calculations', 'ICH stability and forced degradation principles'],
  },
  {
    group: 'Pharmaceutical lab practice',
    items: [
      'Extemporaneous preparations',
      'Equipment pre-use checks and calibration',
      'Dissolution testing with HPLC quantification',
      'Accurate dilutions and microlitre pipetting',
      'Timed enzyme-based assays',
    ],
  },
  {
    group: 'Instrumental analysis',
    items: ['UV-Visible microplate spectrophotometry (Multiskan GO)', 'Light microscopy', 'Calibrated pH measurement', 'Titration, conductivity, turbidity', 'Flame photometry'],
  },
  {
    group: 'Cell culture and bioassays',
    items: ['Aseptic technique', 'Mammalian cell culture', 'Cell-free, cell-based and enzymatic assays', 'Histological tissue analysis'],
  },
  {
    group: 'Quality and compliance',
    items: ['ICH guidelines', 'British Pharmacopoeia (BP) awareness', 'Good Documentation Practice (GDP)', 'Data Integrity principles', 'Contamination control', 'Laboratory safety and chemical waste handling'],
  },
  {
    group: 'Software and data',
    items: ['Chromeleon 7.3.1', 'Microsoft Excel (regression, standard curves, error-bar charts)', 'Literature review', 'Scientific writing'],
  },
];

export const education = [
  {
    award: 'Master of Pharmaceutical Science',
    school: 'University of Tasmania, Australia',
    period: 'February 2024 to November 2025',
  },
  {
    award: 'Bachelor of Science, Industrial Chemistry',
    school: 'Mahatma Gandhi University, India (St. Paul’s College, Kalamassery)',
    period: '2019 to 2022',
  },
];
