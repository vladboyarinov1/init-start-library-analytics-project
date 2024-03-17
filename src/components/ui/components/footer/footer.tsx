import { Facebook, Instagram, Mail, Telegram, Twitter, Vk, Youtube } from '@/icons'

import s from './footer.module.scss'
export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.wrapper}>
        <div className={s.education}>Образование и научные достижения — ключ к успеху.</div>
        <div className={s.column}>
          <h3 className={s.title}>О библиотеке</h3>
          <ul className={s.items}>
            <li>
              <a href={'#'}>Фонд</a>
            </li>
            <li>
              <a href={'#'}>Базы данных</a>
            </li>
            <li>
              <a href={'#'}>Онлайн услуги</a>
            </li>
            <li>
              <a href={'#'}>Отзывы</a>
            </li>
          </ul>
        </div>
        <div className={s.column}>
          <h3 className={s.title}>О системе поиска</h3>
          <ul className={s.items}>
            <li>
              <a href={'#'}>Поиск</a>
            </li>
            <li>
              <a href={'#'}>Аналитика</a>
            </li>
            <li>
              <a href={'#'}>Авторские права</a>
            </li>
            <li>
              <a href={'#'}>Конфиденциальность</a>
            </li>
            <li>
              <a href={'#'}>Контакты</a>
            </li>
          </ul>
        </div>
        <div className={s.column}>
          <h3 className={s.title}>Лаборатория научных коммуникаций</h3>
          <ul className={s.items}>
            <li>
              <a href={'#'}>Сопровождение публикационной активности</a>
            </li>
            <li>
              <a href={'#'}>Дайджест InfoGenerator</a>
            </li>
            <li>
              <a href={'#'}>Контакты</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.socialIcons}>
        <a href={'#'}>
          <Telegram color={'black'} size={40} />
        </a>
        <a href={'#'}>
          <Facebook color={'black'} size={40} />
        </a>
        <a href={'#'}>
          <Twitter color={'black'} size={40} />
        </a>
        <a href={'#'}>
          <Mail size={40} />
        </a>
        <a href={'#'}>
          <Instagram size={40} />
        </a>
        <a href={'#'}>
          <Youtube size={40} />
        </a>
        <a href={'#'}>
          <Vk size={40} />
        </a>
      </div>
    </footer>
  )
}
