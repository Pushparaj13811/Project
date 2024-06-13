import React from 'react'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/theme'
import Navbar from './components/Navbar/Navbar'

function Root() {

    const [themeMode, setThemeMode] = useState(localStorage.getItem('theme') || 'light');
    const lightTheme = () => {
        setThemeMode('light');
        localStorage.setItem('theme', 'light');
    }
    const darkTheme = () => {
        setThemeMode('dark');
        localStorage.setItem('theme', 'dark');
    }

    useEffect(() => {
        document.querySelector('html').classList.remove('light', 'dark')
        document.querySelector('html').classList.add(themeMode)

    }, [themeMode])




    return (
        <>
            <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
                <Navbar />
                <Outlet />
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default Root