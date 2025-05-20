//routes/events.js
const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
// Get all events
router.get('/', async(req, res) => {
 try {
 const events = await Event.find().sort({ date: 1 });
 res.json(events);
 } catch (error) {
 console.error('Error fetching events:', error);
 res.status(500).json({ message: 'Server error' });
 }
});
// Get event by ID
router.get('/:id', async(req, res) => {
 try {
 const event = await Event.findById(req.params.id);
 if (!event) {
 return res.status(404).json({ message: 'Event not found'
});
 }
 res.json(event);
 } catch (error) {
 console.error('Error fetching event:', error);
 res.status(500).json({ message: 'Server error' });
 }
});
// Create new event
router.post('/', async(req, res) => {
 try {
 const newEvent = new Event({
 title: req.body.title,
 date: req.body.date,
 location: req.body.location,
 description: req.body.description,
 imageUrl: req.body.imageUrl,
 capacity: req.body.capacity,
 fee: req.body.fee,
 registeredAttendees: []
 });
 const savedEvent = await newEvent.save();
 res.status(201).json(savedEvent);
 } catch (error) {
 console.error('Error creating event:', error);
 res.status(500).json({ message: 'Server error' });
 }
});
// Update event
router.put('/:id', async(req, res) => {
 try {
 const updatedEvent = await Event.findByIdAndUpdate(
 req.params.id,
 req.body, { new: true, runValidators: true }
 );
 if (!updatedEvent) {
 return res.status(404).json({ message: 'Event not found'
});
 }
 res.json(updatedEvent);
 } catch (error) {
 console.error('Error updating event:', error);
 res.status(500).json({ message: 'Server error' });
 }
});
// Delete event
router.delete('/:id', async(req, res) => {
 try {
 const deletedEvent = await
Event.findByIdAndDelete(req.params.id);
 if (!deletedEvent) {
 return res.status(404).json({ message: 'Event not found'
});
 }
 res.json({ message: 'Event deleted successfully' });
 } catch (error) {
 console.error('Error deleting event:', error);
 res.status(500).json({ message: 'Server error' });
 }
});
module.exports = router;