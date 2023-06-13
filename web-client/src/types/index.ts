export interface ThemeType {
  id: number
  title: string
  image: string
  created_At: string
  updated_At: string
}

export interface Paragraph {
  id: number
  text: string
  themeId: number
  order: number
  created_At: string
  updated_At: string
}

export interface NormalizedTheme {
  id: number
  title: string
  image: string
  paragraphs: string[]
}

export interface TagType {
  id: number
  name: string
  description: string
  created_At: string
  updated_At: string
}

export interface QuestionType {
  id: number,
  title: string,
  answers: string[],
  correct: string[]
}
