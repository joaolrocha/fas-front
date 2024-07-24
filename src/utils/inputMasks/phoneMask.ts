export function phoneMask(phone: string): string {
    const phoneMaxLength = 15;
  
    return phone
      .slice(0, phoneMaxLength)
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d)(\d{4})$/, "$1-$2"); 
}
  
export function removeMask(phone:string):string {
    return phone.replace(/\D/g, "").slice(0, 15)
}