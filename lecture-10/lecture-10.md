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
docker run -p 4000:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql
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

## MongoDB:

* start:
  
```bash
sudo docker run -dp 27017:27017 -v local-mongo:/data/db --name local-mongo --restart=always mongo
```
* get into:

```bash
sudo docker exec -it local-mongo sh
```

* start mongo shell:

```bash
mongo
```

## Redis:
```bash
/etc/init.d/redis-server stop
```
```bash
/etc/init.d/redis-server start
```
```bash
/etc/init.d/redis-server restart
```

## Postgres:

```bash
sudo docker run -p 4000:5432 -e POSTGRES_PASSWORD=123456 postgres
```

* get inside the docker container using the postgres

* get in the postgres cli:
```bash
psql -U postgres
```

* create database in the container:
```bash
CREATE DATABASE mydatabase;
```

* create role with pass inside the cli:
```sql
CREATE ROLE myuser WITH LOGIN PASSWORD 'mypassword';
```

* grant all privilages for the user in the database:

```sql
GRANT ALL PRIVILEGES ON DATABASE sharetrip TO myuser;
```

* show all databases in the cli:
```sql
\l
```
* get inside the database :

```sql:
\c database_name
```

* to see the tables:
```sql
\dt
```

* to get inside a specific schema:
```sql
\dt schema_name.*
```

* to get inside a specific table:
```sql
SELECT * FROM <table_name>;
```
* to exit the cli:
```sql
\q
```
