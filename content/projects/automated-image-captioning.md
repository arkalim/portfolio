---
title: "Automated Image Captioning (Bachelor Thesis)"
description: "Can computers summarize the contents of an image?"
dateString: Jan 2021 - May 2021
draft: false
tags: ["Python", "PyTorch", "CNN", "LSTM", "CRNN", "DL", "AI"]
showToc: false
weight: 203
cover:
    image: "projects/automated-image-captioning/cover.jpg"
--- 
### 🔗 [Colab Notebook](https://colab.research.google.com/drive/1Q553uslYW3Ho6P1G46SOEDxOS_VmHXfJ)

## Description
In this project, I implemented the paper **[Show, Attend and Tell: Neural Image Caption Generation with Visual Attention](https://arxiv.org/abs/1502.03044)**. The neural network, a combination of **CNN** and **LSTM**, was trained on the **MS COCO** dataset and it learns to generate captions from images. 

As the network generates the caption, word by word, the model’s gaze (attention) shifts across the image. This allows it to focus on those parts of the image which is more relevant for the next word to be generated. 
![Attention Mechanism](/projects/automated-image-captioning/img1.jpg)

Furthermore, beam search is used during inference to enhance the prediction result. The network was trained in **PyTorch** on an **Nvidia GTX 1060** graphics card for over 80 epochs.