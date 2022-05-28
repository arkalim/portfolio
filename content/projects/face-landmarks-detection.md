---
title: "Face Landmarks Detection using CNN"
description: "Can computers really understand the human face?"
dateString: May 2020
draft: false
tags: ["DL", "AI", "Python", "PyTorch"]
showToc: false
weight: 204
cover:
    image: "projects/face-landmarks-detection/cover.jpg"
--- 
### 🔗 [Colab Notebook](https://colab.research.google.com/drive/1TOw7W_WU4oltoGZfZ_0krpxmhdFR2gmb)
### 🔗 [Blog Post](../../blog/face-landmarks-detection)

## Description

In this project, I trained a neural network to localize key points on faces. **Resnet-18** was used as the model with some slight modifications to the input and output layer. The model was trained on the official **DLib Dataset** containing **6666 images** along with corresponding **68-point landmarks** for each face. Additionally, I wrote a custom data preprocessing pipeline in **PyTorch** to increase variance in the input images to help the model generalize better. The neural network was trained for 30 epochs before it reached the optima.

During inference, **OpenCV Harr Cascades** are used to detect faces in the input images. Detected faces are then cropped, resized to (224, 224), and fed to our trained neural network to predict landmarks in them. The predicted landmarks in the cropped faces are then overlayed on top of the original image.