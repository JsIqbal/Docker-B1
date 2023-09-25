## Dockerfile

```Dockerfile
# Use the official Node.js image based on Alpine Linux
FROM node:alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json from the host into the container's working directory
COPY package.json .

# Install dependencies listed in package.json
RUN npm install

# Copy all the application files from the host into the container's working directory
COPY . .

# Define the default startup command
CMD ["npm", "run", "start"]
```

### Building the Docker Image

-   To build the Docker image, run the following command:

```bash
docker build -t example-image:v1 .

```

-   How the process actually working in here?

*   The Docker daemon starts by creating a temporary container using the official Node.js image (in this case, based on Alpine Linux) specified in the `FROM` directive.

*   It then enters the `/app` directory within the container and sets it as the working directory using the `WORKDIR /app` command.

*   The `COPY package.json .` command copies the `package.json` file from the host (where the Dockerfile is located) into the container's working directory (`/app`).

*   The `RUN npm install` command is executed within the container, installing all the dependencies listed in `package.json`.

*   Next, the `COPY . .` command copies all the application files (including the source code) from the host into the container's working directory.

*   Finally, the `CMD ["npm", "run", "start"]` command specifies the default startup command for containers created from this image. In this case, it tells the container to run the Node.js application using npm.

### Pushing the Docker Image to Docker Hub

To share your Docker image with others, you can push it to a container registry like Docker Hub. Make sure you have logged in to your Docker Hub account using `docker login`.

# Tag the image with your username and version

-   `docker tag example-image:v1 your-username/example-image:v1`

# Push the tagged image to Docker Hub

-   `docker push your-username/example-image:v1`
