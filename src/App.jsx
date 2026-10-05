import { useEffect, useRef, useState } from 'react'
import {
  PHONE_DISPLAY, PHONE_TEL, EMAIL, DEFAULT_WHATSAPP_MESSAGE, whatsappLink, GYM_VIDEO,
  profile, stats, experience, certificate, classFlow, styles, classes, gallery,
} from './data.js'

/* ---------- Icons ---------- */

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.23 3.7 8.23 8.24 0 4.54-3.69 8.24-8.23 8.24Z" />
    </svg>
  )
}

function PhoneIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
    </svg>
  )
}

function MailIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function ExpandIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

// The "petal" mark used in section labels and the logo
function Lotus({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4c2.2 2.4 3.2 5 3.2 7.6S14.2 17 12 19c-2.2-2-3.2-4.8-3.2-7.4S9.8 6.4 12 4Z" />
      <path d="M12 19c-3.2.2-6.6-1.4-8.6-4.6 2.4-.8 4.4-.6 6 .2M12 19c3.2.2 6.6-1.4 8.6-4.6-2.4-.8-4.4-.6-6 .2" />
    </svg>
  )
}

/* ---------- Helpers ---------- */

function Photo({ name, alt, sizes = '(max-width: 760px) 100vw, 50vw', className, eager = false }) {
  return (
    <img
      className={className}
      src={`/images/${name}-960.webp`}
      srcSet={`/images/${name}-480.webp 480w, /images/${name}-960.webp 960w`}
      sizes={sizes}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
    />
  )
}

function Label({ children, light }) {
  return <p className={`label ${light ? 'light' : ''}`}><Lotus size={16} />{children}</p>
}

