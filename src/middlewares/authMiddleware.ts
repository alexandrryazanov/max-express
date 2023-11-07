import jwt, {JwtPayload} from "jsonwebtoken";
import {NextFunction, Request, Response} from "express";

export default function authMiddleware (req: any, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization //'Bearer easjdfjnsdoUckbckjn'
  const token = authHeader?.split(' ')[1] || ''

  if (!token) {
    res.status(401).send('No token')
    return
  }

  let payload: JwtPayload | string
  try {
    payload = jwt.verify(token, 'secret-key')
  } catch (error) {
    res.status(401).send(error)
    return
  }

  req.userId = Number(payload.sub)
  
  next()
}