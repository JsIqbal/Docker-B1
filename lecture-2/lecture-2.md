# The Technology to Create RAM and Hard Drive Are Totally Different

The human brain has two parts:

1. Analysis part of the brain
2. Storage part of the brain

All the experiences that a human brain has are never lost from the brain. For example:
- All the things seen by the eye are stored.
- All the sounds heard from the ear are never lost; they are stored in the storage part of the brain.

The workflow of the storage and analysis parts of the brain works simultaneously together, forming a system. Suppose there is new information called "#", and it is no longer being used. This information will be replaced with more prioritized information like "$". After a certain period of time, the "#" information will be deeply stored in the human brain, making it hard to access, but it is still there. The brain is never dull.

When you are asleep, the brain's analysis part takes a scan of all the information in the brain, starting from a recent state and moving to the deepest part of the brain.

---

## CPU -> Registers -> Cache Memory -> Main Memory -> Secondary Memory

A register is a single cell that contains the same number of bits as the RAM in the computer. If a RAM's cell can contain 8 bits, then the CPU's register set will have a cell memory of 8 bits. A computer's designation, like 16-bit, 32-bit, or 64-bit, is determined by the memory of the register set. If a register set's memory cell is 64-bit, then it is a 64-bit computer.

A computer can only execute binary files.

When the CPU starts executing from the first instruction to the last, it is called a process.

A traditional computer could not do two works simultaneously. That's why scientists created a new concept called a process, and there should be an ending point of the process. This ending point is kept in the PCB or Process Control Block. Switching between processes is called context switching.

The PCB's state is a screenshot of the register set, and the screenshot will always be uniquely identified.

The process's state is kept in the process itself. It includes a unique ID, name, CPU usage, memory, disk read, disk write, code, and many more things, all kept in the PCB. The PCB is a state manager.

A computer and a process are the same thing; that's why a process is called a virtual computer.

A computer gives us the feeling that all the programs are being executed at the same time. This concept is called concurrency.
