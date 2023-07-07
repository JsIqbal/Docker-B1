1. The operating system (OS) maps the application's execution code address to an icon so that whenever the icon is clicked, the application starts. This mapping usually occurs during the installation of the software for the first time.

2. An assumption: When software is installed for the first time, this mapping process takes place.

If there are any wonderful creations in computer science, they are the browser and the operating system.

Google Chrome has task codes, which are often referred to as threads or virtual processes.

Suppose we are running two processes:
1. Google Chrome: 10 ms of clock speed
   - Google Chrome has two tabs:
     - YouTube: 5 ms of clock speed
     - Facebook: 5 ms of clock speed
   The two threads created by Google Chrome will perform context switching between them, resulting in concurrency.
2. VS Code

The state of threads is kept within the process itself, which contributes to faster performance.

CPU time is divided among processes through time slicing. If two processes with equal CPU time allocation do not finish within the given time, the scheduler will interrupt the processes and allocate time to other processes.

The processor provides power to the operating system, and the operating system distributes the clock speed among them. This is why we can observe all CPUs working in the task manager.

A single process can create multiple processes, and those multiple processes can create multiple helper processes. These processes can have multiple threads. For example, opening six tabs in Google Chrome may result in 20-25 processes running for Google Chrome.

Google Chrome is a heavyweight software that requires multiple CPUs to run in parallel and achieve parallel execution. For parallel execution, software needs to have multiple processes.

Node.js, by utilizing the OS and libuv, can leverage the thread pool of the OS and create multiple threads.
