const express = require("express");
const authController = require("../controllers/authController");
const { signup, login, loginWithCookie, resetPassword, addFriend, removeFriend } = require("../controllers/userController");
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login)
router.get('/login', loginWithCookie)
router.patch('/reset', resetPassword)

router.patch('/addFriend', authController, addFriend)
router.patch('/removeFriend', authController, removeFriend)
module.exports = router