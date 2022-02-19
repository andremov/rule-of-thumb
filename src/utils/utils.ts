export function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
}

export function distanceFrom(date: Date): string {
    const now = new Date()
    const dateFields = [
        {
            func: 'getFullYear',
            name: 'year',
        },
        {
            func: 'getMonth',
            name: 'month',
        },
        {
            func: 'getDate',
            name: 'day',
        },
    ]

    for (const index in dateFields) {
        const item = dateFields[index]
        // @ts-ignore
        const distance = now[item.func].call(now) - date[item.func].call(date)
        if (distance > 0) {
            return `${distance} ${item.name}${distance > 1 ? 's' : ''} ago`
        }
    }

    return 'Today'
}
