import { profile, links } from '@/data/links'

export default function Home() {
  return (
    <main className="page">
      {/* Profile */}
      <section className="profile">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="avatar"
        />
        <h1 className="name">{profile.name}</h1>
        <p className="username">{profile.username}</p>
        {profile.bio && <p className="bio">{profile.bio}</p>}
      </section>

      {/* Links */}
      <nav className="links">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-card"
          >
            <span className="link-icon">{link.icon}</span>
            <span className="link-label">{link.label}</span>
          </a>
        ))}
      </nav>

      {/* Footer */}
      <footer className="footer">
        <p>
          Creado con ❤️ por{' '}
          <a href="https://robertfrontend.com" target="_blank" rel="noopener noreferrer">
            @robertfrontend
          </a>
        </p>
        <p style={{ marginTop: '4px' }}>
          <a href="https://github.com/robertfrontend/RmLinks" target="_blank" rel="noopener noreferrer">
            ⭐ Ver en GitHub
          </a>
        </p>
      </footer>
    </main>
  )
}
