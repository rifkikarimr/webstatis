# Use a lightweight web server image
FROM nginx:alpine

# Set the working directory to /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# Copy the contents of the local 'app' directory to the working directory
COPY . /app

# Expose port 80 to allow external access
EXPOSE 80

# Command to start the nginx server
CMD ["nginx", "-g", "daemon off;"]