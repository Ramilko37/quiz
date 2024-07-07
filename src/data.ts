export interface Option {
  id: number
  text: string
  value: string
}

export interface Property {
  id: number
  name: string
  text: string
  type: 'select' | 'textarea' | 'input' | 'checkbox'
  value: string
  class: string
  readonly: number
  options: Option[]
}

export interface Button {
  id: number
  text: string
  disabled: number
}

export interface QuizQuestion {
  id: number
  title: string
  text: string
  slug: string
  property: Property[]
  buttons: Button[]
}

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    title: 'What is your current seniority level within your professional field? ',
    text: '',
    slug: 'seniority_level',
    property: [
      {
        id: 1,
        name: 'seniority_level',
        text: 'Seniority level',
        type: 'select',
        value: '',
        class: '',
        readonly: 0,
        options: [
          { id: 1, text: 'Junior', value: '1' },
          { id: 2, text: 'Associate', value: '2' },
          { id: 3, text: 'Mid-level', value: '3' },
          { id: 4, text: 'Senior', value: '4' },
          { id: 5, text: 'Lead', value: '5' },
          { id: 6, text: 'Manager', value: '6' },
          { id: 7, text: 'Director', value: '7' },
          { id: 8, text: 'Executive', value: '8' },
        ],
      },
    ],
    buttons: [
      { id: 1, text: 'Back', disabled: 0 },
      { id: 2, text: 'Next', disabled: 1 },
    ],
  },
  {
    id: 2,
    title: 'Outline your career in a few sentences.',
    text: '<img class="img-fluid" src="/images/career.png">',
    slug: 'career',
    property: [
      {
        id: 2,
        name: 'proficiency',
        text: 'Your proficiency',
        type: 'textarea',
        value: '',
        class: '',
        readonly: 0,
        options: [],
      },
    ],
    buttons: [
      { id: 3, text: 'Back', disabled: 0 },
      { id: 4, text: 'Next', disabled: 1 },
    ],
  },
  {
    id: 3,
    title: 'What are your work and non-work interests?',
    text: 'List words separated by commas that can serve as conversation starters and lead to engaging discussions, for instance: hobbies, software, book titles, etc.',
    slug: 'interests',
    property: [
      {
        id: 3,
        name: 'interests',
        text: 'Your interests',
        type: 'textarea',
        value: '',
        class: '',
        readonly: 0,
        options: [],
      },
    ],
    buttons: [
      { id: 5, text: 'Back', disabled: 0 },
      { id: 6, text: 'Next', disabled: 1 },
    ],
  },
  {
    id: 4,
    title: 'Social Media Profile Link (LinkedIn, Twitter, etc.)',
    text: 'You can provide a direct link to a specific post about yourself or an interview \u2013 something that enables a person to get to know you before the first meeting. Sharing is optional and under your control to enhance privacy and comfort',
    slug: 'social',
    property: [{ id: 4, name: 'link', text: 'Link', type: 'input', value: '', class: '', readonly: 0, options: [] }],
    buttons: [
      { id: 7, text: 'Back', disabled: 0 },
      { id: 8, text: 'Next', disabled: 1 },
    ],
  },
  {
    id: 5,
    title: 'What are you hoping to gain from the meetups?',
    text: '',
    slug: 'target',
    property: [
      {
        id: 5,
        name: 'target',
        text: '',
        type: 'checkbox',
        value: '',
        class: '',
        readonly: 0,
        options: [
          {
            id: 9,
            text: '\ud83c\udf10 Networking Opportunities To expand my professional network within the community',
            value: '1',
          },
          {
            id: 10,
            text: '\ud83d\udca1 Knowledge Sharing To share and gain insights on best practices, challenges, and solutions',
            value: '2',
          },
          {
            id: 11,
            text: '\ud83d\ude80 Skill Development To discover new tools, techniques, and methodologies in the field',
            value: '3',
          },
          {
            id: 12,
            text: '\ud83d\udcca\ufe0f Industry Trends To stay updated on the latest trends and developments in the industry',
            value: '4',
          },
          {
            id: 13,
            text: '\ud83d\udc65 Collaboration Projects  To find potential collaborators for upcoming projects or initiatives',
            value: '5',
          },
          {
            id: 14,
            text: '\ud83c\udf89 Social Interaction To enjoy social interactions with peers in a relaxed and informal setting',
            value: '6',
          },
        ],
      },
    ],
    buttons: [
      { id: 9, text: 'Back', disabled: 0 },
      { id: 10, text: 'Next', disabled: 1 },
    ],
  },
  {
    id: 6,
    title: 'Thanks for your responses!',
    text: '<p>Look out for further details and exciting connections in your email soon.</p>\r\n\r\n<p>Questions? Contact us anytime at contact@mynetworky.com</p>\r\n\r\n<p>\r\nHappy networking!\r\n<i>- The Networky Team</i>\r\n</p>',
    slug: 'finish',
    property: [],
    buttons: [{ id: 11, text: 'Opt-in email', disabled: 0 }],
  },
]

