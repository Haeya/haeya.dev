import { Group, HeaderContainer, LogoImage, ThemeModeImage } from './Header.style'
import Nav from './Nav'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
  const [themeMode, setThemeMode] = useState<string>(document.body.dataset.theme)

  useEffect(() => {
    document.body.dataset.theme = themeMode
    window.localStorage.setItem('theme', themeMode)
  }, [themeMode])

  const themeModeHandle = e => {
    e.preventDefault()
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark')
  }

  return (
    <HeaderContainer>
      <Link href="/" passHref>
        {themeMode === 'dark' ? (
          <LogoImage src="/static/logo-dark.png" alt="dark logo" />
        ) : (
          <LogoImage src="/static/logo-dark.png" alt="white logo" />
        )}
      </Link>
      <Nav />
      <Group>
        <div onClick={themeModeHandle}>
          {themeMode === 'dark' ? (
            <ThemeModeImage alt="white mode" src="/static/dark.png" />
          ) : (
            <ThemeModeImage alt="dark mode" src="/static/white.png" />
          )}
        </div>
      </Group>
    </HeaderContainer>
  )
}

export default Header
