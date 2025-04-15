FROM node:20-slim

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy package files
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Serve the app
CMD ["serve", "-s", "dist", "-p", "3000"] 