import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { GITHUB_URL, LINKEDIN_URL } from '../../config'

export function Footer() {
  return (
    <footer className="border-t border-surface/60 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} <span className="text-text font-medium">João Pedro Bispo</span>. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
