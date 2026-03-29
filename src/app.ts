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

  const status = root.querySelector<HTMLParagraphElement>('#status')
  if (status) {
    status.textContent = 'Online'
    status.classList.add('online')
  }
}
