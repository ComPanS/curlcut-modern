import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { site } from '../content/site'

const navigation = [
  { href: '#works', label: 'Работы' }, { href: '#prices', label: 'Цены' },
  { href: '#about', label: 'О проекте' }, { href: '#contacts', label: 'Контакты' },
]

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])
  return (
    <div className="site-shell">
      <a className="skip-link" href="#content">К содержанию</a>
      <header className="site-header">
        <a className="header-brand" href="#top" aria-label="Curl Cut — наверх"><img src={`${import.meta.env.BASE_URL}images/Group_1047.svg`} alt="Curl Cut" /></a>
        <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Основная навигация">
          {navigation.map((item, index) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{item.label}</a>)}
          <a className="nav-book" href={site.bookingUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Онлайн-запись ↗</a>
        </nav>
        <button className={menuOpen ? 'menu-toggle is-open' : 'menu-toggle'} type="button" aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={menuOpen} onClick={() => setMenuOpen(value => !value)}><span /><span /></button>
      </header>
      <main id="content"><Outlet /></main>
      <footer className="site-footer">
        <img src={`${import.meta.env.BASE_URL}images/Group_1047.svg`} alt="Curl Cut" />
        <div><a href={`tel:${site.phone}`}>{site.phoneLabel}</a><a href={site.mapUrl} target="_blank" rel="noreferrer">Казань, {site.address} ↗</a></div>
        <p>© Curl Cut</p>
      </footer>
    </div>
  )
}
