## Operating System

### What is an operating system?
- An operating system (OS) is a software that manages computer hardware resources and provides services for computer programs.
- It acts as an intermediary between the hardware and software, allowing applications to run efficiently and enabling users to interact with the computer.

### RAM, Hard Disk, Processor
- RAM (Random Access Memory) is a hardware component that provides temporary storage for data and instructions that the CPU (Central Processing Unit) needs to access quickly.
- Hard Disk is a non-volatile storage device that stores data on magnetic or solid-state drives for long-term storage.
- The Processor (CPU) is the brain of the computer that performs calculations and executes instructions.

### How is software installed on a computer?
- Software installation involves copying files from a storage medium (e.g., CD, USB drive) to the hard disk of a computer.
- During installation, the necessary files and configurations are set up so that the software can be executed.

### How does the software load in RAM?
- When a program is executed, the operating system loads the necessary parts of the software from the hard disk into the RAM.
- The software's instructions and data reside in RAM during program execution, allowing the CPU to access them quickly.

### 32-bit and 64-bit Computers
- A 32-bit computer refers to a system that processes data in 32-bit chunks.
- A 64-bit computer refers to a system that processes data in 64-bit chunks.
- The main difference is the size of memory addresses that the computer can handle. A 32-bit system can address up to 4GB of RAM, while a 64-bit system can handle significantly more.

## Processor

### Register Set
- A register set is a small amount of very fast memory located within the CPU.
- It holds the data that the CPU is currently working on or needs to access frequently.
- Examples of registers include the AX, BX, and CX registers.

### Pointing Register
- A pointing register is a special type of register that holds memory addresses.
- It is used to point to specific locations in memory for data retrieval or storage.

### Arithmetic and Logical Operations
- Processors support various arithmetic and logical operations, including:
  - And: Performs a logical AND operation on two binary values.
  - Or: Performs a logical OR operation on two binary values.
  - Not: Performs a logical NOT operation on a binary value.
  - Add: Adds two values.
  - Sub: Subtracts one value from another.
  - Mul: Multiplies two values.
  - Div: Divides one value by another.

## Process (Virtual Computer)

### Process State
- A process is an instance of a running program.
- It has a state that indicates its current stage in execution, such as running, waiting, or terminated.

### Process ID (PID)
- Each process is assigned a unique process ID (PID) by the operating system.
- The PID is used to identify and manage individual processes.

### Total Read/Write, Priority, etc.
- A process may have various attributes associated with it, such as:
  - Total read/write operations performed by the process.
  - Priority level, which determines the order in which processes are scheduled.
  - Other characteristics specific to the operating system and process management.

### Context Switching
- Context switching is the process of saving and restoring the state of a process so that execution can be resumed from the same point later.
- It occurs when the operating system switches the CPU from one process to another.

### Process Control Block (PCB)
- A process control block (PCB) is a data structure maintained by the operating system for each process.
- It holds information about the process, including its current state, CPU registers, memory allocation, and other relevant details.

### Concurrency
- Concurrency refers to the ability of multiple processes or threads to execute in overlapping time intervals.
- It gives the illusion of simultaneous execution, even though only one task is being executed at a given moment.

### Multi-threaded/Core Processor
- A multi-threaded or multi-core processor is a CPU that has multiple execution cores, allowing it to execute multiple threads simultaneously.
- Each core can work on a separate thread, enabling parallel execution and improved performance.

### Logical CPU or Processor
- A logical CPU or processor refers to the virtual or logical representation of a CPU core.
- In systems with hyper-threading or multi-threading technology, each physical CPU core may be divided into multiple logical CPUs.

### Parallel Execution
- Parallel execution refers to the simultaneous execution of multiple tasks or processes, potentially on different processors or cores.
- It enables improved performance and efficiency by utilizing the available resources effectively.

### Thread or Virtual Process
- A thread, also known as a virtual process, is a unit of execution within a process.
- Multiple threads can exist within a single process and share the same memory space, allowing for concurrent execution.

- ``` When the computer starts the operating system's code is executed and the processor only knows the operating system. ```

## Docker

### Before Docker - Hypervisor
- Before Docker, virtualization was primarily achieved through hypervisors.
- Hypervisors create and manage virtual machines (VMs) that emulate an entire computer system.
- VMs run full operating systems and require dedicated resources for each instance.

### Hypervisor vs Docker
- Hypervisors virtualize the hardware, allowing multiple VMs to run on a single physical machine.
- Docker, on the other hand, virtualizes the operating system (OS) and allows containers to share the host OS kernel.

### Why do we need Docker?
- Docker addresses the limitations of traditional virtualization by providing lightweight, isolated containers.
- Containers offer faster startup times, use fewer resources, and allow for efficient packaging and deployment of applications.

