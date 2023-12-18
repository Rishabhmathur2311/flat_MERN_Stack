export const FormatDate=({date})=>{
    const hours=new Date(date).getHours();
    const minutes=new Date(date).getMinutes();
    const day=new Date(date).getDate();
    const month=new Date(date).getMonth();
    const year=new Date(date).getFullYear();
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0'+minutes : minutes}-${day}/${month}/${year}`
}