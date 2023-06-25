const express = require("express");
const { signup, login, loginWithCookie } = require("../controllers/userController");
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login)
router.get('/login', loginWithCookie)
module.exports = router