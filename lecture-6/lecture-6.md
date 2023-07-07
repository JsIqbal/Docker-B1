## Docker Basics

- To check the version of Docker: `docker --version`
- To check if Docker is working fine: `docker run hello-world`

When using Docker, it is important to understand the underlying operating system. For Docker, Ubuntu is commonly used, and many commands will be performed within an Ubuntu environment.

To work with Docker:
1. Go to Docker Hub and check the available operating systems.
2. Pull the Ubuntu image from Docker Hub: `docker pull ubuntu`
3. Run the Ubuntu image: `docker run ubuntu`
4. To run Ubuntu in interactive mode: `sudo docker run -it ubuntu` (You will see the command prompt as `root@<container_id>:/#`)
5. To run Ubuntu and access the shell: `sudo docker run -it ubuntu sh` (You will see the command prompt as `#`)

Inside the Ubuntu container, you can use various commands such as `ls`, `cd`, `pwd`, etc. All commands that are available in Ubuntu can be executed inside Docker.

Docker provides an Ubuntu environment within minutes, allowing for easy testing and execution of commands.

## Docker Overview

Docker is an ecosystem or platform, similar to a food chain, and consists of the following components:

1. Docker client
2. Docker server (daemon)
3. Docker machine
4. Docker images
5. Docker Hub (a website for sharing Docker images)
6. Docker Compose (used for defining and running multi-container Docker applications)

The main purpose of Docker is to create and run containers. A container is an instance of an image.

When installing Docker, a Docker machine is typically installed, which consists of the Docker client and Docker server. The Docker client sends commands to the Docker server (daemon), which is a large process responsible for handling requests.

To pull an image from Docker Hub, the `docker pull <image>` command is received by the Docker CLI, instructing it to execute the "pull" command. This command is then sent to the Docker server (daemon).

An image is a single file that contains the software, its dependencies, and configurations. It is a snapshot of the file system.

Images are used to create containers. Containers are instances of images. Multiple containers can be created using a single image.

The benefits of using Docker include:
1. Simplified software installation without worrying about setup or dependencies.
2. Ensuring consistency across different machines and environments.
3. Easy portability and scalability of applications.

To list running containers, you can use the `docker ps` command.

The `docker run <image>` command starts and destroys a Docker container.

To access the shell within a container, you can use the `docker run -it <image> sh` command.

Inside the container, you can perform various operations, such as creating directories (`mkdir`), changing directories (`cd`), etc. The prompt may show `#` for the root user or `$` for a normal user.

Components of an operating system include process management, interprocess communication, process scheduling, memory management, and file system management. Linux is popular for its file system.

Linux treats every software as a file. When something is installed in Linux, it is saved on the hard drive as a file.

In Linux, processes communicate with hardware through system calls made to the kernel. The kernel is responsible for managing CPU, memory, and hard disk resources.

Isolating hard drive resources is possible in Linux through a concept called namespacing. Namespacing allows the kernel to provide different versions of software based on system calls made by different processes.

Containers also utilize namespacing and control groups to isolate resources. A container consists of a portion of RAM, CPU, network, hard drive, and the kernel, all together forming a mini-computer.

## Summary

- Docker is a platform that allows for the creation and management of containers.
- Images are snapshots of file systems, containing software, dependencies, and configurations.
- Containers are instances of images, providing isolated environments for running applications.
- Docker Hub is a repository for sharing and accessing Docker images.
- Docker client communicates with the Docker server (daemon) to execute commands and manage containers.
- Docker allows for simplified software installation, consistency across environments, and easy portability of applications.
- Containers utilize namespacing and control groups to isolate resources and provide an environment similar to a mini-computer.
