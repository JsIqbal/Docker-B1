docker --version -> to check the version of docker
docker run hello-world -> to check if docker is working fine

when we will use docker we need to know operating system

we need to use ubuntu for docker..we will be using lots of comands

go to docker hub -> check operating systems

docker pull ubuntu -> ubuntu will come which is a software that came in our computer

docker run ubuntu -> to run the ubuntu got from docker hub

sudo docker run -it ubuntu -> root@35c3bf425181:/#


sudo docker run -it ubuntu sh -> #

inside the ubuntu :
    use comands : ls, cd, pwd
    we can use all the comands in the ubuntu inside docker

docker gave us ubuntu within 1 minute

what is docker?
1. ecosystem or platform. ex : food chain
6 docker part : docker client, docker server, docker machine, docker images, docker hub, docker compose
work of docker : create container and run it.

docker machine has 2 part : docker client and docker server
inside docker machine there is image

Question : when we install docker we normally install a docker machine ?
yes.
docker machine has 2 part : docker client and docker server
when we write docker pull ubuntu : this comand is receieved by docker cli..that means we are telling the docker cli to execute pull ubuntu comand

pull ubuntu is sent to docker server which is a docker daemon which is a big process

docker hub : website
docker componse : upcoming???

image: docker run -it ubuntu -> in here the ubuntu stands for image
    docker image is a single file:
        this file has all dependency and configuration
    the software + dependencies + configuration = image

image is a picture of the file system
image is a single file -> this has the picture of the file system
image is the snapshot of the file system

# basically we pull an image from docker hub . image means snapshot of file system. 

image is used to create containers.

container : instance of image

when we say docker run -it an_image
we basically say that run the file system from the last snapshot

where we put image : docker machine
where image run : container

we can create multiple containers using a single image

why use docker?

1. installing software : download > run > error > troubleshoot > rerun installer > get another error > troubleshoot > etc...
2. we have a software that runs in one machine and not run in another machine..docker fix this issue
3. docker makes it really easy to install and run software without worrying about setup or dependencies

docker ps -> docker container lists

docker run ubuntu -> start and destroy docker container

docker run -it ubuntu sh -> start the ubuntu image in a container and get inside the container
it -> interective , this is an option 
sh -> means i want to get inside the ubuntu and give me a shell
mkdir iqbal -> make directory
cd -> change directory
# -> superuser
$ -> normal user

touch filename -> create a new file in linux

cd .. -> go back to previous folder

Components of OS : process manage, interprocess, communication, process sceduling, memory manage, process management, file system management
linux is popular for file system

ls -> list
ls -> list item by line by line

drwxr-xr-x  4 jsiqbal jsiqbal 4096 Jun 28 13:34 Desktop -> in here d stands for directory

cd -> change direcotory
pwd -> present working directory

In linux every software is a file..
if we install something in linux it is saved in linux harddrive as a file

Linux OS :

cpu + memory + hard disk -> kernel -> system calls -> processes like nodejs or chrome

the processes talks to hardware through system calls by the Kernel.
Kernel is the OS

problem:
hard drive has python v2.
chrome needs python v2
nodejs needs python v3

solution
isolate hard drive. (only possible in linux)

concept : namespacing

if chrome makes a system call then kernel gives python v2

what is namespacing: per process resources isolation
control groups : control the resources for isolated namespaces

container also has namespacing and control group

container : portion of -> ram, cpu, network, hard drive, kernel everything together forms a container. ultimately a mini computer.


image has 2 part : file system snapshot . ex : chrome, python
                    startup command -> run chrome
                the creator gives the startup comand and creates the file system

docker
why docker
image
container
docker hub
docker pull
docker run
docker client
docker server
interective run
shell comand
file system
various comands
comand elaboration

