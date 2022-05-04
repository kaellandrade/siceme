import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Valida o header
  if (!authHeader) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  // A desestruturação quebra o 'bearer' e o token
  // em dois, mas pega apenas o token
  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.uso_id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inváido' });
  }

  return next();
};
