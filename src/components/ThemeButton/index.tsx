import './index.css'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'

const ThemeButton = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className='fixed top-5 left-0 right-0 flex justify-center'>
            <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                className='bg-slate-200 dark:bg-slate-700 p-2 rounded-full'
            >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
        </div>
    )
}

export default ThemeButton
