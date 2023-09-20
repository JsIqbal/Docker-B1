## How to Create a Docker Image?

- `docker build .`: To create an image from a Dockerfile without any name.
- `docker rmi <image_id>`: To delete an image.
- `docker build -t myimage .`: Create an image with the name "myimage." The `-t` flag means tag, which will be "latest" by default.
- `docker build -t myimage:iqbal .`: Create an image with the name "myimage" and tag it as "iqbal."
- `docker rmi <image name>:<image tag>`: To delete an image with specific tag.

To create a server: a computer that runs 24/7.

Suppose that computer has the following specifications:
- 2GB RAM
- 500GB hard drive
- 12-core processor

It can be considered as 10 thousand computers.

Buying hosting means: rent a computer for a year for 2500 tk.

For the rented computer, there is a C drive and an E drive.

To access the rented computer, use SSH with the following command:

```sh
ssh <computer_username>@<computer_ip>
 ```

You will be prompted for a password if valid.

A domain can be used to simplify the IP address. Suppose there is an IP address: 176.29.12.2. Instead of remembering this complex IP, a domain like iqbal.com can be purchased for 3k.

The host computer's IP address gets mapped with the domain name iqbal.com.

### Setting Up a Server with Nginx and Docker

#### Setting Up Nginx on the Remote Computer:

1. **Install Nginx:** On the remote computer, install Nginx.

2. **Place HTML Files:** Keep all the HTML files you want to serve in the `/var/www/html` directory. This is where Nginx will look for web content.

3. **Configure Nginx:** Write your Nginx configuration script in `/etc/nginx/nginx.conf`. You can customize this file to define server blocks, routes, and other settings.

4. **Restart Nginx:** After making changes to the Nginx configuration, restart Nginx to apply the new settings.

5. **Set Domain or Host:** Configure your DNS settings or host file to map your domain (e.g., `iqbal.com`) to the IP address of your remote server.

6. **Homepage:** Set up your server so that when users access `iqbal.com/home`, the homepage is served from the server.

#### Creating a Dockerized Nginx Server:

1. **Create a Dockerfile:** In the folder where you want to set up the Dockerized Nginx server, create a Dockerfile with a capital "D" (i.e., `Dockerfile`).

2. **Define the Dockerfile:**

```Dockerfile
# Use the Nginx base image from Docker Hub.
FROM nginx:alpine

# Set the working directory inside the container to /app.
WORKDIR /app

# Copy the 'app.html' file from the host to the /app folder in the container.
COPY ./app.html .

# Copy the 'nginx.conf' file from the host to the Nginx configuration folder in the container.
COPY ./nginx.conf /etc/nginx/nginx.conf


```
This Dockerfile uses the official Nginx base image from Docker Hub, sets up a working directory inside the container, and copies your HTML and Nginx configuration files into it.

Build the Docker Image: Run the following command in the same directory as your Dockerfile to build the Docker image:
```bash
docker build -t my-nginx-image .
```

```This command tags the image as "my-nginx-image." You can choose any name you prefer.

Create and Run a Docker Container: Run the following command to create and run a Docker container from the image while mapping port 80:
```bash
docker run -d -p 80:80 my-nginx-image
```

- d: Runs the container in detached mode.
- p 80:80: Maps port 80 from the host to port 80 in the container.
Now, your Nginx server is running in a Docker container, serving your app.html file and using the custom nginx.conf configuration. Users can access your website by navigating to the domain or IP address of your remote server.

By following these steps, you have set up a server with Nginx and created a Dockerized Nginx server for serving web content with custom configurations.