export const languages = [
  { value: 'english', label: 'English' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'german', label: 'German' },
  { value: 'french', label: 'French' },
  { value: 'italian', label: 'Italian' },
  { value: 'portuguese', label: 'Portuguese' },
  { value: 'dutch', label: 'Dutch' },
  { value: 'swedish', label: 'Swedish' },
  { value: 'danish', label: 'Danish' },
  { value: 'norwegian', label: 'Norwegian' },
  { value: 'finnish', label: 'Finnish' },
  { value: 'polish', label: 'Polish' },
  { value: 'czech', label: 'Czech' },
  { value: 'slovak', label: 'Slovak' },
  { value: 'hungarian', label: 'Hungarian' },
  { value: 'greek', label: 'Greek' },
  { value: 'russian', label: 'Russian' },
  { value: 'ukrainian', label: 'Ukrainian' },
  { value: 'belarusian', label: 'Belarusian' },
  { value: 'serbian', label: 'Serbian' },
  { value: 'croatian', label: 'Croatian' },
  { value: 'bulgarian', label: 'Bulgarian' },
  { value: 'romanian', label: 'Romanian' },
  { value: 'turkish', label: 'Turkish' },
  { value: 'armenian', label: 'Armenian' },
  { value: 'albanian', label: 'Albanian' },
  { value: 'latvian', label: 'Latvian' },
  { value: 'lithuanian', label: 'Lithuanian' },
  { value: 'estonian', label: 'Estonian' },
  { value: 'irish', label: 'Irish' },
  { value: 'welsh', label: 'Welsh' },
  { value: 'bosnian', label: 'Bosnian' },
  { value: 'macedonian', label: 'Macedonian' },
  { value: 'georgian', label: 'Georgian' },
  { value: 'mandarin', label: 'Mandarin' },
  { value: 'hindi', label: 'Hindi' },
  { value: 'arabic', label: 'Arabic' },
  { value: 'bengali', label: 'Bengali' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'korean', label: 'Korean' },
  { value: 'vietnamese', label: 'Vietnamese' },
  { value: 'persian', label: 'Persian' },
  { value: 'thai', label: 'Thai' },
  { value: 'malay', label: 'Malay' },
  { value: 'indonesian', label: 'Indonesian' },
  { value: 'filipino', label: 'Filipino' },
  { value: 'urdu', label: 'Urdu' },
  { value: 'swahili', label: 'Swahili' },
  { value: 'zulu', label: 'Zulu' },
  { value: 'xhosa', label: 'Xhosa' },
  { value: 'hebrew', label: 'Hebrew' },
  { value: 'yiddish', label: 'Yiddish' },
  { value: 'amharic', label: 'Amharic' },
  { value: 'somali', label: 'Somali' },
  { value: 'hausa', label: 'Hausa' },
]
