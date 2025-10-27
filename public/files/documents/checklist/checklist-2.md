# AI-Driven System for Criminal Investigations

## Project Overview

This research project explores the integration of **Artificial Intelligence (AI)** and **Behavioral Analytics** to assist criminal investigations. Traditional methods are often manual, error-prone, and slow. Our system addresses these gaps by automating data handling, evaluating testimonies in real time, and identifying correlations between incidents using a multi-modal AI approach.

**Project ID**: R25-020  
**Course**: IT4010 – Research Project - 2024  
**Research Center**: Centre of Excellence in AI (CEAI)  
**Specialization**: Information Technology  

---

## System Architecture

![System Architecture Diagram](System-Diagram.jpg)

---

## Problem Statement

Criminal investigations today suffer from inefficiencies, subjectivity, and data fragmentation. Cross-referencing testimonies, identifying patterns, and verifying emotional cues are still heavily dependent on human judgment. There is a pressing need for a unified AI system that augments investigative accuracy and speed.

---

## Proposed Solution

Our proposed system combines:

- **Natural Language Processing** for analyzing and extracting information from testimonies  
- **Computer Vision** for facial emotion detection  
- **Physiological Analysis** using heart rate monitoring  
- **Audio Analysis** for detecting stress indicators  
- **Machine Learning** for pattern recognition and incident correlation

These components integrate into an intuitive application interface to provide investigators with real-time, actionable insights.

---

## Key Features

- **Automated Case Data Handling**: Uses OCR & NLP to extract and organize reports and witness statements.
- **Behavioral Analysis**: Real-time analysis of video, voice, and physiological signals during interrogation.
- **Dynamic Questioning Module**: Generates contextually relevant follow-up questions.
- **Incident Correlation**: Detects links between new and historic incidents using ML clustering and classification.
- **Investigator Dashboard**: Provides a searchable, filterable interface to manage and monitor cases.

---

## Technologies Used

- Python (NLP, ML, CV)
- TensorFlow / PyTorch
- OpenCV
- HuggingFace Transformers
- OCR Libraries (e.g., Tesseract)
- Datasets:
  - FER-2013, AffectNet, ASCERTAIN
  - Speech Emotion Recognition (Kaggle)
  - Crime Data Catalog (US Gov)

---

## Dataset Sources

- [FER2013 Facial Expression](https://www.kaggle.com/datasets/deadskull7/fer2013)
- [AffectNet](https://www.kaggle.com/datasets/thienkhonghoc/affectnet)
- [Speech Emotion Recognition](https://www.kaggle.com/datasets/dmitrybabko/speech-emotion-recognition-en)
- [CK Dataset](https://www.kaggle.com/datasets/davilsena/ckdataset)
- [Crime Data](https://catalog.data.gov/dataset?tags=crime)

---

## Team Members and Responsibilities

| Student ID    | Name               | Responsibility                                                                 |
|---------------|--------------------|--------------------------------------------------------------------------------|
| IT21813252    | Karunarathna K A D | Data extraction, database integration, dashboard development                   |
| IT21294334    | Abeywardana B A I S| Emotion recognition from video, voice, and heart rate                          |
| IT21822230    | Ediriweera E R L C | Real-time NLP analysis and dynamic question generation                         |
| IT21359606    | Fernando N D R N   | Pattern recognition and incident correlation using ML                          |

---

## Objectives

- **Main Goal**: Enhance the speed, accuracy, and intelligence of criminal investigations.
- **Sub Goals**:
  - Automate case data handling.
  - Analyze physiological and emotional responses.
  - Generate and refine interrogation questions dynamically.
  - Correlate current cases with historical patterns.

---

## Novelty

This is among the first comprehensive multi-modal AI tools aimed at supporting real-time criminal investigations. It goes beyond lie detection and data management by offering an integrated solution spanning behavioral cues, testimony analysis, and case linking.

---

## License

This project is conducted under an academic setting and is currently not open for commercial use. Licensing details will be updated upon completion of the research.
