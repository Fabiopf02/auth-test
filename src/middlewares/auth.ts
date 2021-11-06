import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../utils/token';

export function authMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const { authorization } = request.headers;

    if (!authorization) {
      return response.status(401).json({ error: 'Nenhum token fornecido!' });
    }

    const parts = authorization.split(' ');

    if (parts.length !== 2) {
      return response.status(401).json({ error: 'Token malformado!' });
    }

    const [string, token] = parts;

    if (!/^Bearer$/i.test(string) || !token) {
      return response.status(401).json({ error: 'Token inválido!' });
    }

    const id = verifyToken(token);

    if (!id) {
      return response.status(401).json({ error: 'Operação não permitida!' });
    }

    if (request.headers.id !== id) {
      return response.status(401).json({ error: 'Operação não permitida!' });
    }

    next();
  } catch (err: any) {
    return response
      .status(400)
      .json({ error: err.message || 'Erro inesperado!' });
  }
}
