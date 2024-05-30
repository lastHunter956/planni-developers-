import bcrypt from 'bcrypt'
import { env } from '../../options/env.js'

// Función para encriptar una contraseña
const hashPassword = async (password) => {
  // Generar una sal
  const saltRounds = parseInt(env.SALT_ROUNDS) // Número de rondas de hashing
  const salt = await bcrypt.genSalt(saltRounds)

  // Generar el hash de la contraseña utilizando la sal
  const hashedPassword = await bcrypt.hash(password, salt)

  return hashedPassword
}

export { hashPassword }
