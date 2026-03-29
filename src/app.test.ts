import { describe, it, expect, beforeEach } from 'vitest'
import { renderApp } from './app'

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
