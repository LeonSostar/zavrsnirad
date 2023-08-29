import { Redis } from '@upstash/redis'

export const db = new Redis({
  url: 'https://cute-parakeet-43913.upstash.io',
  token: 'AauJASQgMTAzMmYwMDUtMTJlZi00YzhkLTlkMDQtMmQ4OTBiNWI5NTNhNGJiZGIxNmQ3YWViNDFhYzk5MjE5ZDRiYzQ2NGJmMjI=',
})
