const pool = require('../db');
const bcrypt = require('bcrypt');

const createUser = async (uid,fullName, email, gender, password) =>{
  try {
    const connection = await pool.getConnection();
        const salt = await bcrypt.genSalt(8);
        password = await bcrypt.hash(password, salt);
        const [result] = await connection.
        execute('INSERT INTO users(id, fullName, email, gender, auth_string) VALUES(?, ?, ?, ?, ?);',
        [uid,fullName, email, gender,password]);
        connection.release();

        return result;
    } catch (error) {
        throw error;
    }
}

const emailExists = async (email) =>{
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.
        execute('SELECT * FROM users WHERE email = ?', [email]);
        connection.release();
        
        return rows.length > 0;
    } catch (error) {
        throw error;
    }
}

const findUserWithId = async (uuid) =>{
  const connection = await pool.getConnection();
  try {
      const [rows] = await connection.execute('SELECT * FROM users WHERE id = ?', [uuid]);
      connection.release();
      
      return rows;
  } catch (error) {
      throw error;
  }
}

const getUser = async (email) =>{

    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
        connection.release();

        return rows;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    findUserWithId,
  emailExists,
  createUser,
  getUser,
};
