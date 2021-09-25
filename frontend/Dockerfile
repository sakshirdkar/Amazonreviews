FROM node:latest as build

# Set the working directory
WORKDIR /usr/src/app/frontend

# Install all the dependencies
COPY package*.json ./
RUN npm install

# Add the source code to app
COPY . .

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/src/app/frontend/dist/frontend /usr/share/nginx/html

# Expose port 80
EXPOSE 80