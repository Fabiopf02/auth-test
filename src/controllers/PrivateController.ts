import { Request, Response } from 'express';
import { wait } from '../utils/wait';

export async function PrivateController(request: Request, response: Response) {
  try {
    const { time } = request.headers;
    if (time) {
      await wait(Number(time));
    }
    return response.status(200).json({ status: 'Sucesso!' });
  } catch (err: any) {
    return response
      .status(400)
      .json({ error: err.message || 'Erro inesperado!' });
  }
}
