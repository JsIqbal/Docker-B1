## Docker Port Forwarding

Every computer has a localhost and every computer has ports of their own.

A Docker machine resides inside a host computer, and Docker containers are basically virtual computers. 
Therefore, Docker containers also have their own localhost and ports.

Suppose we want to connect to a MySQL database from our host machine. 
However, since we are running MySQL inside a container in the Docker machine, 
we cannot directly access it through the default MySQL port (3306) from our host machine.

To enable access to the MySQL container from the host machine, we need to perform port forwarding. 
This process involves mapping a port on the host machine to the specific port of the MySQL container.

The command to achieve port forwarding is as follows:

```bash
docker run -p host_machine_port:container_port image_name
```

For example, to forward port 4000 of the host machine to port 3306 of the MySQL container, you can use the following command:

```bash
docker run -p 4000:3306 -e MYSQL_ROOT_PASSWORD=1234 mysql
```

to enter in the running container :

```bash
docker exec -it <container id> sh
```

to enter in mysql in the running container :
```bash
mysql -u <MYSQL_USER> -p
```

Now, if you try to connect to the database on localhost:4000 from your host machine, 
Docker will forward the request to the container's port (3306), 
and you should be able to access the database, for example, using tools like TablePlus.

This method of exposing a container's port to the host machine is known as port forwarding.

