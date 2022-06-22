import { useState } from "react"

export const useFetching = (сallback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async (...args) => {
    try {
      setIsLoading(true)
      await сallback(...args)
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false)
    }
  }
  return [fetching, isLoading, error]
} 