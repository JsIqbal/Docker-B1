# Networking Concepts

Networking can be likened to sending a letter to a friend. Just as you need specific items to send a letter, there are prerequisites to sending data over a network.

## Prerequisites for Sending Data:

-   Pen: Represents the device's ability to generate or input data.
-   Paper: Symbolizes the medium where data is written or stored.
-   Letter: The actual data you want to send.
-   Seal: Ensures the privacy and security of your letter.
-   Stamp: Indicates the destination or address of your letter.
-   Post Office: The intermediary that facilitates the transfer of your letter to the recipient.

Similarly, in networking, when you want to send data to a remote computer, you need to follow a structured process defined by the OSI (Open Systems Interconnection) model, consisting of seven layers:

## OSI Model Layers:

1. **Physical Layer (L1):**

    - Responsible for the physical transmission of data.
    - Specifications include voltage levels, cable types (e.g., Ethernet, fiber optic), and connectors.
    - Transmits binary signals (0s and 1s) over the medium.

2. **Data Link Layer (L2):**

    - Manages MAC (Media Access Control) addresses, which are unique identifiers for devices on a local network.
    - Ensures data integrity within a local network.
    - IEEE 802.3 (Ethernet) and IEEE 802.11 (Wi-Fi) are standards for this layer.

3. **Network Layer (L3):**

    - Handles routing decisions, including source and destination IP addresses.
    - Facilitates data traversal across different networks.
    - IPv4 and IPv6 are key protocols at this layer.

4. **Transport Layer (L4):**

    - Segments data into packets for efficient transmission.
    - Assigns source and destination ports to help identify specific services or applications.
    - TCP (Transmission Control Protocol) ensures reliable, ordered delivery, while UDP (User Datagram Protocol) offers faster, connectionless communication.

5. **Session Layer (L5):**

    - Manages connections between devices and ensures sessions are maintained between known devices.
    - Handles session establishment, maintenance, and termination.

6. **Presentation Layer (L6):**

    - Converts data into a format suitable for transmission.
    - Handles data encoding, compression, and encryption.
    - Common formats include UTF-8 for text and JPEG for images.

7. **Application Layer (L7):**
    - Interfaces with user applications.
    - Houses various application protocols.
    - Examples include HTTP (for web browsing), HTTPS (secure web browsing), FTP (file transfer), SMTP (email), and more.

When sending a message, the application layer formats the data and passes it down the layers:

-   Application Layer → Presentation Layer → Session Layer → Transport Layer
-   The transport layer segments data, assigns ports, and adds source and destination IP addresses.
-   The network layer adds source and destination MAC addresses.
-   Finally, the physical layer converts data into binary.

## Routing and Data Transfer:

1. Data reaches the home router, which serves as a gateway to external networks.
2. The router checks MAC addresses (L2) to determine if the data is intended for it. If not, it proceeds to L3.
3. The router at L3 decides the route to the target computer based on IP addresses.

## Receiving Data:

On the receiver's computer:

-   Data arrives at the physical layer.
-   It's processed through the data link, network, and transport layers.
-   The session, presentation, and application layers are managed by application developers.

## Protocols by Layer:

-   **Physical Layer (L1):** Includes specifications for Ethernet, fiber optics, connectors, and binary encoding standards.
-   **Data Link Layer (L2):** Encompasses IEEE 802.3 (Ethernet) and IEEE 802.11 (Wi-Fi) standards.
-   **Network Layer (L3):** Features IPv4 and IPv6 as primary protocols.
-   **Transport Layer (L4):** TCP ensures reliable, ordered communication, while UDP offers lightweight, connectionless data transfer.
-   **Session Layer (L5):** No specific protocols mentioned; its functions are implemented in software.
-   **Presentation Layer (L6):** Handles encoding, compression, and encryption; commonly uses UTF-8 and JPEG.
-   **Application Layer (L7):** Includes a wide range of application protocols, such as HTTP, HTTPS, FTP, SMTP, and many more.

## Routing Decisions:

Routers make decisions based on factors like the shortest path, available bandwidth, and network topology. The choice of LAN, MAN, PAN, or WAN depends on the scope of the network.

## Network Layer:

-   **CIDR Notation:** Classless Interdomain Routing.
-   Example: 192.168.0.0/24 (the first 24 bits are unchangeable).
-   To connect up to 4 computers, you'd use /29.
-   The first and last IP addresses are reserved.
-   Routers use routing tables to make decisions.
-   NAT (Network Address Translation) is used for sharing a single public IP among multiple devices.
-   A router typically has multiple IPs.
-   The gateway is the entry and exit point to a network.
-   Subnetting and masks determine network boundaries.
-   Prefix length specifies the number of bits in the network portion of an IP address.

This detailed explanation should help you grasp networking concepts more thoroughly. If you have further questions or need additional clarification, please don't hesitate to ask.
