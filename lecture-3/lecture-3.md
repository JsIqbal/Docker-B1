1. OS is the middleman for the rest of the application.

2. processor has 2 parts.

    - processing unit
    - register set

3. code execution is process

4. one application will run in a process

5. by using context switching multiple process can be executed in a single processor

6. By holding one process and running a saparate process is called context switching

7. process has a state :
    - uuid
    - name
    - cpu
    - memory
    - disk read
    - disk write
    - code
    - etc
8. pointing register points to a process and takes information from pcb
9. the feeling of running all the process in a singular time is called concurrency

10. when all the processors are running single process at a time then it is called parallel programming.

11. loading code from ssd to ram is the work of OS

12. when process creates multiple process in itself then those are called thread or virtual process. (Browser and it's multiple tabs)

13. thread's control block stays in the process's state in which the thread is in.

14. thread is called virtual process

15. suppose there is only one cpu and one processor:

    - there are 2 process
    - each process has 2 threads
    - the processors clockspeed is devided between the process
    - each process's clockspeed is devided between their threads.
    - thus context switching

16. processor only knows the operating system.

17. operating system runs all the process.

18. the OS that can utilize the best performance by randomly running all the processes is called the best OS.

19. memory management is done by OS.

20. Browser itself is a process and the browser needs multiple process ru to be able to work properly. that's why browser creates multiple processes by the help of operatig system and the operating system devides all the process's in multiple clockspeeds.

21. one process can have multiple block of code and each block can be a thread.

22. process and threads are created by the os and handled by the os.

23. Os can create thousands of threds and this is dynamic.

24. Nodejs by using the OS and libvv can use the threadpool of the OS and can create multiple threads.
