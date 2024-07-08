// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());
// app.use(cors());

// mongoose.connect('mongodb://localhost:27017/mywebapp', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const InquirySchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String,
//   details: String,
//   quotation: Number,
// });

// const Inquiry = mongoose.model('Inquiry', InquirySchema);

// app.post('/inquiries', async (req, res) => {
//   const { name, email, phone, details } = req.body;
//   const quotation = calculateQuotation(details); // Add your custom logic here
//   const newInquiry = new Inquiry({ name, email, phone, details, quotation });
//   await newInquiry.save();
//   res.send(newInquiry);
// });

// app.get('/inquiries', async (req, res) => {
//   const inquiries = await Inquiry.find();
//   res.send(inquiries);
// });

// function calculateQuotation(details) {
//   return details.length * 10; 
// }

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/packers-movers', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/api/inquiries', require('./routes/inquiries'));
app.use('/api/bookings', require('./routes/bookings'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
