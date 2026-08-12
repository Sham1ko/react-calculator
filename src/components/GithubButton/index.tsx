import { Github } from 'lucide-react'

const GithubButton = () => {
    return (
        <a
            href="https://github.com/sham1ko"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub: sham1ko"
            className="group flex items-center overflow-hidden rounded-full bg-slate-200 p-2 dark:bg-slate-700"
        >
            <Github size={20} className="shrink-0" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 delay-300 group-hover:ml-2 group-hover:max-w-[6rem] group-hover:delay-0">
                sham1ko
            </span>
        </a>
    )
}

export default GithubButton
