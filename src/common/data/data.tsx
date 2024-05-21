import { CirclePacking, Linear, PieChart, RadialBar, TreeMap } from '@/common/data/types'
import { TimelineCell } from '@/components/ui/pages/presentation-page/presentation-page'
import {
  AnalyticsChart,
  AtomicScience,
  Author,
  Bubbles,
  Campus,
  DocumentText,
  IndexH,
  Printer,
  Quotes,
  Science,
  SearchBook,
  TransparentDoc,
} from '@/icons'
export const searchPageData: TimelineCell[] = [
  {
    breadcrumbs: ['Поиск данных', 'Публикации'],
    img: <DocumentText size={40} />,
    link: '/publications',
    title: 'Публикации',
  },
  {
    breadcrumbs: ['Поиск данных', 'Авторы'],
    img: <Author size={40} />,
    link: '/authors',
    title: 'Авторы',
  },
  {
    breadcrumbs: ['Поиск данных', 'Организации'],
    img: <Campus size={40} />,
    link: '/organizations',
    title: 'Организации',
  },
  {
    breadcrumbs: ['Поиск данных', 'Цитирования'],
    img: <Quotes size={40} />,
    link: '/citation',
    title: 'Цитирования',
  },
  {
    breadcrumbs: ['Поиск данных', 'Научное направление'],
    img: <Science size={40} />,
    link: '/scientific_direction',
    title: 'Научное направление',
  },
  {
    breadcrumbs: ['Поиск данных', 'Индекс h'],
    img: <IndexH size={40} />,
    link: '/index_h',
    title: 'Индекс h',
  },
  {
    breadcrumbs: ['Поиск данных', 'Источник публикаций(Уточнить)'],
    img: <Printer size={40} />,
    link: '/source_publications',
    title: 'Источник публикаций(Уточнить)',
  },
]
export const visualizationData: TimelineCell[] = [
  {
    breadcrumbs: ['Аналитика и визуализация', 'Организации: анализ публикаций'],
    img: <Campus size={40} />,
    link: '/analysis_publications',
    title: 'Организации: анализ публикаций',
  },
  {
    breadcrumbs: ['Аналитика и визуализация', 'Динамика публикаций/цитирований'],
    img: <AnalyticsChart size={40} />,
    link: '/dynamics',
    title: 'Динамика публикаций/цитирований',
  },
  {
    breadcrumbs: ['Аналитика и визуализация', 'Издания: анализ публикаций и ключевых слов'],
    img: <SearchBook size={40} />,
    link: '/analysis_publications_and_keywords',
    title: 'Издания: анализ публикаций и ключевых слов',
  },
  {
    breadcrumbs: ['Аналитика и визуализация', 'Публикации по ключевым словам'],
    img: <TransparentDoc size={40} />,
    link: '/publications_by_keywords',
    title: 'Публикации по ключевым словам',
  },
  {
    breadcrumbs: ['Аналитика и визуализация', 'Сеть ключевого слова'],
    img: <Bubbles size={40} />,
    link: '/keyword_network',
    title: 'Сеть ключевого слова',
  },
  {
    breadcrumbs: ['Аналитика и визуализация', 'Научная сфера организации'],
    img: <AtomicScience size={40} />,
    link: '/scientific_field_organizations',
    title: 'Научная сфера организации',
  },
]

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
export const BarChartData = [
  {
    count: 57,
    country: 'Belarus',
  },
  {
    count: 121,
    country: 'Russia1',
  },
  {
    count: 57,
    country: 'Belarus1',
  },
  {
    count: 121,
    country: 'Russia2',
  },
  {
    count: 57,
    country: 'Belarus2',
  },
  {
    count: 121,
    country: 'Russia3',
  },
  {
    count: 57,
    country: 'Belarus4',
  },
  {
    count: 121,
    country: 'Russia5',
  },
]
