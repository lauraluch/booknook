export function mapLoginErrorMessages(errorCode: number) {
  if (errorCode === 401) return "Senha inválida.";
  if (errorCode === 404) return "Este usuário não existe na base de dados...";
  return "Erro na requisição. Tente de novo mais tarde.";
}
