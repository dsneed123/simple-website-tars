import { describe, it, expect, beforeEach } from 'vitest'
import { renderApp, setStatus } from './app'

describe('renderApp', () => {
  let root: HTMLElement

  beforeEach(() => {
    root = document.createElement('div')
  })

  it('renders a header with TARS title', () => {
    renderApp(root)
    expect(root.querySelector('h1')?.textContent).toBe('TARS')
  })

  it('sets status to Online', () => {
    renderApp(root)
    const status = root.querySelector('#status')
    expect(status?.textContent).toBe('Online')
    expect(status?.classList.contains('online')).toBe(true)
  })

  it('renders a footer', () => {
    renderApp(root)
    expect(root.querySelector('footer')).not.toBeNull()
  })
})

describe('setStatus', () => {
  let root: HTMLElement

  beforeEach(() => {
    root = document.createElement('div')
    root.innerHTML = '<p id="status"></p>'
  })

  it('sets textContent on the status element', () => {
    setStatus(root, 'Running', 'active')
    expect(root.querySelector('#status')?.textContent).toBe('Running')
  })

  it('adds the css class to the status element', () => {
    setStatus(root, 'Running', 'active')
    expect(root.querySelector('#status')?.classList.contains('active')).toBe(true)
  })

  it('throws when #status element is missing', () => {
    const empty = document.createElement('div')
    expect(() => setStatus(empty, 'Online', 'online')).toThrow('Status element #status not found')
  })
})
