---
title: "Remote Research Intern"
description: "Technical University of Munich (Germany)"
date: 2020-08-16
draft: false
tags: []
showToc: false
weight: 2
--- 
**Guide:** **Mohammad Farid Azampour** (Visiting Researcher at Chair for Computer Aided Medical Procedures, TU Munich)

### Description:

My work focused on using **Pix2Pix** (a **CGAN** architecture) to generate **Ultrasound (US) scans** from **MRI scans**, an **image-to-image translation** problem. However, a major challenge that I faced was the lack of structural correspondence between the MRI and US scans, arising from the sheer nature of the way this data is collected. Consequently, I wrote a custom loss function incorporating the **CGAN loss** with a **Dice Loss** between the segmentation maps obtained from the MRI scans and those from the generated US scan. This forces the generator to remove the structural deformation in the generated US scans. Additionally, I was given remote access to the TU-Munich’s cluster computers for training the model as well as an account in their Discourse forum.