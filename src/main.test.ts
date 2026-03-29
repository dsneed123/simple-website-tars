import { describe, it, expect, vi, afterEach } from 'vitest'

describe('main.ts', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('throws when #app element is not found', async () => {
    vi.spyOn(document, 'getElementById').mockReturnValue(null)
    await expect(import('./main')).rejects.toThrow('Root element #app not found')
  })
})
