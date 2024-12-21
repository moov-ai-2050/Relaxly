# Step 1: Use a Node.js base image
FROM node:16-alpine

# Step 2: Create a new user and set it as the working user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Step 3: Set working directory inside the container
WORKDIR /app

# Step 4: Copy package.json and package-lock.json files
COPY package*.json ./

# Step 5: Install dependencies
RUN npm install

# Step 6: Install NativeScript CLI globally
RUN npm install -g nativescript

# Step 7: Copy the rest of the application code
COPY . .

# Step 8: Expose the default NativeScript port
EXPOSE 8080

# Step 9: Define the default command to start the app
CMD ["npm", "run", "start"]
