/* ════════════════════════════════════════════════
   FURQAN — DATA ENGINEER PORTFOLIO
   script.js  |  All interactivity & animations
   ════════════════════════════════════════════════ */

'use strict';

/* ─── 1. DATA ─── */
const SKILLS = [
  {
    icon: '🐍',
    name: 'Python',
    desc: 'Data pipelines, ETL workflows, automation scripts, and advanced data manipulation with Pandas & NumPy.',
    level: 90,
    levelLabel: 'Advanced',
  },
  {
    icon: '🗄️',
    name: 'SQL & Databases',
    desc: 'Complex queries, window functions, stored procedures, query optimization across PostgreSQL, MySQL & SQLite.',
    level: 88,
    levelLabel: 'Advanced',
  },
  {
    icon: '🌐',
    name: 'HTML / CSS / JS',
    desc: 'Building clean, responsive front-ends and data dashboards for presenting analytical insights.',
    level: 75,
    levelLabel: 'Proficient',
  },
  {
    icon: '🔀',
    name: 'Git & GitHub',
    desc: 'Version control, branching strategies, collaborative workflows, CI triggers, and open-source contribution.',
    level: 82,
    levelLabel: 'Advanced',
  },
];

const TOOLS = [
  '⚡ Apache Spark', '📊 Pandas', '🔢 NumPy', '🐘 PostgreSQL',
  '🐬 MySQL', '📈 Matplotlib', '🔍 SQLite', '🐙 GitHub Actions',
  '📦 Docker', '📋 Jupyter Notebook', '🔧 VS Code', '☁️ Google Colab',
];

const PROJECTS = [
  {
    icon: '🚰',
    category: 'pipeline',
    categoryLabel: 'Pipeline',
    title: 'Real-Time ETL Data Pipeline',
    desc: 'Built an end-to-end ETL pipeline that ingests raw CSV data from multiple sources, applies transformations, deduplication, and loads clean records into a PostgreSQL warehouse — reducing reporting lag by 70%.',
    tags: ['Python', 'PostgreSQL', 'Pandas', 'SQL'],
    githubUrl: 'https://github.com/Furqan-Ahmed-409',
    demoUrl: null,
  },
  {
    icon: '📊',
    category: 'analytics',
    categoryLabel: 'Analytics',
    title: 'Sales Analytics Dashboard',
    desc: 'Designed an interactive web dashboard powered by vanilla JS and SQL stored procedures, visualizing KPIs, revenue trends, and regional performance across 50k+ transactions.',
    tags: ['JavaScript', 'SQL', 'HTML/CSS', 'Charts'],
    githubUrl: 'https://github.com/Furqan-Ahmed-409',
    demoUrl: '#',
  },
  {
    icon: '🗃️',
    category: 'database',
    categoryLabel: 'Database',
    title: 'Database Schema Optimizer',
    desc: 'Analyzed a legacy normalized schema of 40+ tables, identified N+1 query bottlenecks, redesigned indexes, and rewrote critical queries — achieving 3x faster read performance.',
    tags: ['SQL', 'PostgreSQL', 'Query Optimization', 'Indexing'],
    githubUrl: 'https://github.com/Furqan-Ahmed-409',
    demoUrl: null,
  },
  {
    icon: '🔄',
    category: 'pipeline',
    categoryLabel: 'Pipeline',
    title: 'Automated Data Cleaning Toolkit',
    desc: 'A reusable Python library for automated data quality checks: missing value imputation, outlier detection, type coercion, and validation reporting — used across 3+ internal projects.',
    tags: ['Python', 'Pandas', 'NumPy', 'Git'],
    githubUrl: 'https://github.com/Furqan-Ahmed-409',
    demoUrl: null,
  },
  {
    icon: '📉',
    category: 'analytics',
    categoryLabel: 'Analytics',
    title: 'Customer Churn Analysis',
    desc: 'Performed deep-dive EDA on 12k customer records using Python and SQL, uncovering churn signals and delivering a segmentation report that guided a targeted retention campaign.',
    tags: ['Python', 'SQL', 'Pandas', 'Matplotlib'],
    githubUrl: 'https://github.com/Furqan-Ahmed-409',
    demoUrl: null,
  },
  {
    icon: '🏗️',
    category: 'database',
    categoryLabel: 'Database',
    title: 'Student Data Warehouse',
    desc: 'Architected a star-schema data warehouse for an educational institution — modeling fact and dimension tables, building OLAP-friendly aggregations, and automating nightly loads via Python scripts.',
    tags: ['SQL', 'Python', 'Data Modeling', 'ETL'],
    githubUrl: 'https://github.com/Furqan-Ahmed-409',
    demoUrl: null,
  },
];

