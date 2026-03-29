import { describe, it, expect, beforeEach } from 'vitest'
import { renderApp } from './app'

describe('renderApp', () => {
  let root: HTMLElement

  beforeEach(() => {
    root = document.createElement('div')
  })

  it('renders a header with TARS title', () => {
    renderApp(root)
    expect(root.querySelector('h1')).not.toBeNull()
    expect(root.querySelector('h1')!.textContent).toBe('TARS')
  })

  it('sets status to Online', () => {
    renderApp(root)
    const status = root.querySelector('#status')
    expect(status).not.toBeNull()
    expect(status!.textContent).toBe('Online')
    expect(status!.classList.contains('online')).toBe(true)
  })

  it('renders a footer', () => {
    renderApp(root)
    expect(root.querySelector('footer')).not.toBeNull()
  })

  it('header has role="banner"', () => {
    renderApp(root)
    expect(root.querySelector('header')!.getAttribute('role')).toBe('banner')
  })

  it('main has role="main"', () => {
    renderApp(root)
    expect(root.querySelector('main')!.getAttribute('role')).toBe('main')
  })

  it('footer has role="contentinfo"', () => {
    renderApp(root)
    expect(root.querySelector('footer')!.getAttribute('role')).toBe('contentinfo')
  })

  it('status card has aria-label="System status"', () => {
    renderApp(root)
    expect(root.querySelector('section.card')!.getAttribute('aria-label')).toBe('System status')
  })

  it('status span has aria-live="polite"', () => {
    renderApp(root)
    expect(root.querySelector('#status')!.getAttribute('aria-live')).toBe('polite')
  })
})
