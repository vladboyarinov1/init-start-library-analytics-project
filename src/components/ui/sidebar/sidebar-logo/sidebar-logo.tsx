import s from './sidebar-logo.module.scss'

type SidebarLogoProps = {
  visible?: boolean
}
export const SidebarLogo = ({ visible }: SidebarLogoProps) => {
  return (
    <div className={visible ? s.logo : s.logoHide}>
      <div className={s.logo_text}>
        <div className={s.logo_text_bntu}>БНТУ</div>
        <div className={s.logo_text_science}>Наукометрия</div>
      </div>
    </div>
  )
}
