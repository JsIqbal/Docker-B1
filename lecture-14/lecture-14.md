### What We Have Learned So Far:

-   Operating System
-   Docker Terminology
-   Docker Behind the Scenes
-   Image
-   Container
-   Custom Image
-   Image Remote Repository (Docker Hub)

### Where Do We Use Docker:

1. We Create Software.
2. We Create a Dockerfile for the Software Inside the Project Root Directory.
3. We Put the Software in a GitHub Repository and Give Access to the DevOps Engineer.

### DevOps:

The DevOps Engineer:

-   Takes the Software from the GitHub Repository.
-   Builds an Image from the Dockerfile.
-   Runs a Container with the Image.

---

# Building Containers with Docker Compose

In this guide, we will build two containers using Docker Compose. One container will run a Node.js application, and the other will run a MySQL database. These two containers will communicate with each other.

## Setting Up the Node Application

1. **Create a New Node Application Directory:**

    Navigate to a new directory for your Node.js application, e.g., `node-app`.

2. **Initialize a Node.js Project:**

    In your terminal, execute the following command to initialize a new Node.js project:

    ```bash
    npm init -y

    ```

3. **we need express.js to create a nodejs server:**

    check the node-app index.js

### requirements to start the server:

-   node
-   using npm install express
-   tell node the file to start the software whic is index.js

```Dockerfile
FROM node:18-alpine

COPY package.json .

RUN npm install

CMD ["npm", "start"]

```

```Dockerfile
# FROM node:18-alpine: means the container already has Node.js inside it

# COPY package.json .: means to copy the package.json from the root directory of the host into the container
COPY package.json .

# RUN npm install: Docker will install all the dependencies from the package.json using npm
RUN npm install

# CMD ["npm", "start"]: means the container will start the software using npm and the start script defined in package.json
CMD ["npm", "start"]
```

-   Let's continue to create the container by using the following command:

```bash
docker build -t node-app:v-1 .

```

```Dockerfile
FROM node:18-alpine

RUN echo "installing git..."

RUN apk update && apk add git

COPY . .

RUN npm install

CMD ["node", "index.js"]
```

---

### suppose you need a database.

-   you have to run a db container and also an applicaiton container

```yaml
version: "3.3"

services:
    db: # this is also my host. so when my applicaiton container will try to connect with my database the connection will be established with "db". This means that the container that is being created has an ip which is the "db"
        container_name: mysql_db # give a name for the container
        image: mysql # from which image the container is created
        restart: unless-stopped # restart the container if not running

        environment: # mysql environment
            - MYSQL_DATABASE=lbrary
            - MYSQL_ROOT_PASSWORD=123456
        ports:
            - 3030:3306 # forwarding ports from host machine to container port
        volumes:
            - db:/var/lib/mysql # question: the file is being created in which container? you said that the data from the mysql container is being saved in local pc.

    app:
        container_name: node_app # giving a name for the applicaiton container
        build:
            dockerfile: Dockerfile # name of the Dockerfile
            context: . # build from the directory where the Dockerfile is located
        depends_on: # means that the application container is dependent on the db container which is the mysql_db
            - db
        # env_file: ./.env # question: what is the meaning of this line?
        # environment: # question: you can set environment variable for what? and where?
        #     - DB_HOST=db
        #     - DB_USER=root
        #     - DB_PASSWORD=123456
        ports:
            - 5000:3000 # host machine port to applicaiton container port mapping
        volumes:
            - ./:/app # mapping with which directory?
volumes:
    db:
```

Now, execute inside the MySQL container and go inside the MySQL database by executing the following command:

```bash
mysql -u root -p
```

-   we will create a table inside the library database using raw sql from the mysql cli inside the mysql container:

```sql
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age INT,
    email VARCHAR(100) UNIQUE
);

```

-   now we need to access the database container as well as the data inside the mysql container from our node_app container

steps to follow:

**_install sequilize inside the node application_**

```bash
npm i sequelize  sequelize-cli mysql2
```

## Setting the Database Host in the Application Container

When configuring the `db host` within your application container, it's crucial to consider the following:

-   Using `localhost` or any other ports will make your computer attempt to connect to the port inside the individual container.

To ensure that your application communicates correctly with the MySQL container (which essentially functions as another computer), follow these steps:

1. Define the `db host` as the individual database container running within your host machine.

By doing so, you establish a seamless connection between the containers, allowing them to interact with each other effectively.

-   We will face some issues with working directory. that's why we will now define the WORKDIR /app inside our Dockerfile

```Dockerfile
FROM node:18-alpine

WORKDIR /app

RUN echo "installing git..."

RUN apk update && apk add git

COPY . .

RUN npm install

CMD ["node", "index.js"]
```

now all the works are going to be done inside the /app directory

we need to use : `docker-compose down && docker-compose up --build`

The connection communication between the 2 containers: node-app and the mysql container
