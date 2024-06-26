export type SurveyDataType = {
  [key: string]: {
    title: string
    text: string
    url: string
    options: {
      id: number
      survey_question_id: number
      name: string
      title?: string
      text: string
      type: string
      placeholder?: string
      value: string
      class: string
      readonly: number
      created_at: string
      icon: string | unknown
      selectOptions?: [string]
    }[]
    buttons: {
      id: number
      survey_question_id: number
      text: string
      class: string
      disabled: number
      created_at: string
    }[]
  }
}

export const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ru', name: 'Russian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ko', name: 'Korean' },
  { code: 'ar', name: 'Arabic' },
  { code: 'hi', name: 'Hindi' },
  { code: 'tr', name: 'Turkish' },
  { code: 'nl', name: 'Dutch' },
  { code: 'pl', name: 'Polish' },
  { code: 'sv', name: 'Swedish' },
  { code: 'fi', name: 'Finnish' },
  { code: 'no', name: 'Norwegian' },
  { code: 'da', name: 'Danish' },
  { code: 'el', name: 'Greek' },
  { code: 'cs', name: 'Czech' },
  { code: 'hu', name: 'Hungarian' },
  { code: 'th', name: 'Thai' },
  { code: 'he', name: 'Hebrew' },
  { code: 'id', name: 'Indonesian' },
  { code: 'ro', name: 'Romanian' },
]

export const seniority = [
  { id: 1, name: 'Junior' },
  { id: 2, name: 'Middle' },
  { id: 3, name: 'Senior' },
]

