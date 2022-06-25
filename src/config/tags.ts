import { Tag } from "@/types"

export const main = [
  {
    name: 'Fullcycle',
    color: '#fcba11'
  },
]

export const end: Record<string, Tag> = {
  infra: {
    name: 'Golang',
    color: '#00a6cf'
  },
  back: {
    name: 'Nest.js',
    color: '#d5204a'
  },
  front: {
    name: 'React.js',
    color: '#5ccfee'
  },
}

const tools = [
  {
    name: 'Docker',
    color: '#0db1e6'
  },
]

export const tags = (tag: string) => [
  ...main,
  ...tools,
  end[tag],
]