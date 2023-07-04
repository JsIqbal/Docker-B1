1. OS maps the applications execution codes address in an icon so that whenever the icon is clicked then the application starts
2. Assumption: when a software in installed the first time this mapping happens

!!! if there are any wonderful creation in computer science then they are : browser and Operating System

google chrome has task codes: those codes are said to be threads or virtual process

suppose we are running 2 process: 1. google chrome -> 10 ms of cloockspeed
google chrome has 2 tabs -> 10 ms of cloockspeed will be devided equally between:
a. youtube -> 5ms of cloockspeed
b. facebook -> 5ms of cloockspeed
And the 2 threads created by google chrome will be doing context switching between them and we will see cncurrency. 2. vs code

3. threads state is kept in the process itself and that's why it's faster

4. cpu gets devided in process through cpu time
   Q: what happens when 2 equaly cpu time devided process does't finish on the cpu time?

5. processor gives power to the Operating system and the operating system devides the clockspeed between them
   this is why we can see all the cpu are working in the task manager.

6. A single process can created multiple process and those mutiple processes can create multiple helper processes and those processes can have multiple threads.
   example: open 6 tabs in google chrome and you will see there are 20-25 processes running for google chrome.

This is because google chrome is a very heavy software and it needs multiple CPUs to run parallelly and have parallel execution and for parallel execution a software needs to have multiple processes.

Nodejs by using the OS and libvv can use the threadpool of the OS and can create multiple threads.
