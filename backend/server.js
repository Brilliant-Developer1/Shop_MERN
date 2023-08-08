const app = require('./app');
const cors = require('cors');
const connectDatabase = require('./Database/Database');
// const cloudinary = require('cloudinary');

// Handling Error
process.on('uncaughtException', err => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server for handling uncaught exception`);
});

// config
if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: 'config/.env',
  });
}

// Database connect
connectDatabase();

// Configure CORS options
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true, // Allow cookies and authentication headers
};

// Use the CORS middleware with options
app.use(cors(corsOptions));

// server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// unhandled rejection
process.on('unhandledRejection', err => {
  console.log(`Shutting down the server for ${err.message}`);
  console.log(`Shutting down the server for unhandle promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
