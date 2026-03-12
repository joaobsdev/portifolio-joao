import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSend, FiGithub, FiLinkedin, FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { SectionTitle } from '../ui/SectionTitle'
import { WHATSAPP_NUMBER, GITHUB_URL, LINKEDIN_URL } from '../../config'

export function Contact() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({})
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e: typeof errors = {}
    if (!name.trim()) e.name = 'Nome é obrigatório.'
    if (!message.trim()) e.message = 'Mensagem é obrigatória.'
    return e
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const e_ = validate()
    if (Object.keys(e_).length > 0) { setErrors(e_); return }
    setErrors({})
    setLoading(true)

    setTimeout(() => {
      const text = encodeURIComponent(`Olá! Meu nome é ${name}.\n\n${message}`)
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
      setLoading(false)
      setSent(true)
      setName('')
      setMessage('')
    }, 800)
  }

  return (
    <section id="contato" className="py-24 bg-surface/20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Contato" subtitle="Vamos construir algo incrível juntos?" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-text font-bold text-2xl mb-3">Vamos conversar</h3>
              <p className="text-muted leading-relaxed">
                Tem um projeto em mente, uma oportunidade ou só quer trocar uma ideia? Me manda uma
                mensagem — responderei pelo WhatsApp!
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                <FaWhatsapp className="text-green-400" size={20} />
              </div>
              <div>
                <p className="text-text font-medium text-sm">WhatsApp</p>
                <p className="text-muted text-sm">Entre em contato</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-all"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  className="glass rounded-2xl p-8 flex flex-col items-center text-center gap-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <FiCheckCircle className="text-green-400" size={48} />
                  <h3 className="text-text font-bold text-xl">Mensagem enviada!</h3>
                  <p className="text-muted">O WhatsApp foi aberto com sua mensagem. Até logo!</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-2 text-primary text-sm underline underline-offset-2 hover:text-accent transition-colors"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="glass rounded-2xl p-8 space-y-5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  noValidate
                >
                  <div>
                    <label htmlFor="contact-name" className="block text-text text-sm font-medium mb-2">
                      Nome
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome"
                      className={`w-full bg-surface/50 border rounded-xl px-4 py-3 text-text placeholder-muted/50 focus:outline-none focus:ring-2 transition-all ${
                        errors.name ? 'border-red-400/60 focus:ring-red-400/40' : 'border-surface-2 focus:ring-primary/40 focus:border-primary/50'
                      }`}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-text text-sm font-medium mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="contact-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Sua mensagem..."
                      rows={5}
                      className={`w-full bg-surface/50 border rounded-xl px-4 py-3 text-text placeholder-muted/50 focus:outline-none focus:ring-2 transition-all resize-none ${
                        errors.message ? 'border-red-400/60 focus:ring-red-400/40' : 'border-surface-2 focus:ring-primary/40 focus:border-primary/50'
                      }`}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-red-400 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-background font-semibold flex items-center justify-center gap-2 disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-background/60 border-t-background rounded-full animate-spin" />
                    ) : (
                      <>
                        Enviar via WhatsApp <FiSend size={16} />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
