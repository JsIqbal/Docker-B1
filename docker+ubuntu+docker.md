# Installing Docker Inside an Ubuntu Container

This guide explains how to install Docker inside an Ubuntu container and use Docker to run the `hello-world` container within it. Please note that running Docker inside a container is typically used for specific scenarios and may not be suitable for all use cases.

## Prerequisites

-   Docker installed on your host system.
-   Basic knowledge of Docker and Linux commands.

## Installation Steps

1. **Start an Ubuntu Container:**

    ```bash
    docker run -it ubuntu
    Update the Package List and Install Dependencies:
    ```

```bash
apt update
apt install -y apt-transport-https ca-certificates curl software-properties-common
```

Add Docker's GPG Key:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
```

Add Docker Repository:

```bash
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```

Update the Package List Again:

```bash
apt update
```

Install Docker:

```bash
apt install -y docker-ce
```

Start the Docker Daemon:

```bash
systemctl start docker
```

Enable Docker to Start on Boot:

```bash
systemctl enable docker
```

Check Docker Version:

```bash
docker --version
```

Running Docker Inside the Container
After installing Docker inside the Ubuntu container, you may encounter issues where the container reports that the Docker daemon is not running. To resolve this, follow these steps:

Open a New Terminal on Your Host System.

-   run the container using:

```bash
docker run --privileged -it my-custom-ubuntu-image
```

Start the Docker Daemon Inside the Container:

```bash
dockerd
```

Connect to the Running Ubuntu Container:

```bash
docker exec -it <container_name_or_id> /bin/bash
```

-   Replace <container_name_or_id> with the actual name or ID of your running Ubuntu container.

In the Same Terminal, Run Other Docker Commands as Needed.

Important Notes
Running Docker inside a container is typically used for specific scenarios like testing and development. It may not be suitable for production environments.
Be cautious when running containers with elevated privileges, as it can affect security.
Always consider the security implications and your specific use case before running

**_ To save current container information _**

find the container info first:

```bash
docker ps -a
```

-   make a commit for the container :

```bash
docker commit <container_id> my-custom-ubuntu-image
or
docker commit <container_id> <repository>:<tag>
docker commit 1234567890 my-custom-ubuntu:1.0
```

### EXTRAS:
docker run -p 3004:3004 --privileged -it -v /c/volume-map/static-html:/home/html  my-custom-ubuntu-image
docker run -p 3004:80 -v '/\Program Files\Git\home\html:/usr/share/nginx/html' nginx
