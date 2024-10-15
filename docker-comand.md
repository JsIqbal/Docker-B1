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
- `docker rmi $(docker images -q)`: remove all docker images
- `docker stop $(docker ps -q)`: stop all docker containers

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
- `docker exec -it <redis_container_name_or_id> redis-cli FLUSHALL` : This command will connect to the Redis server within the container and remove all data. The container will continue running with an empty Redis database.
