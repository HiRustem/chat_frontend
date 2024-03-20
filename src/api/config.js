export const config = {
  baseUrl: 'https://chat-backend-red.vercel.app',
    headers: {
      'Content-Type': 'application/json'
    }
}

export const checkStatus = (result) => {
  if (result.ok) {
    return result.json()
  }

  return Promise.reject(`Ошибка ${result.status}`)
}