// Fades elements with .reveal in as they scroll into view
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ---------- Sections ---------- */

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    ['#about', 'About'],
    ['#experience', 'Experience'],
    ['#approach', 'Approach'],
    ['#classes', 'Classes'],
    ['#gallery', 'Gallery'],
  ]
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <Lotus size={22} /> Becky <em>Yoga</em>
        </a>
        <nav id="main-nav" className={`nav ${open ? 'open' : ''}`} aria-label="Main">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>Book a class</a>
        </nav>
        <button
          className="menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          <span /><span />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-text">
          <Label>{profile.title} · {profile.location}</Label>
          <h1>
            Warm up. Stretch.<br />
            <em>Release.</em> Breathe.
          </h1>
          <p className="hero-sub">
            I'm <strong>{profile.shortName}</strong>, {profile.name}. I teach Vinyasa, Yin and a little Hatha
            in English, for private clients, groups, gyms and events.
          </p>
          <div className="hero-actions">
            <a href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Book on WhatsApp
            </a>
            <a href="#experience" className="btn btn-outline">
              View my experience <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="arch">
            <Photo
              name={profile.heroPhoto}
              alt="Becky in one-legged wheel pose in front of a painted sunburst"
              sizes="(max-width: 860px) 80vw, 440px"
              eager
            />
          </div>
          <div className="hero-badge">
            <span className="hero-badge-rank"><span>1<sup>st</sup></span></span>
            <span>
              <strong>Yogasana</strong>
              Online World Yoga<br />Championship 2023
            </span>
          </div>
          <div className="hero-sun" aria-hidden="true" />
        </div>
      </div>

      <div className="container">
        <dl className="stats">
          {stats.map((s) => (
            <div key={s.value + s.label} className="stat">
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-photo reveal">
          <Photo name={profile.photo} alt={`Portrait of ${profile.name}, ${profile.title}`} sizes="(max-width: 860px) 90vw, 420px" />
        </div>
        <div className="reveal">
          <Label>About me</Label>
          <h2 className="section-title">Hi, I'm Becky.</h2>
          {profile.bio.map((p) => <p key={p} className="body-text">{p}</p>)}
          <ul className="facts">
            <li><span>Name</span>{profile.name}</li>
            <li><span>Teaches in</span>{profile.language}</li>
            <li><span>Based in</span>{profile.location}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section section-sand" id="experience">
      <div className="container">
        <div className="section-head reveal">
          <Label>Experience</Label>
          <h2 className="section-title">Where I've taught</h2>
          <p className="lead">Gyms, festivals, stadiums and wellness events. Here's where I've led classes so far.</p>
        </div>
        <ol className="exp-list">
          {experience.map((e, i) => (
            <li key={e.place} className="exp reveal" style={{ '--d': `${(i % 3) * 70}ms` }}>
              <span className="exp-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="exp-body">
                <span className="exp-kind">{e.kind}</span>
                <h3>{e.place}</h3>
                <p className="exp-role">{e.role}</p>
                <p>{e.text}</p>
                {e.video && GYM_VIDEO && (
                  <a href="#in-class" className="text-link">Watch me teach here <ArrowIcon /></a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Credentials({ onOpen }) {
  return (
    <section className="section" id="credentials">
      <div className="container cert-grid">
        <div className="reveal">
          <Label>Certification</Label>
          <h2 className="section-title">{certificate.award}</h2>
          <p className="cert-event">{certificate.event}</p>
          <p className="body-text">{certificate.training}</p>
          <dl className="cert-details">
            {certificate.details.map((d) => (
              <div key={d.label}>
                <dt>{d.label}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <button
          className="cert-frame reveal"
          onClick={() => onOpen({ name: certificate.image, alt: `${certificate.title}: ${certificate.award}, ${certificate.event}`, large: true })}
          aria-label="View the certificate full size"
        >
          <Photo
            name={certificate.image}
            alt={`${certificate.title} awarded to ${profile.name}: ${certificate.award}, ${certificate.event}`}
            sizes="(max-width: 860px) 92vw, 600px"
          />
          <span className="zoom-hint"><ExpandIcon /> View full size</span>
        </button>
      </div>
    </section>
  )
}

function Approach() {
  return (
    <section className="section section-deep" id="approach">
      <div className="container">
        <div className="section-head reveal">
          <Label light>My approach</Label>
          <h2 className="section-title light">Every class moves through four parts</h2>
          <p className="lead light">
            Comfort comes first. I use yoga balls and massagers so that opening up feels supported, never forced.
          </p>
        </div>
        <ol className="flow">
          {classFlow.map((f, i) => (
            <li key={f.step} className="flow-step reveal" style={{ '--d': `${i * 80}ms` }}>
              <span className="flow-num">{i + 1}</span>
              <h3>{f.step}</h3>
              <p>{f.text}</p>
            </li>
          ))}
        </ol>

        <h3 className="sub-title light reveal">Styles I teach</h3>
        <div className="styles">
          {styles.map((s) => (
            <article key={s.name} className="style reveal">
              <div className="style-head">
                <h4>{s.name}</h4>
                <span className={`style-note ${s.note === 'Occasionally' ? 'muted' : ''}`}>{s.note}</span>
              </div>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Classes() {
  return (
    <section className="section" id="classes">
      <div className="container">
        <div className="section-head center reveal">
          <Label>Classes &amp; rates</Label>
          <h2 className="section-title">Find the class that fits you</h2>
          <p className="lead">All classes are taught in English. Prices are in Malawi Kwacha.</p>
        </div>
        <div className="pricing">
          {classes.map((c) => (
            <article key={c.name} className={`plan reveal ${c.featured ? 'featured' : ''}`}>
              {c.featured && <span className="plan-flag">Most personal</span>}
              <h3>{c.name}</h3>
              <p className="plan-price">
                {c.price}
                {c.per && <small>{c.per}</small>}
              </p>
              <p className="plan-text">{c.text}</p>
              <ul className="checks">
                {c.points.map((p) => <li key={p}><CheckIcon />{p}</li>)}
              </ul>
              <div className="plan-actions">
                {c.link && (
                  <a href={c.link.href} className="text-link" target="_blank" rel="noopener noreferrer">
                    {c.link.label} <ArrowIcon />
                  </a>
                )}
                <a
                  href={whatsappLink(c.cta)}
                  className={`btn ${c.featured ? 'btn-primary' : 'btn-outline'} btn-block`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={18} /> {c.price.startsWith('MWK') ? 'Book this class' : 'Ask about rates'}
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="events-note reveal">
          <strong>Planning an event?</strong> I've taught at Lake of Stars and with Stories by Lota and Pilates by Bike.{' '}
          <a href={whatsappLink("Hi Becky, I'd like to book you for a yoga session at an event.")} target="_blank" rel="noopener noreferrer">
            Book me for yours
          </a>
        </p>
      </div>
    </section>
  )
}

function Gallery({ onOpen }) {
  return (
    <section className="section section-sand" id="gallery">
      <div className="container">
        <div className="section-head reveal">
          <Label>Gallery</Label>
          <h2 className="section-title">On the mat</h2>
        </div>

        {GYM_VIDEO && (
          <div className="video-feature reveal" id="in-class">
            <div>
              <span className="exp-kind">In class</span>
              <h3>Teaching at Koahkh Fit Gym, Area 22</h3>
              <p className="body-text">A look inside one of my classes: warming up, moving through the stretches and finishing calm.</p>
            </div>
            <div className="video-frame">
              <video src={GYM_VIDEO} poster="/images/koakh-class-poster.webp" controls playsInline preload="metadata" />
            </div>
          </div>
        )}

        <div className="gallery">
          {gallery.map((g) => (
            <figure key={g.image} className={`tile tile-${g.image} reveal`}>
              <button onClick={() => onOpen({ name: g.image, alt: g.alt })} aria-label={`View larger: ${g.caption}`}>
                <Photo name={g.image} alt={g.alt} sizes={g.wide ? '(max-width: 760px) 100vw, 760px' : '(max-width: 760px) 50vw, 380px'} />
              </button>
              <figcaption>{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact-inner reveal">
        <Label light>Book a class</Label>
        <h2 className="contact-title">Let's get you <em>moving.</em></h2>
        <p className="lead light">
          Private sessions, group classes, flexibility training or yoga for your event. Message me and we'll find a time.
        </p>
        <div className="contact-actions">
          <a href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} className="btn btn-light btn-lg" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> WhatsApp me
          </a>
        </div>
        <ul className="contact-list">
          <li>
            <a href={PHONE_TEL}><PhoneIcon size={18} /><span><small>Call</small>{PHONE_DISPLAY}</span></a>
          </li>
          <li>
            <a href={`mailto:${EMAIL}`}><MailIcon size={18} /><span><small>Email</small>{EMAIL}</span></a>
          </li>
        </ul>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="logo small"><Lotus size={18} /> Becky <em>Yoga</em></span>
        <span>© {new Date().getFullYear()} {profile.name} · {profile.location}</span>
      </div>
    </footer>
  )
}

function Lightbox({ photo, onClose }) {
  const ref = useRef(null)
  useEffect(() => {
    const d = ref.current
    if (photo && d && !d.open) d.showModal()
    if (!photo && d?.open) d.close()
  }, [photo])

  return (
    <dialog
      ref={ref}
      className="lightbox"
      onClose={onClose}
      onClick={(e) => { if (e.target === ref.current) onClose() }}
    >
      {photo && (
        <>
          <img
            src={`/images/${photo.name}-${photo.large ? 1600 : 960}.webp`}
            alt={photo.alt}
          />
          <button className="lightbox-close" onClick={onClose} aria-label="Close"><CloseIcon /></button>
        </>
      )}
    </dialog>
  )
}

function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
      className="fab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Becky on WhatsApp"
    >
      <WhatsAppIcon size={26} />
    </a>
  )
}

export default function App() {
  const [photo, setPhoto] = useState(null)
  useReveal()
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Credentials onOpen={setPhoto} />
        <Approach />
        <Classes />
        <Gallery onOpen={setPhoto} />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Lightbox photo={photo} onClose={() => setPhoto(null)} />
    </>
  )
}
