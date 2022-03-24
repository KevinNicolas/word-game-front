import { Observable, Subscriber } from 'rxjs'
import axios, { AxiosResponse } from 'axios'

interface SuscriberBackend { endpoint: string }
interface SuscriberBackendGet extends SuscriberBackend {}
interface SuscriberBackendPost extends SuscriberBackend { body: Record<string, unknown> }

interface UseBackend {
  get$: <T>({ endpoint } :SuscriberBackend) => Observable<T>
  post$: <T>({ endpoint, body }: SuscriberBackendPost) => Observable<T>
}

export const useBackend: UseBackend = {
  get$: <T>({ endpoint }: SuscriberBackendGet) => new Observable((suscriber: Subscriber<T>) => {
    axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}${endpoint}`)
      .then(({ data, status, statusText }: AxiosResponse) => {
        if (status === 200) { suscriber.next(data); suscriber.complete() }
        throw { status, statusText }
      })
      .catch((error) => suscriber.error({ error }))
  }),
  post$: <T>({ body, endpoint }: SuscriberBackendPost) => new Observable((suscriber: Subscriber<T>) => {
    axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}${endpoint}`, body)
    .then(({ data, status, statusText }: AxiosResponse) => {
      if (status === 200 || 201) return suscriber.next(data)
      throw { status, statusText }
    })
    .catch((error) => suscriber.error({ error }))
  })
}