import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { projects } from './data/projects'

function App() {
  const [activeId, setActiveId] = useState(() => projects[0]?.id ?? '')

  const [uptime, setUptime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const launchedAt = Date.now()

    const interval = window.setInterval(() => {
      const diff = Date.now() - launchedAt
      const totalSeconds = Math.floor(diff / 1000)
      const days = Math.floor(totalSeconds / 86400)
      const hours = Math.floor((totalSeconds % 86400) / 3600)
      const minutes = Math.floor((totalSeconds % 3600) / 60)
      const seconds = totalSeconds % 60

      setUptime({ days, hours, minutes, seconds })
    }, 1000)

    return () => window.clearInterval(interval)
  }, [])

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeId),
    [activeId],
  )

  return (
    <div className="app">
      <aside className="sidebar" aria-label="项目目录">
        <div className="sidebar__header">
          <h1>Showcase</h1>
          <a
            className="sidebar__nexus"
            href="https://dieWehmut.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nexus
          </a>
        </div>
        <nav className="sidebar__nav">
          {projects.map((project) => {
            const isActive = project.id === activeId
            return (
              <button
                key={project.id}
                type="button"
                className={`sidebar__item${isActive ? ' active' : ''}`}
                onClick={() => setActiveId(project.id)}
              >
                <span className="sidebar__indicator" aria-hidden="true" />
                <span>{project.title}</span>
              </button>
            )
          })}
        </nav>
      </aside>

      <main className="main" aria-live="polite">
        {activeProject ? (
          <article className="project">
            <header className="project__header">
              <div className="project__title-row">
                <h2>{activeProject.title}</h2>
                <div className="project__actions">
                  <a
                    href={activeProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project__button"
                  >
                    Repository
                  </a>
                  <a
                    href={activeProject.experienceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project__button project__button--primary"
                  >
                    Experience
                  </a>
                </div>
              </div>
              <p>{activeProject.description}</p>
            </header>

            <div className="project__video">
              <iframe
                src={`https://player.bilibili.com/player.html?bvid=${activeProject.bvid}&page=1&autoplay=0`}
                title={`${activeProject.title} - Bilibili 播放器`}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </article>
        ) : (
          <section className="project project--empty">
            <p>选择一个项目以查看详细信息。</p>
          </section>
        )}

        <footer className="footer" aria-label="站点信息">
          <div className="footer__uptime">
            <span className="footer__label">Uptime</span>
            <span className="footer__time-number">{uptime.days}</span>
            <span className="footer__time-unit">d</span>
            <span className="footer__time-number">{uptime.hours}</span>
            <span className="footer__time-unit">h</span>
            <span className="footer__time-number">{uptime.minutes}</span>
            <span className="footer__time-unit">m</span>
            <span className="footer__time-number">{uptime.seconds}</span>
            <span className="footer__time-unit">s</span>
            <span role="img" aria-label="clock">
              🕒
            </span>
          </div>

          <div className="footer__hubs" role="group" aria-label="社交链接">
            <a
              href="https://github.com/dieWehmut"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__hub-button footer__hub-button--github"
              title="dieWehmut の GitHub"
            >
              <svg viewBox="0 0 24 24" className="footer__icon" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386C24 5.373 18.627 0 12 0z" />
              </svg>
            </a>
            <a
              href="https://git.nju.edu.cn/dieWehmut"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__hub-button footer__hub-button--gitlab"
              title="dieWehmut の GitLab"
            >
              <svg viewBox="0 0 24 24" className="footer__icon" aria-hidden="true">
                <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
              </svg>
            </a>
          </div>

          <div className="footer__copyright">© 2025 hc-dsw</div>
        </footer>
      </main>
    </div>
  )
}

export default App
