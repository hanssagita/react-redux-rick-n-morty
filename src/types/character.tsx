type Character = {
  id: string,
  name: string,
  species: string
  gender: 'Male' | 'Female',
  image: string
}

type PageInfo = {
  count: number,
  pages: number
}

export type {
  Character,
  PageInfo
}