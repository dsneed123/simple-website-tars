export function renderApp(root: HTMLElement): void {
  const header = document.createElement('header')
  const h1 = document.createElement('h1')
  h1.textContent = 'TARS'
  const tagline = document.createElement('p')
  tagline.className = 'tagline'
  tagline.textContent = 'Task Automation & Repository Steward'
  header.appendChild(h1)
  header.appendChild(tagline)

  const main = document.createElement('main')
  const section = document.createElement('section')
  section.className = 'card'
  const h2 = document.createElement('h2')
  h2.textContent = 'Status'
  const status = document.createElement('p')
  status.id = 'status'
  status.textContent = 'Online'
  status.classList.add('online')
  section.appendChild(h2)
  section.appendChild(status)
  main.appendChild(section)

  const footer = document.createElement('footer')
  const footerP = document.createElement('p')
  footerP.textContent = 'Built by TARS'
  footer.appendChild(footerP)

  root.appendChild(header)
  root.appendChild(main)
  root.appendChild(footer)
}