const EDUCATION = [
  {
    icon: '🎓',
    date: '2021 – 2025',
    title: 'Bachelor of Science in Computer Science',
    place: 'University Name, City',
    desc: 'Focused on database systems, data structures, algorithms, and software engineering principles. Completed a capstone project building a full data pipeline with Python and PostgreSQL.',
  },
  {
    icon: '📜',
    date: '2024',
    title: 'Google Data Analytics Professional Certificate',
    place: 'Coursera / Google',
    desc: 'Covered the full data analysis lifecycle — asking questions, preparing and processing data, analyzing, sharing, and acting — using SQL, Tableau, and R.',
  },
  {
    icon: '🏅',
    date: '2023',
    title: 'Python for Data Science & Machine Learning',
    place: 'Udemy',
    desc: 'Intensive hands-on course covering Pandas, NumPy, Matplotlib, Seaborn, and an introduction to Scikit-learn for data preprocessing and model evaluation.',
  },
  {
    icon: '⚡',
    date: '2022',
    title: 'SQL Bootcamp — Zero to Hero',
    place: 'Udemy / Self-Study',
    desc: 'Mastered advanced SQL topics: CTEs, window functions, recursive queries, indexing strategies, and performance tuning across PostgreSQL and MySQL.',
  },
];

/* ─── 2. CODE TYPEWRITER ─── */
const CODE_SNIPPET = `import pandas as pd
import psycopg2

def run_pipeline(source, db):
    # Extract
    df = pd.read_csv(source)
    
    # Transform
    df.dropna(inplace=True)
    df['date'] = pd.to_datetime(
        df['date']
    )
    df['revenue'] = (
        df['revenue'].astype(float)
    )
    
    # Load
    conn = psycopg2.connect(**db)
    df.to_sql('warehouse', conn)
    print("✓ Pipeline complete!")

run_pipeline('data.csv', DB_CONFIG)`;

/* Syntax highlight colour map */
function syntaxHighlight(code) {
  return code
    .replace(/\b(import|from|def|return|inplace|True|False|None)\b/g,
      '<span style="color:#c792ea">$1</span>')
    .replace(/#.+/g,
      '<span style="color:#546e7a;font-style:italic">$&</span>')
    .replace(/(".*?"|'.*?')/g,
      '<span style="color:#c3e88d">$1</span>')
    .replace(/\b(\d+(\.\d+)?)\b/g,
      '<span style="color:#f78c6c">$1</span>')
    .replace(/\b(pd|psycopg2|df|conn)\b/g,
      '<span style="color:#82aaff">$1</span>')
    .replace(/\b(run_pipeline|read_csv|dropna|to_datetime|astype|to_sql|connect|print)\b/g,
      '<span style="color:#ffcb6b">$1</span>');
}

function initCodeTypewriter() {
  const el = document.getElementById('code-typewriter');
  if (!el) return;
  let i = 0;
  const chars = CODE_SNIPPET.split('');
  let currentText = '';

  function type() {
    if (i < chars.length) {
      currentText += chars[i] === '<' ? '&lt;' : chars[i] === '>' ? '&gt;' : chars[i];
      el.innerHTML = syntaxHighlight(currentText.replace(/&lt;/g, '<temp-lt>').replace(/&gt;/g, '<temp-gt>'))
        .replace(/<temp-lt>/g, '&lt;').replace(/<temp-gt>/g, '&gt;');
      i++;
      setTimeout(type, chars[i - 1] === '\n' ? 60 : 28);
    }
  }
  // Start typewriter after hero animations settle
  setTimeout(type, 1000);
}

/* ─── 3. HERO ROLE TYPEWRITER ─── */
const ROLES = [
  'Data Engineer.',
  'Pipeline Architect.',
  'SQL Specialist.',
  'Python Developer.',
  'Data Enthusiast.',
];

function initRoleTypewriter() {
  const el = document.getElementById('hero-role-dynamic');
  if (!el) return;
  let roleIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function tick() {
    const role = ROLES[roleIdx];
    if (!deleting) {
      el.textContent = role.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === role.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
      setTimeout(tick, 80);
    } else {
      el.textContent = role.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % ROLES.length;
        setTimeout(tick, 300);
        return;
      }
      setTimeout(tick, 45);
    }
  }
  setTimeout(tick, 1200);
}

