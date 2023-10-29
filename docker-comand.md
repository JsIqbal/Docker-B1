# UNDER CONSTRUCTION

## Docker Commands

- `docker ps`: Lists Docker processes (running containers)
- `docker image`: Lists Docker images pulled on the machine
- `docker run -it ubuntu` or `winpty docker run -it ubuntu`: Runs the Ubuntu image in a Docker container
    - `root@123wers12:/#`: The prompt inside the container
        - `root`: The user
        - `@`: Divider
        - `123wers12`: The operating system's machine name
        - `/`: The directory
        - `#`: Superuser
        - `$`: Normal user
- `ctrl + l`: Changes the view in Git Bash
- `echo <whatever you want>`: Prints the given text

## Requirements for the Next Class

- Ubuntu OS installed
- Docker installed
- Pull an Ubuntu image from Docker Hub inside Docker

Additional Docker Commands:

- `docker ps`: Lists Docker containers
- `docker run ubuntu`: Starts and destroys a Docker container
- `docker run -it ubuntu sh`: Starts the Ubuntu image in a container and gets inside the container
    - `it`: Interactive mode (option)
    - `sh`: Starts an interactive shell inside the Ubuntu container
- `mkdir iqbal`: Creates a new directory
- `cd`: Changes the current directory
- `#`: Superuser prompt
- `$`: Normal user prompt
- `touch filename`: Creates a new file in Linux
- `cd ..`: Goes back to the previous folder
