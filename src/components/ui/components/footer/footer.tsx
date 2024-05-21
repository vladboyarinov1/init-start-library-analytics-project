import { Facebook, Instagram, Mail, Telegram, Twitter, Vk, Youtube } from '@/icons'

import s from './footer.module.scss'

const socialIcons = [
  { color: 'black', component: Telegram, href: '#', size: 40 },
  { color: 'black', component: Facebook, href: '#', size: 40 },
  { color: 'black', component: Twitter, href: '#', size: 40 },
  { component: Mail, href: '#', size: 40 },
  { component: Instagram, href: '#', size: 40 },
  { component: Youtube, href: '#', size: 40 },
  { component: Vk, href: '#', size: 40 },
]

const columns = [
  {
    items: [
      { href: '#', text: 'Фонд' },
      { href: '#', text: 'Базы данных' },
      { href: '#', text: 'Онлайн услуги' },
      { href: '#', text: 'Отзывы' },
    ],
    title: 'О библиотеке',
  },
  {
    items: [
      { href: '#', text: 'Поиск' },
      { href: '#', text: 'Аналитика' },
      { href: '#', text: 'Авторские права' },
      { href: '#', text: 'Конфиденциальность' },
      { href: '#', text: 'Контакты' },
    ],
    title: 'О системе поиска',
  },
  {
    items: [
      { href: '#', text: 'Сопровождение публикационной активности' },
      { href: '#', text: 'Дайджест InfoGenerator' },
      { href: '#', text: 'Контакты' },
    ],
    title: 'Лаборатория научных коммуникаций',
  },
]

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.education}>Образование и научные достижения — ключ к успеху.</div>
          {columns.map((column, index) => (
            <div className={s.column} key={index}>
              <h3 className={s.title}>{column.title}</h3>
              <ul className={s.items}>
                {column.items.map((item, index) => (
                  <li key={index}>
                    <a href={item.href}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={s.socialIcons}>
          {socialIcons.map((icon, index) => {
            const IconComponent = icon.component

            return (
              <a href={icon.href} key={index}>
                <IconComponent color={icon.color} size={icon.size} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
