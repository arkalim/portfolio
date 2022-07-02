---
title: "SEBART-Pro"
description: "A smart self-balancing robot!"
dateString: May 2018 - July 2018
draft: false
tags: ["C++", "Raspberry Pi", "Arduino", "Robotics", "AI", "DL", "CNN"]
showToc: false
weight: 209
cover:
    image: "projects/sebart-pro/cover.jpeg"
--- 
## Description

I worked on this project single-handedly during the summer break following my freshman year at NIT- Trichy. **SEBART-Pro** is a robot that follows a ball while balancing on two wheels. It can also recognize traffic signs and act accordingly. It has two stepper motors for precise position control and used an **Arduino Nano** as the microcontroller. The robot senses the tilt using an **MPU-6050 (6-axis gyroscope and accelerometer)** and converts the values from these sensors into angles using a **Kalman Filter**. It uses the **PID control algorithm** to balance on two wheels and a simple **Convolutional Neural Network** is used to recognize traffic signs.

![](/projects/sebart-pro/img1.jpeg)