# Use Node.js as base image
    FROM node:18-alpine

    # Install build dependencies
    RUN apk add --no-cache python3 make g++

    # Set working directory
    WORKDIR /app

    # Copy package.json and package-lock.json
    COPY package*.json ./

    # Install dependencies
    RUN npm install

    # Copy the rest of the application code
    COPY . .

    # Build the application
    RUN npm run build

    # Expose port 3452
    EXPOSE 3452

    # Start the application
    CMD ["npm", "run", "preview"]
