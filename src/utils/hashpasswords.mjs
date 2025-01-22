import bcrypt from 'bcryptjs';

// Hashes a password
export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

// Compares a password with a hashed password
export const comparePassword = async (password, hash) => bcrypt.compare(password, hash);
