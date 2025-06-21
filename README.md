# EventPulse – Community Events Hub
EventPulse is a full-stack web platform designed to bring communities together through local events, donations, and a built-in marketplace. 

With user authentication, MongoDB-backed data handling, and interactive UI pages, the app fosters meaningful engagement between individuals and local organizations.

Whether you're hosting an event, browsing for local services, or contributing to a cause, EventPulse provides an accessible and engaging experience for everyone.  

## Features
1. User Authentication: Signup/Login with secure session handling.
   
2. Events Page: Browse and join upcoming community events.
   
3. Services Marketplace: Post or explore local listings (items & services).
   
4. User Profile: View and manage your personal listings or registered events.
   
5. Donation Page: Make a difference with online contributions.
    
6. About / Contact Pages: Learn more about the mission and reach out directly.
    
7. Feedback & Reviews: Submit and view community feedback.

## Tech Stack
1. Frontend: HTML, CSS, JavaScript
   
2. Backend: Node.js, Express.js
   
3. Database: MongoDB, Moongoose
   
4. Authentication: bcryptjs
   
5. Icons & Fonts: Font Awesome, Google Fonts

## Setup Instructions
1. Clone the Repository
```
git clone https://github.com/your-username/eventpulse.git
cd eventpulse
```
2. Install Dependencies
```
npm install
```
3. Configure Environment Variables
Create a ```.env``` file:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/eventpulse
SESSION_SECRET=your_secret
```
4. Start the Server
```
npm start
```
Server will run at ```http://localhost:3000```

