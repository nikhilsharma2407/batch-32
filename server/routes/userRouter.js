const express = require("express");
const authController = require("../controllers/authController");
const { signup, login, loginWithCookie, resetPassword, addFriend, removeFriend, logout } = require("../controllers/userController");
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login)
router.get('/login', loginWithCookie)
router.get('/logout', logout)
router.patch('/reset', resetPassword)

router.patch('/addFriend', authController, addFriend)
router.patch('/removeFriend', authController, removeFriend)
module.exports = router