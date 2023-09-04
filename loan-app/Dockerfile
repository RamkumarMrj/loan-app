# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Angular CLI and project dependencies
RUN npm install -g @angular/cli && npm install

# Copy the entire Angular app to the container
COPY . .

# Expose port 4200 (the default Angular development server port)
EXPOSE 4200

# Start the Angular development server
CMD ["ng", "serve", "--host", "0.0.0.0"]
