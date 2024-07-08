# Dockerfile for NodeJS backend

# Use the official Node.js image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose port and start the app
EXPOSE 5000
CMD ["node", "server.js"]
