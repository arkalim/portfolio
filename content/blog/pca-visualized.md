---
title: "Principal Component Analysis - Visualized"
description: "Data compression using Principal Component Analysis (PCA)"
dateString: Aug 2020
draft: false
tags: ["ML", "AI", "Python", "PCA", "Data Compression"]
weight: 106
cover:
    image: "/blog/pca-visualized/cover.jpg"
---
# Introduction

If you have ever taken an online course on Machine Learning, you must have come across Principal Component Analysis for dimensionality reduction, or in simple terms, for compression of data. Guess what, I had taken such courses too but I never really understood the graphical significance of PCA because all I saw was matrices and equations. It took me quite a lot of time to understand this concept from various sources. So, I decided to compile it all in one place.

In this article, we will take a visual (graphical) approach to understand PCA and how it can be used to compress data. Basic knowledge of Linear Algebra and Matrices is assumed. If you are new to this concept, just follow along, I have tried my best to keep this as simple as possible.

These days, datasets containing a large number of dimensions are increasingly common and are often difficult to interpret. One example can be a database of face photographs of let’s say, **1,000,000 people**. If each face photograph has a dimension of **100x100,** then the data of each face is 10000 dimensional (there are 100x100 = 10,000 unique values to be stored for each face). Now, if 1 byte is required to store the information of each pixel, then 10,000 bytes are required to store 1 face. Since there are 1000 faces in the database,10,000 x 1,000,000 = 10 GB will be needed to store the dataset.

Principal component analysis (PCA) is a technique for reducing the dimensionality of such datasets, exploiting the fact that the images in these datasets have something in common. For instance, in a dataset consisting of face photographs, each photograph will have facial features like eyes, nose, mouth. Instead of encoding this information pixel by pixel, we could make a template of each type of these features and then just combine these templates to generate any face in the dataset. In this approach, each template will still be 100x100 = 1000 dimensional, but since we will be reusing these templates (basis functions) to generate each face in the dataset, the number of templates required will be very small. PCA does exactly this.

# How does PCA work?

This part is going to be a bit technical, so bear with me! I will try to explain the working of PCA with a simple example. Let’s consider the data shown below containing 100 points each 2 dimensional (x & y coordinates is needed to represent each point).

![](/blog/pca-visualized/img1.png#center)

Currently, we are using 2 values to represent each point. Let’s explain this situation in a more technical way. We are currently using 2 basis functions,x as (1, 0) and y as (0, 1). Each point in the dataset is represented as a weighted sum of these basis functions. For instance, point (2, 3) can be represented as 2(1, 0) + 3(0, 1) = (2, 3). If we omit either of these basis functions, we will not be able to represent the points in the dataset accurately. Therefore, both the dimensions necessary, and we can’t just drop one of them to reduce the storage requirement. This set of basis functions is actually the cartesian coordinate in 2 dimensions.

If we notice closely, we can very well see that the data approximates a line as shown by the red line below.

![](/blog/pca-visualized/img2.png#center)

Now, let’s rotate the coordinate system such that the x-axis lies along the red line. Then, the y-axis (green line) will be perpendicular to this red line. Let’s call these new x and y axes as a-axis and b-axis respectively. This is shown below.

![](/blog/pca-visualized/img3.png#center)

Now, if we use **a** and **b** as the new set basis functions (instead of using **x** and **y**) for this dataset, it wouldn’t be wrong to say that most of the variance in the dataset is along the **a-axis**. Now, if we drop the **b-axis,** we can still represent the points in the dataset very accurately, using just **a-axis**. Therefore, we now only need half as must storage to store the dataset and reconstruct it accurately. This is exactly how PCA works.

**PCA is a 4 step process.** Starting with a dataset containing *n* dimensions (requiring *n*-axes to be represented):

- Find a new set of basis functions (*n*axes) where some axes contribute to most of the variance in the dataset while others contribute very little.
- Arrange these axes in the decreasing order of variance contribution.
- Now, pick the top *k* axes to be used and drop the remaining *n-k* axes.
- Now, project the dataset onto these *k* axes.

After these 4 steps, the dataset will be compressed from *n*-dimensions to just *k*-dimensions (*k*<*n*).

# Steps

For the sake of simplicity, let’s take the above dataset and apply PCA on that. The steps involved will be technical and basic knowledge of linear algebra is assumed.

## Step 1

Since this is a 2-dimensional dataset, *n*=2. The first step is to find the new set of basis functions (**a** & **b**). In the explanation above, we saw that the dataset had the maximum variance along a line and we manually chose that line as **a**-axis and the line the perpendicular to it as **b**-axis. In practice, we want this step to be automated.

To accomplish this, we can find the eigenvalues and eigenvectors of the covariance matrix of the dataset. Since the dataset is 2 dimensional, we will get 2 eigenvalues and their corresponding eigenvectors. Then, the 2 eigenvectors are two basis functions (new axes) and the two eigenvalues tell us the variance contribution of the corresponding eigenvectors. A large value of eigenvalue implies that the corresponding eigenvector (axis) contributes more towards the total variance of the dataset.

![](/blog/pca-visualized/img4.png#center)

## Step 2

Now, sort the eigenvectors (axes) according to decreasing eigenvalues. Here, we can see that the eigenvalue for **a-axis** is much larger than that of the**b-axis** meaning that a-axis contributes more towards the dataset variance.

![](/blog/pca-visualized/img5.png#center)

The percentage contribution of each axis towards the total dataset variance can be calculated as:

![](/blog/pca-visualized/img6.jpg#center)

![](/blog/pca-visualized/img7.png#center)

The above numbers prove that the **a-axis** contributes 99.7% towards the dataset variance and that we can drop the **b-axis** and lose just 0.28% of the variance.

## Step 3

Now, we will drop the **b-axis** and keep only the **a-axis.**

![](/blog/pca-visualized/img8.png#center)

## Step 4

Now, reshape the first eigenvector (a-axis) into a 2x1 matrix, called the projection matrix. It will be used to project the original dataset of shape(100, 2) onto the new basis function (a-axis), thus compressing it to (100, 1).

![](/blog/pca-visualized/img9.jpg#center)

# Reconstruct the data

Now, we can use the projection matrix to expand the data back to its original size, with of course a small loss of variance (0.28%).

![](/blog/pca-visualized/img10.jpg#center)

The reconstructed data is shown below:


![](/blog/pca-visualized/img11.png#center)

Please note that the variance along the **b-axis** (0.28%) is lost as evident by the above figure.

# That’s all folks!

If you made it till here, hats off to you! In this article, we took a graphical approach to understand how Principal Component Analysis works and how it can be used for data compression. 

# Colab Notebook

View my [Colab Notebook](https://colab.research.google.com/drive/1QQcoE501NS9nPBAmlg12zQWHCT1IlI96) for a well commented code!