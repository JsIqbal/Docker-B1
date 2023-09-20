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

How to Set Up a Server:
Setting Up Nginx

In the remote computer:

Install Nginx.
Keep all the HTML files in /var/www/html.
Write the script in /etc/nginx/nginx.conf and restart Nginx.
iqbal.com/home -> The homepage will be taken from the server.
Now, we will create a server in Docker inside the server folder.

Create a Dockerfile with a capital D.

Resource: Serve Static Files with Nginx in Docker

We use Dockerfile to create an image.

FROM nginx:alpine  # Base image. This line will install Nginx.

docker exec -it <nginx-image-id> sh  # Interact with the Nginx file system.

WORKDIR /app  # Create a folder named 'app' and get inside it.

# Now, we want to take 'app.html' and 'nginx.config' inside the folder 'app'.
COPY ./app.html .  # Here, './app.html' is the source and the destination is inside '/app'.

COPY ./nginx.conf /etc/nginx/nginx.conf

```note
    1. create a docker container and forward port
    2. how to get inside the docker using exec
    3. craete image : 80%
    4. domain, host, server
    5. nginx
```
