import { CirclePacking, Linear, PieChart, RadialBar, TreeMap } from '@/data/types'

export const data: Linear[] = [
  {
    data: [
      {
        x: '2018',
        y: 3,
      },
      {
        x: '2019',
        y: 23,
      },
      {
        x: '2020',
        y: 25,
      },
      {
        x: '2021',
        y: 19,
      },
    ],
    id: 'Belarusian National Technical University',
  },
  {
    data: [
      {
        x: '2018',
        y: 3,
      },
      {
        x: '2019',
        y: 17,
      },
      {
        x: '2020',
        y: 12,
      },
      {
        x: '2021',
        y: 19,
      },
    ],
    id: 'Belarusian State University',
  },
  {
    data: [
      {
        x: '2018',
        y: 2,
      },
      {
        x: '2019',
        y: 20,
      },
      {
        x: '2020',
        y: 16,
      },
      {
        x: '2021',
        y: 45,
      },
    ],
    id: 'State University of Informatics and Radioelectronics',
  },
]

export const radialData: RadialBar[] = [
  {
    data: [
      {
        x: 'Belarusian National Technical University',
        y: 3,
      },
      {
        x: 'Belarusian State University',
        y: 3,
      },
      {
        x: 'State University of Informatics and Radioelectronics',
        y: 2,
      },
    ],
    id: '2018',
  },
  {
    data: [
      {
        x: 'Belarusian National Technical University',
        y: 23,
      },
      {
        x: 'Belarusian State University',
        y: 17,
      },
      {
        x: 'State University of Informatics and Radioelectronics',
        y: 20,
      },
    ],
    id: '2019',
  },
  {
    data: [
      {
        x: 'Belarusian National Technical University',
        y: 25,
      },
      {
        x: 'Belarusian State University',
        y: 12,
      },
      {
        x: 'State University of Informatics and Radioelectronics',
        y: 16,
      },
    ],
    id: '2020',
  },
]

export const CirclePackingData: CirclePacking = {
  children: [
    { name: 'Physics', score: 20 },
    { name: 'Chemistry', score: 5 },
    { name: 'Biology', score: 3 },
    { name: 'Mathematics', score: 8 },
    { name: 'Computer Science', score: 12 },
  ],
}

export const treeMapData: TreeMap = {
  children: [
    {
      children: [
        {
          name: 'Europe',
          score: 4079,
        },
        {
          name: 'Asia',
          score: 3457,
        },
        {
          name: 'North America',
          score: 2178,
        },
        {
          name: 'Africa',
          score: 342,
        },
        {
          name: 'South America',
          score: 121,
        },
        {
          name: 'Oceania',
          score: 80,
        },
      ],
      name: 'Computer science',
    },
    {
      children: [
        {
          name: 'Europe',
          score: 2079,
        },
        {
          name: 'Asia',
          score: 1457,
        },
        {
          name: 'North America',
          score: 1178,
        },
        {
          name: 'Africa',
          score: 342,
        },
        {
          name: 'South America',
          score: 121,
        },
        {
          name: 'Oceania',
          score: 80,
        },
      ],
      name: 'Chemical engineering',
    },
    {
      children: [
        {
          name: 'Europe',
          score: 1204,
        },
        {
          name: 'Asia',
          score: 738,
        },
        {
          name: 'North America',
          score: 652,
        },
        {
          name: 'Africa',
          score: 87,
        },
        {
          name: 'South America',
          score: 14,
        },
        {
          name: 'Oceania',
          score: 8,
        },
      ],
      name: 'Thermodynamics',
    },
  ],
}
export const PieData: PieChart[] = [
  { id: 'БНТУ', value: '3000' },
  { id: 'БГУИР', value: '2000' },
  { id: 'БГУ', value: '6000' },
]
