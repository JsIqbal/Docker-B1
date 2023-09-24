# Docker Image Creation and Usage Guide

## Introduction

This guide will walk you through the process of creating Docker images and using them to scale a software application with load balancing. Docker is a powerful tool for containerization, allowing you to package applications and their dependencies into portable containers.

## Prerequisites

Before you begin, make sure you have Docker installed on your system. You can download Docker from the official website: [Docker Download](https://www.docker.com/get-started).

## Docker Image Creation

### Step 1: Create a Dockerfile

First, you need to create a Dockerfile. This file defines the instructions to build a Docker image. For example, let's consider a simple Dockerfile:

````Dockerfile
# Use the nginx:alpine base image
FROM nginx:alpine

# Copy the contents of the 'static-html' folder to the nginx web server's root directory
COPY static-html /usr/share/nginx/html
```
Step 2: Build the Docker Image
Navigate to the directory containing your Dockerfile and execute the following command to build the Docker image:

docker build -t <custom-image-name>:<custom-tag> .
For instance, if you want to name your image "nginx-iq" with the tag "v-1," you would run:

docker build -t nginx-iq:v-1 .
This command tells Docker to build an image based on the instructions in your Dockerfile and assign it the specified name and tag.

Step 3: Verify Image Creation
After successfully running the build command, you can check that the image has been created by using:

docker images
You should see your custom image listed with the repository name and tag you provided.

Scaling with Docker Containers and Load Balancer
To scale a software application using Docker containers and a load balancer, follow these steps:

Create a Docker image for your application, as explained in the previous section.

Deploy multiple instances of your Docker container by running multiple containers from the same image:

```bash
docker run -d --name container1 <custom-image-name>:<custom-tag>
docker run -d --name container2 <custom-image-name>:<custom-tag>
````

# Add more containers as needed [KUBARNATES]

This creates multiple containers from the same image to handle incoming requests.

Set up a load balancer, which can be a separate Docker container or a dedicated load balancing service, to distribute incoming requests among your containers.

Configure the load balancer to forward requests to the containers based on load or specific criteria, ensuring efficient resource utilization.

Test your setup by sending requests to the load balancer's endpoint. It should distribute the requests to the containers, effectively scaling your application.

-   Conclusion
    Docker simplifies the process of creating and scaling software applications by encapsulating them in containers. With the use of Dockerfiles and Docker images, you can easily package and deploy your applications. Combining Docker containers with a load balancer allows you to distribute traffic among multiple containers, ensuring high availability and scalability for your software.
