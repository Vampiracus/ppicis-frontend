import { createNotification } from './notification'

type ConfigType = {
    noJSONBody?: true
    saveStatus?: true
    notification?: {
        none?: true
        onSuccess?: true
        onFail?: true
    }
}

/**
 * A prettier fetch
 * @param input url
 * @param body a json to be passed as request's body
 * @param [headers={}] set request's headers in this json
 * @param [config={}] configuration. 
 * Pass in noJSONBody: true to send strings or files
 * notification: 
 *  none - no notification is created
 *  onFail - notification is created if status code > 399
 *  onSuccess - notification is created if status code < 400
 * saveStatus to add property "status": number to the response — it is the status the server responded with
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
            if (!config.notification?.none) {
                if (!config.notification 
                    || status < 400 && config.notification.onSuccess
                    || status > 399 && config.notification.onFail) {
                    createNotification(json.message)
                }
            }
            if (config.saveStatus) {
                json.status = status
            }
            return json
        }) as Promise<{ message: string, status?: number } & ReturnType>
}