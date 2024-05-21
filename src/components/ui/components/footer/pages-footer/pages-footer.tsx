import s from './pages-footer.module.scss'
export const PagesFooter = () => {
  return (
    <footer className={s.footer}>
      <ul>
        <li>
          <a href={'#'}>О библиотеке</a>
        </li>
        <li>
          <a href={'#'}>О системе поиска</a>
        </li>
        <li>
          <a href={'#'}>Лаборатория научных коммуникаций</a>
        </li>
      </ul>
    </footer>
  )
}
