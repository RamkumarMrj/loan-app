# Use the official Python image as the base image
FROM python:3.8

# Set environment variables for Flask
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

# Create and set the working directory in the container
WORKDIR /app

# Copy the requirements.txt file to the container
COPY requirements.txt requirements.txt

# Install Flask and other required packages
RUN pip install -r requirements.txt

# Copy the entire Flask app to the container
COPY . .

# Expose the port your Flask app will run on (e.g., 5000)
EXPOSE 5000

# Start the Flask app
CMD ["flask", "run"]
