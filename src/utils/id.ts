import { v4 as uuid } from 'uuid';

export function generateUniqueId() {
  const id = uuid();

  return id;
}
