# Docker Port Forwarding and Volume Mapping

This repository contains instructions for running Docker containers with port forwarding and volume mapping.

## Port Forwarding

To forward a port from your host machine to a Docker container, you can use the following command:

```bash
docker run -p host_machine_port:container_port image_name
```

-   For example, to run an Nginx container and forward port 3004 to port 80 in the container:

```bash
docker run -p 3004:80 nginx
```

-   When you request localhost:3004, the host machine will forward the request to the Nginx container running on port 80.

### Volume Mapping

-   Volume mapping allows you to share files between your host machine and a Docker container. Use the following command:

```bash
docker run -v host_machine_folder_path:container_folder_path image_name

docker run -p host_machine_port:container_port -v host_machine_folder_path:container_folder_path image_name
```

-   With volume mapping, files created in the container are visible in the mapped directory on the host machine.
