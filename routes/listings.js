//routes/listings.js
const express = require('express');
const Listing = require('../models/Listing');
const router = express.Router();

// ✅ Get all listings
router.get('/', async(req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch listings' });
  }
});

// ✅ Search listings by title
router.get('/search', async(req, res) => {
  try {
    const { term } = req.query;
    const listings = await Listing.find({ title: new RegExp(term, 'i') });
    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to search listings' });
  }
});

// ✅ Filter listings by type
router.get('/type/:type', async(req, res) => {
  try {
    const listings = await Listing.find({ type: req.params.type });
    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to filter listings by type' });
  }
});

// ✅ Filter listings by category
router.get('/category/:category', async(req, res) => {
  try {
    const listings = await Listing.find({ category: req.params.category });
    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to filter listings by category' });
  }
});

// ✅ Get listing by ID
router.get('/:id', async(req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ error: 'Listing not found' });
    res.json(listing);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch listing' });
  }
});

// ✅ Add new listing
router.post('/', async(req, res) => {
  try {
    const newListing = new Listing(req.body);
    await newListing.save();
    res.json(newListing);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add listing' });
  }
});

module.exports = router;
