import { Request, Response } from 'express';
import { generateUniqueId } from '../utils/id';
import { generateToken } from '../utils/token';
import { wait } from '../utils/wait';

export async function AuthController(request: Request, response: Response) {
  try {
    const data = request.body;
    const { time } = request.headers;

    if (time) {
      await wait(Number(time));
    }

    if (!data) {
      return response.status(400).json({ error: 'Ocorreu um erro!' });
    }

    Object.keys(data).map((key) => {
      if (!String(data[key]).length) {
        throw new Error(`Erro na propriedade '${key}'`);
      }
    });

    let expiresIn = Number(request.headers.expiresin);
    if (!expiresIn) {
      expiresIn = Math.floor(Math.random() * 400 + 100);
    }

    delete data.password;
    delete data.senha;

    const id = generateUniqueId();

    const token = generateToken(id, expiresIn);

    return response
      .status(201)
      .json({ user: { id, ...data, createdAt: new Date() }, expiresIn, token });
  } catch (err: any) {
    return response
      .status(400)
      .json({ error: err.message || 'Erro inesperado!' });
  }
}
