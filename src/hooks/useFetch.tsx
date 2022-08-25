import { useEffect, useState } from 'react'
import { Character, PageInfo } from '../types/character'

interface Parameter{
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  requestBody?: Object
}

type Response = {
  results?: Character[],
  info?: PageInfo
  code?: number,
  status?: string
}

const useFetch = ({ url, method, requestBody } : Parameter) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [response, setResponse] = useState<Response>({})

  useEffect(() => {
    fetchApi()
  }, [url])

  const fetchApi: () => void = async () => {
    setLoading(true)
    try {
      const res = await fetch(url, {
        method: method,
        body: requestBody? JSON.stringify(requestBody) : undefined
      })
      const response = await res.json()
      await setResponse(response)
    } catch (err) {
      setResponse({
        code: 500,
        status: 'INTERNAL_SERVER_ERROR'
      })
    } finally {
      setLoading(false)
    }
  }
  return [response as any, loading] as const
}

export default useFetch
