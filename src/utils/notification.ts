export function createNotification(msg: string) {
    const el = document.createElement('div')
    const remove = () => el.remove()
    
    const h2 = document.createElement('h3')
    h2.textContent = 'Уведомление:'

    const span = document.createElement('span')
    span.textContent = msg
    
    el.appendChild(h2)
    el.appendChild(span)
    el.onclick = remove

    document.body.appendChild(el)
    el.classList.add('notification')
    setTimeout(remove, 4000)
}