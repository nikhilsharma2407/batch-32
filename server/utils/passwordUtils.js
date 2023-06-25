const { compare, genSalt, hash } = require('bcrypt');

const generatePasswordHash = async (password) => {
    const salt = await genSalt();
    const pwdHash = await hash(password, salt);
    return pwdHash;
};

const verifyPassword = (password, pwdHash) => {
    return compare(password, pwdHash)
}


module.exports = { generatePasswordHash, verifyPassword }