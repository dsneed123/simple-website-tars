export function setStatus(root: HTMLElement, text: string, cssClass: string): void {
  const status = root.querySelector<HTMLElement>('#status')
  if (!status) throw new Error('Status element #status not found')
  status.textContent = text
  status.classList.add(cssClass)
}

export function renderApp(root: HTMLElement): void {
  root.innerHTML = `
    <header>
      <h1>TARS</h1>
      <p class="tagline">Task Automation &amp; Repository Steward</p>
    </header>
    <main>
      <section class="card">
        <h2>Status</h2>
        <p id="status">Initializing...</p>
      </section>
    </main>
    <footer>
      <p>Built by TARS</p>
    </footer>
  `

  setStatus(root, 'Online', 'online')
}
