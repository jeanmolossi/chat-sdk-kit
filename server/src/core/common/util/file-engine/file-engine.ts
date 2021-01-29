import { randomBytes } from 'crypto';
import { Request } from 'express';

type EngineReturn = void;

export default (
  request: Request,
  file: any,
  callback: (error: Error, filename: string) => void,
): EngineReturn => {
  const fileHash = randomBytes(12).toString('hex');
  const fileName = `${fileHash}-${file.originalname}`;

  return callback(null, fileName);
};
