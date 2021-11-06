import { sign, verify } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

interface IDecoded {
  id: string;
}

export function verifyToken(token: string) {
  const response = verify(token, secret!) as IDecoded;

  return response.id;
}

/**
 * @param id
 * @param expiresIn number (seconds)
 * @returns
 */
export function generateToken(id: string, expiresIn: number) {
  const token = sign({ id }, secret!, {
    expiresIn,
  });

  return token;
}
