import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

vi.mock('./app', () => ({
  renderApp: vi.fn(),
}))

describe('main', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('calls renderApp with the #app element', async () => {
    document.body.innerHTML = '<div id="app"></div>'
    await import('./main')
    const { renderApp } = await import('./app')
    expect(renderApp).toHaveBeenCalledOnce()
    expect(renderApp).toHaveBeenCalledWith(document.getElementById('app'))
  })

  it('throws when #app is missing', async () => {
    await expect(import('./main')).rejects.toThrow('Root element #app not found')
  })
})
