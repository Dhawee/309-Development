export interface LandOffering {
  id: string;
  name: string;
  tagline: string;
  category: 'Agricultural' | 'Leisure & Resort';
  description: string;
  fullDescription: string;
  image: string;
  status: 'Pre-Launch / Active' | 'Pre-Launch' | 'Coming Soon';
  pricing: {
    plot: {
      outright: string;
      installment: string;
      deposit: string;
      depositNote?: string;
    };
    acre: {
      outright: string;
      installment: string;
      deposit: string;
      depositNote?: string;
    };
    hectare: {
      outright: string;
      installment: string;
      deposit: string;
      depositNote?: string;
    };
  };
  features: string[];
  allocationNotes: string;
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  motto: string;
  location: string;
  landmarks: string[];
  titleStatus: string;
  status: string;
  brochurePdfUrl: string;
  faqPdfUrl: string;
  offerings: LandOffering[];
  infrastructure: {
    title: string;
    description: string;
    icon: string;
  }[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  bankDetails: {
    bankName: string;
    accountName: string;
    accountNumber: string;
    note: string;
  };
  faqs: {
    question: string;
    answer: string;
    category?: string;
  }[];
}

export const VAR_PROJECT: ProjectData = {
  id: 'verdant-acres-resort',
  title: 'Verdant Acres & Resort (VAR)',
  subtitle: 'A premier land development & agrotourism resort concept by 309 Development Ltd.',
  motto: 'Turning spaces into assets.',
  location: 'Alabata, Abeokuta, Ogun State, Nigeria',
  landmarks: [
    'Federal University of Agriculture, Abeokuta (FUNAAB)',
    'Federal College of Education, Osiele, Abeokuta'
  ],
  titleStatus: 'C of O in View',
  status: 'Pre-Launch Phase',
  brochurePdfUrl: '/assets/VAR_Brochure.pdf',
  faqPdfUrl: '/assets/VAR_Form_and_FAQ.pdf',
  offerings: [
    {
      id: 'verdant-vine',
      name: 'Verdant Vine',
      tagline: 'Structured Agricultural Land Investment',
      category: 'Agricultural',
      description: 'An institutional-grade agricultural land offering structured for long-term farm development, high-yield agrarian productivity and capital appreciation.',
      fullDescription: 'Verdant Vine is strategically situated in the fertile agricultural corridor of Alabata, Abeokuta. Designed for forward-thinking agricultural investors and syndicates, Verdant Vine provides fertile topography, secure demarcations, and farm infrastructure support to ensure sustainable commercial yields and asset security.',
      image: '/assets/design_3.png',
      status: 'Pre-Launch / Active',
      pricing: {
        plot: {
          outright: '₦650,000',
          installment: '₦800,000',
          deposit: '₦200,000',
          depositNote: 'Approved brochure deposit figure: ₦200,000'
        },
        acre: {
          outright: '₦3,600,000',
          installment: '₦4,500,000',
          deposit: '₦500,000',
          depositNote: 'Approved brochure deposit figure: ₦500,000'
        },
        hectare: {
          outright: '₦9,000,000',
          installment: '₦11,000,000',
          deposit: '₦2,000,000',
          depositNote: 'Approved brochure deposit figure: ₦2,000,000'
        }
      },
      features: [
        'Dedicated Farm Barn infrastructure',
        'Central borehole water network access',
        'Zoned perimeter security & access points',
        'Survey & documentation included in purchase structure',
        'Farm setup assistance upon client request'
      ],
      allocationNotes: 'Physical allocation is scheduled upon completion of full payment. Documentation issued includes Contract of Sale, followed by Allocation Letter, Survey Plan, and Deed of Assignment.'
    },
    {
      id: 'verdant-leisure',
      name: 'Verdant Leisure',
      tagline: 'Resort & Lifestyle Land Offering',
      category: 'Leisure & Resort',
      description: 'A serene eco-resort and recreation parcel development designed for hospitality investors, retreats, country homes and eco-tourism projects.',
      fullDescription: 'Verdant Leisure integrates lush nature with master-planned tourism and lifestyle developments. Whether establishing a boutique country resort, vacation lodge, or wellness retreat, Verdant Leisure offers an unmatched scenic setting with access to regional economic and educational hubs.',
      image: '/assets/design_2.png',
      status: 'Pre-Launch / Active',
      pricing: {
        plot: {
          outright: '₦800,000',
          installment: '₦1,000,000',
          deposit: '₦500,000',
          depositNote: 'Brochure indicates ₦500k deposit; subject to final contract schedule'
        },
        acre: {
          outright: '₦4,500,000',
          installment: '₦4,800,000',
          deposit: '₦500,000',
          depositNote: 'Brochure indicates ₦500k initial deposit; pending final schedule confirmation'
        },
        hectare: {
          outright: '₦11,000,000',
          installment: '₦12,000,000',
          deposit: '₦500,000',
          depositNote: 'Brochure indicates ₦500k initial deposit; pending final schedule confirmation'
        }
      },
      features: [
        'Scenic landscape ideal for hospitality & country villas',
        'Perimeter security & master-planned road access',
        'Access to communal water infrastructure',
        'Comprehensive documentation & registered layout',
        'Direct proximity to Abeokuta metro corridor'
      ],
      allocationNotes: 'Allocation is communicated upon complete settlement of land and documentation fees. All inclusive terms subject to standard developer agreements.'
    }
  ],
  infrastructure: [
    {
      title: 'Perimeter Security',
      description: 'Controlled access gates and estate patrol protocols ensuring complete peace of mind.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Central Borehole',
      description: 'Continuous industrial-capacity water supply serving agricultural and residential parcels.',
      icon: 'Droplets'
    },
    {
      title: 'Farm Barn & Storage',
      description: 'Centralized community storage and harvesting facilities for Verdant Vine farm holders.',
      icon: 'Warehouse'
    },
    {
      title: 'Preliminary Development',
      description: 'Engineered access corridors, grading, and demarcated boundary survey beacons.',
      icon: 'Compass'
    }
  ],
  processSteps: [
    {
      step: '01',
      title: 'Fill Subscription Form',
      description: 'Complete the verified official investor subscription form online or via your 309 Ambassador.'
    },
    {
      step: '02',
      title: 'Payment & Verification',
      description: 'Remit deposit or outright payment directly into the designated 309 Development Ltd. corporate bank account.'
    },
    {
      step: '03',
      title: 'Contract of Sale Issuance',
      description: 'Receive formal legal documentation acknowledging your subscription, payment receipt and terms.'
    },
    {
      step: '04',
      title: 'Physical Allocation & Title',
      description: 'On final settlement, receive physical site allocation, Survey Plan, Allocation Letter, and Deed of Assignment.'
    }
  ],
  bankDetails: {
    bankName: 'Designated Corporate Bank',
    accountName: '309 DEVELOPMENT LIMITED',
    accountNumber: '1312966909',
    note: 'Important: All cash payments and cheques must be issued strictly in favor of 309 DEVELOPMENT LIMITED. Do not pay into any individual agent or unverified personal account.'
  },
  faqs: [
    {
      question: 'Where is Verdant Acres & Resort (VAR) located?',
      answer: 'Verdant Acres & Resort (VAR) is located at Alabata, Abeokuta, Ogun State, in close proximity to the Federal University of Agriculture, Abeokuta (FUNAAB) and Federal College of Education, Osiele.',
      category: 'Location'
    },
    {
      question: 'What is the title on the land?',
      answer: 'The title status on Verdant Acres & Resort is currently Certificate of Occupancy in View (C of O in View). All acquisition surveys and registered developer documentation are processed in accordance with state regulations.',
      category: 'Documentation'
    },
    {
      question: 'Who are the developers behind VAR?',
      answer: 'Verdant Acres & Resort is developed and managed exclusively by 309 Development Ltd., a registered Nigerian real estate development and investment company.',
      category: 'Company'
    },
    {
      question: 'What are the approved payment plans and deposit terms?',
      answer: 'Both Verdant Vine and Verdant Leisure offer Outright (0-3 Months) and Structured (4-6 Months) payment plans. For Verdant Vine, initial deposits are ₦200,000 for a Plot, ₦500,000 for an Acre, and ₦2,000,000 for a Hectare. For Verdant Leisure, the brochure indicates a baseline deposit of ₦500,000 (subject to contractual confirmation per parcel size).',
      category: 'Pricing'
    },
    {
      question: 'What documents will I receive upon purchase?',
      answer: 'Upon subscription and initial deposit, you receive an official Payment Receipt and Contract of Sale. Upon completion of all payments (including land and documentation fees), you receive your Physical Allocation Letter, Registered Survey Plan, and Deed of Assignment.',
      category: 'Documentation'
    },
    {
      question: 'Can I resell my plot or transfer ownership?',
      answer: 'Yes. A subscriber who has fulfilled payments can resell their land. 309 Development Ltd. must be officially notified in writing. An administrative fee of ₦100,000 is payable to cover the change of ownership to the new subscriber. The new owner will also pay for their Deed of Assignment and Survey in their name.',
      category: 'Investment'
    },
    {
      question: 'What is the payment default policy?',
      answer: 'After your initial deposit, 309 Development Ltd. provides a 30-day grace period for subscribers on installment payment plans upon written notice. If default persists past this period, a 5% late penalty applies. A continuous default exceeding 3 months may lead to revocation and refund less a 40% administrative fee.',
      category: 'Investment'
    },
    {
      question: 'Can I pay into an agent’s personal bank account?',
      answer: 'Strictly No. All payments must be made directly to 309 DEVELOPMENT LIMITED’s verified corporate bank account (Account Number: 1312966909). The company accepts no liability for payments made into unauthorized private accounts.',
      category: 'Company'
    }
  ]
};

export const COMPANY_INFO = {
  name: '309 Development Ltd.',
  motto: 'Turning spaces into assets.',
  positioning: {
    plug: 'The plug.',
    guide: 'The guide.',
    voice: 'The voice of smart investment.'
  },
  description: '309 Development is a modern real estate development company focused on turning land into structured and profitable assets.',
  mission: 'To identify, develop and deliver high-value real estate opportunities that transform land into structured and profitable assets.',
  vision: 'To become a leading real estate development brand in Africa, transforming spaces into thriving and valuable communities.',
  statement: 'At 309 Development, we believe every space holds untapped potential. Our responsibility is to unlock that potential and transform it into assets that secure futures and build lasting wealth.',
  values: [
    { title: 'Integrity', desc: 'Absolute transparency in title, documentation and corporate accountability.' },
    { title: 'Innovation', desc: 'Modern spatial planning, agrotourism integration and forward-thinking asset structures.' },
    { title: 'Value Creation', desc: 'Transforming virgin land into profitable, high-yielding wealth generation engines.' },
    { title: 'Excellence', desc: 'Rigorous project delivery, professional guidance and dependable customer care.' },
    { title: 'Growth', desc: 'Fostering long-term capital appreciation for investors and expanding African communities.' }
  ],
  whyChooseUs: [
    { title: 'Verified Opportunities', desc: 'Every land parcel undergoes rigorous legal vetting, coordinate charting and title verification.' },
    { title: 'Strategic Locations', desc: 'Selected in high-growth transit corridors and institutional development belts.' },
    { title: 'Professional Guidance', desc: 'Dedicated advisory support assisting investors through acquisition, documentation, and allocation.' },
    { title: 'Long-term Asset Value', desc: 'Designed for substantial appreciation and sustainable economic productivity.' },
    { title: 'Development-focused Expertise', desc: 'Not mere brokers—hands-on developers committed to physical infrastructure delivery.' }
  ],
  contact: {
    phone: '+234 916 711 8929',
    whatsapp: '2349167118929',
    email: 'customerservice@309developmentltd.com',
    enquiriesEmail: 'customerservice@309developmentltd.com',
    ambassadorsEmail: 'customerservice@309developmentltd.com',
    address: 'Cafe One Yaba, 3rd Floor, E-Centre, 1-11 Commercial Avenue, Yaba'
  }
};
