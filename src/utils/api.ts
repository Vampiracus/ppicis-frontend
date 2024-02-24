import { createNotification } from './notification'

type ConfigType = {
    noJSONBody?: true
    noNotification?: true
    saveStatus?: true
}

/**
 * A prettier fetch
 * @param input url
 * @param body a json to be passed as request's body
 * @param [headers={}] set request's headers in this json
 * @param [config={}] configuration. Pass in noJSONBody: true to send strings or files, noNotification: true to not create a notification, saveStatus to add property "status": number to the response — it is the status the server responded with
 */
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

    let status: number
    return fetch(input, init)
        .then(res => {
            status = res.status
            return res.json()
        })
        .then(json => {
            if (!config.noNotification) {
                createNotification(json.message)
            }
            if (config.saveStatus) {
                json.status = status
            }
            return json
        }) as Promise<{ message: string, status?: number } & ReturnType>
}