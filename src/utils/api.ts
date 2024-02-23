import { createNotification } from './notification'

type ConfigType = {
    noJSONBody?: true
    noNotification?: true
}

export function configuredFetch<ReturnType = object>(
    input: RequestInfo | URL,
    config: ConfigType & RequestInit = {},
    body?: Record<string, any>,
    headers: Record<string, string> = {}
) {
    const init = {
        credentials: 'include' as const,
        
        ...config,
    }
    if (!config.noJSONBody && config.method !== 'GET') {
        headers['content-type'] = 'application/json'
        init.body = JSON.stringify(body)
    }
    init.headers = new Headers(headers)
    return fetch(input, init)
        .then(res => res.json())
        .then(json => {
            if (!config.noNotification) {
                createNotification(json.message)
            }
            return json
        }) as Promise<{ message: string } & ReturnType>
}