### What is Docker? All parts of the Docker ecosystem.
- Docker is an ecosystem or platform for creating and managing containers.
- Components of the Docker ecosystem include:
  - Docker client: The command-line interface (CLI) used to interact with Docker.
  - Docker server: Also known as the Docker daemon, it manages container lifecycle and communication with the host OS.
  - Docker machine: A tool that sets up and manages Docker on virtual machines or physical hosts.
  - Docker images: Snapshots of file systems that contain software, dependencies, and configurations.
  - Docker Hub: A repository for sharing and accessing Docker images.
  - Docker Compose: A tool for defining and running multi-container Docker applications.

### Workflow of Docker: "docker run -it <some-image>" - explained
1. The `docker run -it <some-image>` command is executed in the terminal or command-line interface.
2. Docker CLI receives the command and checks its validity.
3. Docker server (daemon) receives the command from the CLI.
4. If the specified image is not available locally, Docker server pulls the image from Docker Hub and saves it.
5. The Docker server creates a container based on the image and configures its file system.
6. The `-it` option makes the container run in interactive mode and provides a shell prompt for interaction.
7. The user is presented with a command prompt, such as `username@machineName:/$`, inside the container.

### Docker Image and its parts
- A Docker image is a snapshot of a file system that contains the necessary software, dependencies, and configurations.
- It consists of two main parts:
  - File system snapshot: The complete file system of the software, including all files, directories, and libraries.
  - Startup command: The command to be executed when the container is run.

### "username@machineName:/$" - explained
- The prompt `username@machineName:/$` represents the command prompt inside the Docker container.
  - `username`: The user within the container.
  - `machineName`: The name of the container's virtual machine or host system.
  - `/$`: The current working directory inside the container, starting from the root directory.

### Kernel, Namespacing, and Control Groups
- The kernel is the core of the operating system that interacts with hardware and provides essential services to applications.
- Namespacing is a feature of the Linux kernel that allows for resource isolation and process-level virtualization.
- Control groups (cgroups) are a kernel feature that manages and limits the resources available to processes within a container.

### What is a Container? (Virtual Computer)
- A container is a lightweight and isolated runtime environment that encapsulates an application and its dependencies.
- It is like a virtual computer that runs on a host system, sharing the host OS kernel but with its own isolated file system and resources.

### How do Windows and Mac have Containers without Namespacing?
- Windows and Mac use a lightweight virtualization technology called Hyper-V (Windows) and HyperKit (Mac) to provide containerization without namespacing.
- These technologies create lightweight virtual machines (VMs) that run a Linux distribution, enabling the use of containers.

### Docker Client & Server
- The Docker client is the CLI tool used to interact with Docker and send commands to the Docker server.
- The Docker server (daemon) is responsible for managing containers, handling image operations, and communicating with the host OS.

### How to install images from Docker Hub
- To install an image from Docker Hub, you can use the `docker pull <image-name>` command.
- Docker CLI communicates with the Docker server to pull the specified image from the Docker Hub repository.

### Set default command within Docker image
- You can set a default command to be executed when starting a container from an image using the `CMD` instruction in a Dockerfile.
- The default command is specified in the Dockerfile and defines the primary process to run within the container.

### Checking container status
- To check the status of running containers, you can use the `docker ps` command.
- It provides information about running containers, such as their container ID, image, command, created time, status, and names.

### Remove command for unused containers
- To remove unused containers, you can use the `docker rm <container-id>` command.
- This command removes the specified container from the system.
- The `docker system prune`command can be used to remove all stopped containers, unused networks, dangling images, and build cache in one go.

### Difference between `docker kill` and `docker rm` command
- The `docker kill` command sends a termination signal to a running container, forcing it to stop immediately.
- The `docker rm` command removes a container from the system, but it can only be executed on a stopped container.
- In summary, `docker kill` is used to forcefully stop a container, while `docker rm` is used to remove a stopped container.

### "bin" folder with each image
- Each Docker image contains a "bin" folder that holds binary executable files for various commands and utilities included in the image.
- The "bin" folder allows users to run specific commands within the container environment.

### Install Ubuntu image and explore Linux commands
- To install the Ubuntu image, you can use the command `docker pull ubuntu`.
- Once the image is pulled, you can create and run a container from it using `docker run -it ubuntu`.
- Inside the Ubuntu container, you can explore and execute various Linux commands like `ls` (list files and directories), `cd` (change directory), `pwd` (print working directory), and more.

### Difference between host/normal user and root user
- In a container, the default user is usually a non-root or normal user, such as `username@machineName:/$`.
- The root user, denoted by the `#` symbol in the prompt (`root@machineName:/$`), has administrative privileges and can perform system-level operations.
- The root user can access and modify system files, install software, and make changes that affect the entire container.
- Normal users have limited permissions and are restricted from performing certain administrative tasks.
