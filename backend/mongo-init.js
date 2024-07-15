// mongo-init.js
db = db.getSiblingDB('packers_movers'); // use or create the database named 'packers_movers'

db.createCollection('inquiries', { capped: false });
db.createCollection('bookings', { capped: false });

print("Database and collections created.");