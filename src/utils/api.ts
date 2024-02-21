type fetchArgs = [input: RequestInfo | URL, init?: RequestInit | undefined]

export function configuredFetch<returnType>(...args: fetchArgs) {
    return fetch(args[0], {
        credentials: "include",
        ...args[1]
    })
        .then(res => res.json()) as Promise<returnType>
}