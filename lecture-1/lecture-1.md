# Computer Architecture Overview

This document provides an overview of the computer architecture, including the relationship between CPU, operating systems, and software. It also covers the concepts of storage, RAM, hard drive, and the execution of executable files.

## CPU

The Central Processing Unit (CPU) is the core component of a computer system responsible for executing instructions. The CPU interacts with the operating system (OS) and executes commands issued by the OS.

## Operating System

The operating system acts as an intermediary between the CPU and software applications. It manages system resources, provides services to applications, and facilitates communication between software and hardware components.

## Software

Software applications, such as Docker and Node.js, interact with the operating system to execute commands and perform specific tasks.

## Storage

There are two parts of storage in a computer:

1. RAM: This keeps the random memory of the computer, which is not permanent.
2. Hard drive: This keeps the memory of any type in the computer permanently.

Hard drive stores information as 0s and 1s, allowing the computer to understand information in binary format.

## Execution of Executable Files

When an executable file is clicked, the binary form of the file is loaded into the RAM. The execution process involves the following steps:

1. Executable files are always in binary form.
2. The binary form of the executable file is saved line by line, with each line having a 64-bit or 32-bit value assigned to it.
3. In RAM, the first portion of memory is occupied by system processes or system program's processes. Each cell in RAM can also be 32-bit or 64-bit.
4. After the system processes, the executable file part comes into play.
5. During execution, the executable file is assigned line by line to the memory cells in the random access memory.
6. RAM consists of many memory cells, similar to the hard drive, but RAM is faster. Each memory cell can be 32-bit or 64-bit.
7. The executable file is stored as binary lines, which are then included in the random access memory cells during program execution.
8. The processor consists of two parts: the processing unit and the register set.

### Processing Unit and Register Set

9. The processing unit performs a limited set of operations, such as addition, subtraction, multiplication, division, logical AND, OR, and NOT.
10. The register set consists of multiple registers, such as: ax, bx, cx, px, etc.
11. One specific register is the pointing register.
12. Each register is a single cell memory, and the pointing register is a single memory cell that can store only one binary executable line (32-bit or 64-bit).
13. If the processor's register set's cell memory is 32-bit, the computer is considered a 32-bit computer.
14. The pointing register is one of the most important registers.
15. The pointing register has only one address assigned to it.
16. The pointing register points to a specific cell in RAM.
17. When an executable file is run, the first line is held in a part of the RAM.
18. The pointing register then points to the address of that memory cell.
19. The processing unit only knows the information inside the pointing register.
20. The processing unit executes the value stored in the pointing register's address, performing the necessary operations.

By understanding the architecture and interactions between CPU, operating systems, and software, we can effectively utilize computer resources and optimize program execution.
