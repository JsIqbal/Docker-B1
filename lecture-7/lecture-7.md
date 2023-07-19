## Container Manipulation with Docker

To run an image within a container, use the command: `docker run <image name>`

When you run this command:
1. Docker CLI checks if the command is valid.
2. Docker server checks if the image is in cache. If not, it pulls the image from Docker Hub and saves it in cache.
3. The image creates a container, which is a logical computer.
   - The container consists of a portion of RAM, hard drive, network bandwidth, CPU (which can be a single processor), and the kernel, forming a mini computer.
4. Tasks performed after creating the container:
   - The file system snapshot or software is copied.
   - The software is stored in the hard drive of the mini computer.
   - The startup command is executed.
   - The software is loaded from the hard drive to the RAM, creating a process.
   - The container starts working like a computer system.

You can modify the startup command to start the image differently. For example:
- `docker run busybox echo iqbal`: Changes the default startup command of the Busybox image to `echo iqbal`.

You can override any startup command of an image if the command exists in the file system.

- `docker ps`: View running Docker processes (containers).
- `docker run busybox ls`: View the list of Busybox commands (kept in the `bin` folder).
- `docker run hello-world echo iqbal`: Throws an error because the `hello-world` image does not have the `echo` command in its `bin` folder.

Creating and running a container from an image with an overwritten command:
- `docker run <image name> command`

Additional Docker Commands:

- `docker ps`: View running Docker containers.
- `docker ps --all` or `docker ps -a`: View all running and stopped containers.
- `docker stop <container id>`: Stop a running container.
- `docker rm <container id>`: Remove a container.
- `docker create <image name>`: Create a container without running it.
- `docker start <container id>`: Start a created container.
- `docker kill <container id>`: Terminate a container's process immediately.
- `docker system prune`: Remove all stopped containers, networks not used by any container, dangling images, and dangling build cache.
- `docker stop $(docker ps -q)` : stop all the running containers at once.

```note
Let's break down the command:

docker ps: This command lists all the running containers on your system.

$(docker ps -q): This part of the command executes the docker ps -q command,
which outputs only the container IDs of the running containers.
The output is then used as input for the docker stop command.

docker stop: This command is used to stop one or more running containers.

When you run the full command, it will stop all the running containers by passing their IDs to the docker stop command.
Each container will be gracefully stopped,
allowing it to perform any necessary cleanup before shutting down.
```

| Command                           | Description                                           |
|-----------------------------------|-------------------------------------------------------|
| `docker create <image name>`      | Create a container without running it                 |
| `docker start <container id>`     | Start a created container                             |
| `docker run <image name> command` | Run an image with an overwritten command               |
| `docker stop <container id>`      | Stop a running container                              |
| `docker rm <container id>`        | Remove a container                                    |
| `docker ps`                       | View running Docker containers                        |
| `docker ps --all` or `docker ps -a` | View all running and stopped containers              |
| `docker kill <container id>`      | Terminate a container's process immediately           |
| `docker system prune`             | Remove stopped containers, unused networks, dangling images, and build cache |

**Note:** The above commands should be executed in a terminal or command line interface (CLI).

