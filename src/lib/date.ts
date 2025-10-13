export const format = (date:string) => {
    const newDate = new Date(date)

    return newDate.toLocaleString('en-US')
}