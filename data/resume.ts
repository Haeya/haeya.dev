type tContent = {
  title: string
  description: string
  do: string[]
  tech: string[]
  techHighlight: string[]
  link: string | null
}

type tExperience = {
  company: string
  position: string
  period: string
  content: tContent[]
}

type tOthertExperience = {
  name: string
  content: { title: string; url: string | null }[]
}

type tSkill = {
  skill: string
  content: string[]
}

type tResume = {
  name: string
  job: string
  contact: string
  about: string[]
  experience: tExperience[]
  otherExperience: tOthertExperience[]
  skill: tSkill[]
}

const resume: tResume = {
  name: '강해',
  job: 'Backend Engineer',
  contact: 'Email: lotac@kakao.com',
  about: ['개발자로 스타트업에서 백엔드 개발을 하고 있습니다.'],
  experience: [
    {
      company: '(주)마켓디자이너스',
      position: 'Backend Engineer',
      period: '20.04 ~ ',
      content: [
        {
          title: '',
          description: '',
          do: ['Component'],
          tech: ['Typescript'],
          techHighlight: ['Nest', 'Next'],
          link: null,
        },
      ],
    },
  ],
  otherExperience: [
    {
      name: '자격증',
      content: [
        {
          title: 'a',
          url: null,
        },
      ],
    },
  ],
  skill: [
    {
      skill: 'Next.js',
      content: ['sso'],
    },
    {
      skill: 'React',
      content: ['TypeScript를 이용해 개발 가능합니다.'],
    },
  ],
}

export default resume
