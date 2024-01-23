import s from './sidebar-logo.module.scss'

export const SidebarLogo = () => {
  return (
    <div className={s.logo}>
      <div className={s.logo_text}>
        <div className={s.logo_text_bntu}>БНТУ</div>
        <div className={s.logo_text_science}>Наукометрия</div>
      </div>
    </div>
  )
}