export const surveyData: SurveyDataType = {
  1: {
    title: 'Build Your Network, Expand Your Horizons!',
    text: '',
    url: '/survey/name',
    options: [
      {
        id: 1,
        survey_question_id: 1,
        name: 'name',
        text: 'First name',
        type: 'input',
        placeholder: 'First name',
        value: '',
        class: '',
        readonly: 0,
        created_at: '0000-00-00 00:00:00',
        icon: 'close',
      },
      {
        id: 2,
        survey_question_id: 1,
        name: 'surname',
        text: 'Last name',
        type: 'input',
        placeholder: 'Last name',
        value: '',
        class: '',
        readonly: 0,
        created_at: '0000-00-00 00:00:00',
        icon: 'close',
      },
    ],
    buttons: [
      // {
      //   id: 1,
      //   survey_question_id: 1,
      //   text: 'Back',
      //   class: 'btn btn-primary w-100 btn-next',
      //   disabled: 1,
      //   created_at: '0000-00-00 00:00:00',
      // },
      {
        id: 2,
        survey_question_id: 1,
        text: 'Next',
        class: 'btn btn-primary w-100 btn-next',
        disabled: 1,
        created_at: '0000-00-00 00:00:00',
      },
    ],
  },
  2: {
    title: 'What is your location?',
    text: 'Share your location to connect with relevant professionals in your area, enhancing local networking opportunities.',
    url: '/survey/location',
    options: [
      {
        id: 2,
        survey_question_id: 2,
        name: 'Location',
        text: 'Social Network Link',
        type: 'input',
        value: '',
        class: '',
        readonly: 0,
        created_at: '0000-00-00 00:00:00',
        icon: 'find',
      },
    ],
    buttons: [
      {
        id: 2,
        survey_question_id: 2,
        text: 'Back',
        class: 'btn btn-light w-100 btn-back',
        disabled: 0,
        created_at: '0000-00-00 00:00:00',
      },
      {
        id: 3,
        survey_question_id: 2,
        text: 'Next',
        class: 'btn btn-primary w-100 btn-next',
        disabled: 1,
        created_at: '0000-00-00 00:00:00',
      },
    ],
  },
  3: {
    title: 'What are your preferred languages for communication?',
    text: `This helps us match you with networking opportunities in languages you're most comfortable with.`,
    url: '/survey/role',
    options: [
      {
        id: 3,
        survey_question_id: 3,
        name: 'role',
        text: 'Your current role',
        type: 'select',
        value: 'languages',
        class: '',
        readonly: 0,
        created_at: '0000-00-00 00:00:00',
        icon: '',
      },
    ],
    buttons: [
      {
        id: 4,
        survey_question_id: 3,
        text: 'Back',
        class: 'btn btn-light w-100 btn-back',
        disabled: 0,
        created_at: '0000-00-00 00:00:00',
      },
      {
        id: 5,
        survey_question_id: 3,
        text: 'Next',
        class: 'btn btn-primary w-100 btn-next',
        disabled: 1,
        created_at: '0000-00-00 00:00:00',
      },
    ],
  },
  4: {
    title: 'What is your current seniority level within your professional field? ',
    text: '',
    url: '/survey/interest',
    options: [
      {
        id: 4,
        survey_question_id: 4,
        name: 'interest',
        text: 'Interests',
        type: 'select',
        value: 'seniority',
        class: '',
        readonly: 0,
        created_at: '0000-00-00 00:00:00',
        icon: '',
      },
    ],
    buttons: [
      {
        id: 6,
        survey_question_id: 4,
        text: 'Back',
        class: 'btn btn-light w-100 btn-back',
        disabled: 0,
        created_at: '0000-00-00 00:00:00',
      },
      {
        id: 7,
        survey_question_id: 4,
        text: 'Next',
        class: 'btn btn-primary w-100 btn-next',
        disabled: 1,
        created_at: '0000-00-00 00:00:00',
      },
    ],
  },
  5: {
    title: 'What are you hoping to gain from the Networky meetups',
    text: '',
    url: '/survey/target',
    options: [
      {
        id: 5,
        survey_question_id: 5,
        name: 'target',
        title: '🌐\u00A0 Networking Opportunities',
        text: 'To expand my professional network within the community',
        type: 'checkbox',
        value: '1',
        class: '',
        readonly: 0,
        created_at: '0000-00-00 00:00:00',
        icon: '',
      },
      {
        id: 6,
        survey_question_id: 5,
        name: 'target',
        title: '💡\u00A0 Knowledge Sharing',
        text: 'To share and gain insights on best practices, challenges, and solutions in FP&A.',
        type: 'checkbox',
        value: '2',
        class: '',
        readonly: 0,
        created_at: '0000-00-00 00:00:00',
        icon: '',
      },
      {
        id: 8,
        survey_question_id: 5,
        name: 'target',
        title: '🚀\u00A0 Skill Development',
        text: 'Skill Development - To discover new tools, techniques, and methodologies in financial planning and analysis.',
        type: 'checkbox',
        value: '4',
        class: '',
        readonly: 0,
        created_at: '0000-00-00 00:00:00',
        icon: '',
      },
      {
        id: 9,
        survey_question_id: 5,
        name: 'target',
        title: '📊️\u00A0 Industry Trends T',
        text: 'To stay updated on the latest trends and developments in the finance industry.',
        type: 'checkbox',
        value: '5',
        class: '',
        readonly: 0,
        created_at: '0000-00-00 00:00:00',
        icon: '',
      },
      {
        id: 10,
        survey_question_id: 5,
        name: 'target',
        title: '👥\u00A0 Collaboration Projects',
        text: 'To find potential collaborators for upcoming projects or initiatives.',
        type: 'checkbox',
        value: '6',
        class: '',
        readonly: 0,
        created_at: '0000-00-00 00:00:00',
        icon: '',
      },
      {
        id: 11,
        survey_question_id: 5,
        name: 'target',
        title: ' 🎉\u00A0 Social Interaction ',
        text: 'To enjoy social interactions with peers in a relaxed and informal setting.',
        type: 'checkbox',
        value: '7',
        class: '',
        readonly: 0,
        created_at: '0000-00-00 00:00:00',
        icon: '',
      },
    ],
    buttons: [
      {
        id: 8,
        survey_question_id: 5,
        text: 'Back',
        class: 'btn btn-light w-100 btn-back',
        disabled: 0,
        created_at: '0000-00-00 00:00:00',
      },
      {
        id: 9,
        survey_question_id: 5,
        text: 'Next',
        class: 'btn btn-primary w-100 btn-next',
        disabled: 1,
        created_at: '0000-00-00 00:00:00',
      },
    ],
  },
  6: {
    title: 'When is your birthday?',
    text: '',
    url: '/survey/birthday',
    options: [
      {
        id: 12,
        survey_question_id: 6,
        name: 'birthday',
        text: 'Your birthday',
        type: 'date',
        value: '',
        class: 'calendar',
        readonly: 1,
        created_at: '0000-00-00 00:00:00',
        icon: '',
      },
    ],
    buttons: [
      {
        id: 10,
        survey_question_id: 6,
        text: 'Back',
        class: 'btn btn-light w-100 btn-back',
        disabled: 0,
        created_at: '0000-00-00 00:00:00',
      },
      {
        id: 11,
        survey_question_id: 6,
        text: 'Next',
        class: 'btn btn-primary w-100 btn-next',
        disabled: 1,
        created_at: '0000-00-00 00:00:00',
      },
    ],
  },
  7: {
    title: 'Email',
    text: '',
    url: '/survey/email',
    options: [
      {
        id: 13,
        survey_question_id: 7,
        name: 'email',
        text: 'Email address',
        type: 'input',
        value: '',
        class: '',
        readonly: 0,
        created_at: '0000-00-00 00:00:00',
        icon: '',
      },
    ],
    buttons: [
      {
        id: 12,
        survey_question_id: 7,
        text: 'Back',
        class: 'btn btn-light w-100 btn-back',
        disabled: 0,
        created_at: '0000-00-00 00:00:00',
      },
      {
        id: 13,
        survey_question_id: 7,
        text: 'Next',
        class: 'btn btn-primary w-100 btn-next',
        disabled: 1,
        created_at: '0000-00-00 00:00:00',
      },
    ],
  },
  8: {
    title: 'Finish',
    text: 'Congratulations',
    url: '/survey/finish',
    options: [],
    buttons: [
      {
        id: 14,
        survey_question_id: 8,
        text: 'Finish',
        class: 'btn btn-primary w-100 btn-finish',
        disabled: 0,
        created_at: '0000-00-00 00:00:00',
      },
    ],
  },
}
