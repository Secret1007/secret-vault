import * as cryptojs from 'crypto-js';

function encryptAndStorePrivateKey(privateKey: string, password: string) {
  // Derive a key using PBKDF2
  const salt = cryptojs.lib.WordArray.random(16);
  const key = cryptojs.PBKDF2(password, salt, { keySize: 256 / 32 });

  console.log("---------", privateKey, key)
  // Encrypt the private key using AES
  const encrypted = cryptojs.AES.encrypt(privateKey, key).toString();

  // Store encrypted private key, salt, etc., in localStorage
  // localStorage.setItem('encryptedPrivateKey', encrypted);
  // localStorage.setItem('privateKeySalt', salt.toString());

  console.log("Private key encrypted and stored in localStorage.");
}

function decryptPrivateKeyFromStorage(password: string) {
  // Retrieve encrypted private key and salt from localStorage
  const encryptedPrivateKey = localStorage.getItem('encryptedPrivateKey');
  const salt = localStorage.getItem('privateKeySalt');

  if (!encryptedPrivateKey || !salt) {
    console.error("No encrypted private key or salt found in localStorage.");
    return null;
  }

  // Derive the key from the password and salt
  const key = cryptojs.PBKDF2(password, cryptojs.enc.Hex.parse(salt), { keySize: 256 / 32 });

  // Decrypt the private key
  const bytes = cryptojs.AES.decrypt(encryptedPrivateKey, key);
  const privateKey = bytes.toString(cryptojs.enc.Utf8);

  console.log("Decrypted private key:", privateKey);
  return privateKey;
}

export {
  encryptAndStorePrivateKey,
  decryptPrivateKeyFromStorage
}