/* ─── 4. PARTICLE CANVAS ─── */
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let particles = [];
  const PARTICLE_COUNT = window.innerWidth > 768 ? 60 : 25;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? '0, 229, 255' : '168, 85, 247',
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: PARTICLE_COUNT }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
      ctx.fill();

      // Draw connecting lines
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x, dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(0, 229, 255, ${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(draw);
  }

  init();
  draw();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { init(); }, 200);
  });
}

/* ─── 5. NAVBAR ─── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');
  const links = navLinks?.querySelectorAll('.nav-link');

  // Scroll class
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar?.classList.toggle('scrolled', y > 20);
    lastScroll = y;
  }, { passive: true });

  // Hamburger
  hamburger?.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    navLinks?.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu on link click
  links?.forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('open');
      navLinks?.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Active section highlight
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links?.forEach(l => l.classList.toggle('active', l.dataset.section === id));
      }
    });
  }, { rootMargin: `-${50}px 0px -50% 0px` });

  sections.forEach(s => observer.observe(s));
}

/* ─── 6. SKILLS ─── */
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  const toolsRow = document.getElementById('tools-row');
  if (!grid || !toolsRow) return;

  grid.innerHTML = SKILLS.map(s => `
    <div class="skill-card" role="article" aria-label="${s.name} skill">
      <div class="skill-card__icon" aria-hidden="true">${s.icon}</div>
      <h3 class="skill-card__name">${s.name}</h3>
      <p class="skill-card__desc">${s.desc}</p>
      <div class="skill-bar-wrapper" role="progressbar" aria-valuenow="${s.level}" aria-valuemin="0" aria-valuemax="100" aria-label="${s.name} proficiency ${s.level}%">
        <div class="skill-bar-label">
          <span>${s.levelLabel}</span>
          <span>${s.level}%</span>
        </div>
        <div class="skill-bar-track">
          <div class="skill-bar-fill" data-width="${s.level}"></div>
        </div>
      </div>
    </div>
  `).join('');

  toolsRow.innerHTML = TOOLS.map(t => `
    <span class="tool-chip">${t}</span>
  `).join('');
}

