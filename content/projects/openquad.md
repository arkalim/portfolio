---
title: "OpenQuad"
description: "Open-souce platform for drone automation"
dateString: July 2019 - Dec 2019
draft: false
tags: ["Drone", "Raspberry Pi", "Python", "Computer Vision", "Automation"]
showToc: false
weight: 206
cover:
    image: "projects/openquad/cover.jpg"
--- 
### 🔗 [GitHub](https://github.com/OpenQuad-RMI/openquad)

## Description

The aim of the project is to build an open-source quadcopter platform for research in the field of drone autonomy. Various deep learning and computer vision algorithms will be implemented on the drone including person tracking, gesture control using human pose estimation, optical flow stabilization, obstacle avoidance, and depth estimation using monocular vision. The drone uses a **Pixhawk** flight controller with **Raspberry Pi** as a companion computer. **DJI Flame Wheel-450** is used for the quadcopter frame along with some custom mountings for adding additional components.

**Raspberry Pi** runs a **ROS** node which communicates with another **ROS** node running on the host PC to transfer videos over Wi-Fi. To make the project open-source, easy to develop, and easily reproducible, the simulation environment setup has been dockerized using docker container. We are currently developing the algorithms and testing them in **Gazebo Simulation**.

![](/projects/openquad/img1.jpg)