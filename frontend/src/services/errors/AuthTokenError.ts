export class AuthTokenError extends Error {
  constructor() {
    super('Você não tem permissão para acessar essa página');
  }
}