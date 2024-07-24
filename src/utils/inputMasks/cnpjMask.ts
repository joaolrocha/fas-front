export function cnpjMask(cnpj: string): string {
    const cnpjMaxLength = 18;
  
    return cnpj
      .slice(0, cnpjMaxLength)
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2");
}
  
export function removeCnpjMask(cnpj: string): string {
    return cnpj.replace(/\D/g, "").slice(0, 18);
}