/* ─── 7. PROJECTS ─── */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="project-card" data-category="${p.category}" aria-label="${p.title}" id="project-card-${i}">
      <div class="project-card__header">
        <div class="project-card__icon" aria-hidden="true">${p.icon}</div>
        <span class="project-card__category">${p.categoryLabel}</span>
      </div>
      <div class="project-card__body">
        <h3 class="project-card__title">${p.title}</h3>
        <p class="project-card__desc">${p.desc}</p>
        <div class="project-card__tags" aria-label="Technologies used">
          ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
      </div>
      <div class="project-card__links">
        <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View ${p.title} on GitHub">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
          GitHub
        </a>
        ${p.demoUrl ? `
        <a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="Live demo of ${p.title}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Live Demo
        </a>` : ''}
      </div>
    </article>
  `).join('');
}

/* ─── 8. PROJECTS FILTER ─── */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      const cards = document.querySelectorAll('.project-card');
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        if (match) {
          card.classList.remove('hidden');
          card.style.display = '';
        } else {
          card.classList.add('hidden');
          card.style.display = 'none';
        }
      });
    });
  });
}


/* ─── 10. SCROLL ANIMATIONS (IntersectionObserver) ─── */
function initScrollAnimations() {
  // Skill cards
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        setTimeout(() => {
          card.classList.add('visible');
          const fill = card.querySelector('.skill-bar-fill');
          if (fill) fill.style.width = fill.dataset.width + '%';
        }, Array.from(document.querySelectorAll('.skill-card')).indexOf(card) * 120);
        skillObserver.unobserve(card);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.skill-card').forEach(c => skillObserver.observe(c));

  // Tool chips
  const toolObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const chips = document.querySelectorAll('.tool-chip');
        chips.forEach((chip, i) => {
          setTimeout(() => chip.classList.add('visible'), i * 60);
        });
        toolObserver.disconnect();
      }
    });
  }, { threshold: 0.2 });
  const toolsRow = document.getElementById('tools-row');
  if (toolsRow) toolObserver.observe(toolsRow);

  // Project cards
  const projObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cards = document.querySelectorAll('.project-card:not(.hidden)');
        cards.forEach((card, i) => {
          setTimeout(() => card.classList.add('visible'), i * 100);
        });
        projObserver.disconnect();
      }
    });
  }, { threshold: 0.1 });
  const projGrid = document.getElementById('projects-grid');
  if (projGrid) projObserver.observe(projGrid);

  // Timeline items
  const timelineObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        timelineObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.timeline-item').forEach((item, i) => {
    item.style.transitionDelay = `${i * 0.1}s`;
    timelineObserver.observe(item);
  });
}

/* ─── 11. COUNTER ANIMATION ─── */
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const duration = 1400;
        const start = performance.now();

        function step(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
          el.textContent = Math.floor(eased * target);
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target;
        }
        requestAnimationFrame(step);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

/* ─── 12. CONTACT FORM (Formspree) ─── */
/*
 * HOW TO ACTIVATE:
 * 1. Go to https://formspree.io and create a free account.
 * 2. Create a new form → copy your unique endpoint URL.
 * 3. Replace the FORMSPREE_ENDPOINT value below with your URL.
 *    Example: 'https://formspree.io/f/xyzabcde'
 */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mwvdebbz'; // ← REPLACE THIS

function initContactForm() {
  const form = document.getElementById('contact-form');
  const successEl = document.getElementById('form-success');
  const submitBtn = document.getElementById('form-submit');
  const submitText = document.getElementById('btn-submit-text');
  if (!form) return;

  /* Field validation */
  function validateField(field) {
    const valid = field.checkValidity() && field.value.trim() !== '';
    field.classList.toggle('error', !valid);
    return valid;
  }

  form.querySelectorAll('.form-input, .form-textarea').forEach(field => {
    field.addEventListener('blur',  () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) validateField(field);
    });
  });

  /* Submit handler — posts JSON to Formspree */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fields = [...form.querySelectorAll('.form-input, .form-textarea')];
    const allValid = fields.every(f => validateField(f));
    if (!allValid) return;

    // Collect form data
    const data = {
      name:    document.getElementById('form-name').value.trim(),
      email:   document.getElementById('form-email').value.trim(),
      subject: document.getElementById('form-subject').value.trim(),
      message: document.getElementById('form-message').value.trim(),
    };

    // Update button state
    submitBtn.disabled = true;
    submitText.textContent = 'Sending…';

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // ✅ Success — message sent to your email via Formspree
        form.reset();
        successEl.textContent = '✅ Message sent! I\'ll get back to you soon.';
        successEl.style.color = '#4ade80';
        successEl.hidden = false;
      } else {
        // ❌ Formspree returned an error
        const json = await response.json().catch(() => ({}));
        const errMsg = json?.errors?.[0]?.message || 'Something went wrong. Please try again.';
        successEl.textContent = '❌ ' + errMsg;
        successEl.style.color = '#ff6b6b';
        successEl.hidden = false;
      }
    } catch (err) {
      // ❌ Network error (offline, CORS, etc.)
      successEl.textContent = '❌ Network error. Check your connection and try again.';
      successEl.style.color = '#ff6b6b';
      successEl.hidden = false;
    } finally {
      submitBtn.disabled = false;
      submitText.textContent = 'Send Message';
      setTimeout(() => { successEl.hidden = true; }, 6000);
    }
  });
}

/* ─── 13. SCROLL-TO-TOP ─── */
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 450);
  }, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ─── 14. FOOTER YEAR ─── */
function setFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ─── 15. CURSOR GLOW EFFECT ─── */
function initCursorGlow() {
  if (window.matchMedia('(pointer: coarse)').matches) return; // Skip on touch
  const glow = document.createElement('div');
  glow.style.cssText = `
    position:fixed;pointer-events:none;z-index:9999;
    width:300px;height:300px;border-radius:50%;
    background:radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%);
    transform:translate(-50%,-50%);
    transition:opacity 0.3s;
  `;
  document.body.appendChild(glow);

  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    glow.style.left = mx + 'px';
    glow.style.top  = my + 'px';
  });
  document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { glow.style.opacity = '1'; });
}

/* ─── 16. TILT EFFECT ON PROJECT CARDS ─── */
function initCardTilt() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.project-card, .skill-card').forEach(card => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 1.5) {
        card.style.transform = `translateY(-4px) rotateX(${-dy * 4}deg) rotateY(${dx * 4}deg)`;
        card.style.transition = 'transform 0.15s ease';
      } else {
        card.style.transform = '';
        card.style.transition = 'transform 0.4s ease';
      }
    });
  });
}

/* ─── 17. INIT ALL ─── */
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();

  initNavbar();
  initParticles();
  initCodeTypewriter();
  initRoleTypewriter();
  initScrollAnimations();
  initCounters();
  initContactForm();
  initProjectFilter();
  initScrollTop();
  setFooterYear();
  initCursorGlow();
  initCardTilt();
});
