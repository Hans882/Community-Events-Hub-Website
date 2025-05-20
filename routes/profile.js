//routes/profile.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middleware/auth'); // Make sure you have this

// Profile update route
router.post('/update', auth, async (req, res) => {
  const { phoneNumber, address } = req.body;
  try {
    // Find user by authenticated ID and update
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { phoneNumber, address },
      { new: true, runValidators: true }
    );
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json({
      msg: 'Profile updated successfully',
      user: {
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        address: user.address
      }
    });
  } catch (err) {
    console.error('Profile update error:', err);
    res.status(500).json({ msg: 'Server error updating profile' });
  }
});

module.exports = router;