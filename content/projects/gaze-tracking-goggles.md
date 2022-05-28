---
title: "Gaze-tracking Goggles"
description: "Smart Goggles for Gaze Analysis"
dateString: Sep 2019 - Oct 2019
draft: false
tags: ["DL", "AI", "Python", "PyTorch", "Computer Vision"]
showToc: false
weight: 205
cover:
    image: "projects/gaze-tracking-goggles/cover.jpg"
--- 
## Description

The aim of the project was to build goggles which could find where the user was looking (gaze), the category of object the user was looking at, and the duration of attention on that object. The goggles had 3 camera modules, one on each eye to track the pupil movement and the third one for mapping the gaze to the real world. Thresholding was used to detect the pupils and contours were used to find its centre. Various important parameters such as pupil velocity, acceleration, and fixation time were calculated for further statistical analysis. **Single Shot Descriptor**, with **VGG16** as backbone, was used to detect the objects the user was gazing at. Additionally, a GUI was made using **TkInter** for ease of use.

![](/projects/gaze-tracking-goggles/img1.jpg)