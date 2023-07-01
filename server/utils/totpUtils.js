const speakeasy = require('speakeasy');
const QRcode = require('qrcode');

const generateQRcode = async () => {
    const { base32: secret, otpauth_url } = speakeasy.generateSecret({ name: 'GeeksForGeeks' });
    const qrcode = await QRcode.toDataURL(otpauth_url);

    return { secret, qrcode };
}

const verifyOTP = (token, secret) => speakeasy.totp.verify({ secret, token, encoding: 'base32' })

module.exports = { generateQRcode, verifyOTP }