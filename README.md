# Job Recommendation System Project Documentation

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Jupyter](https://img.shields.io/badge/jupyter-%23121011.svg?style=for-the-badge&logo=jupyter&logoColor=F37726)
![Docker](https://img.shields.io/badge/docker-%23121011.svg?style=for-the-badge&logo=docker&logoColor=1D63ED)
[![Python](https://img.shields.io/badge/python-%233776AB.svg?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)



This project implements a job recommendation system using a Flask backend and a React frontend. The system utilizes cosine similarity to recommend job titles based on user selections.

## Dataset Information

The dataset used for this project was sourced from Kaggle:
- **Dataset Name:** Combined_Jobs_Final.csv
- **Dataset Link:** [Combined Jobs and Resume Data](https://www.kaggle.com/code/liliyak/job-recommendation-analysis/input?select=Combined_Jobs_Final.csv)

## Project Components

The project consists of the following main components:

1. **Backend (Flask)**
   - Handles job recommendation logic and serves recommendations via REST API.
   - Preprocesses job titles and descriptions using NLTK for text cleaning and cosine similarity for recommendation.

2. **Frontend (React)**
   - Provides a user-friendly interface to interact with the job recommendation system.
   - Allows users to select a job title and receive recommended job titles based on similarity scores.
   

## Architecture Design

The architecture of the job recommendation system is as follows:

- **Frontend (React)**:
  - The frontend is built using React.js and provides a graphical user interface (GUI) for users to interact with the system.
  - It communicates with the backend via HTTP requests to fetch job titles and receive recommended job suggestions.

- **Backend (Flask)**:
  - The backend is developed using Flask, a lightweight Python web framework.
  - It exposes REST API endpoints (`/job_titles` and `/recommend`) to serve job titles and recommendations.
  - Job titles and descriptions are preprocessed using NLTK for text cleaning and transformed into TF-IDF vectors.
  - Cosine similarity is computed between TF-IDF vectors to determine job title similarities for recommendations.

- **Data Preprocessing**:
  - Job titles and descriptions from the dataset are cleaned using regular expressions to remove non-alphanumeric characters.
  - NLTK (Natural Language Toolkit) is used for tokenization, stop-word removal, and stemming to preprocess text data.

- **Machine Learning (Cosine Similarity)**:
  - The recommendation engine utilizes cosine similarity, a popular metric for measuring the similarity between two vectors.
  - Job titles are represented as TF-IDF (Term Frequency-Inverse Document Frequency) vectors, and similarity scores are computed based on cosine similarity between these vectors.

## Machine Learning Training

The machine learning aspect of this project involves the following steps:

1. **Text Preprocessing**:
   - Cleaning job titles and descriptions by removing special characters and stopwords.
   - Tokenization and stemming using NLTK to prepare text data for vectorization.

2. **Vectorization**:
   - Transforming preprocessed text data into TF-IDF vectors using scikit-learn's `TfidfVectorizer`.
   - Each job title is represented as a TF-IDF vector in a high-dimensional space.

3. **Similarity Computation**:
   - Computing cosine similarity between TF-IDF vectors to measure the similarity between job titles.
   - The similarity scores are used to recommend similar job titles based on user input.

   
## Screenshots

<p align = "center">
<h5>Home Page></h5>
  <img src="https://i.postimg.cc/13HnK8xH/Screenshot-2024-04-14-185040.png" width="80%"/>
</p>

<p align = "center">
  <br>
  <h5>Choose Title</h5>
  <img src="https://i.postimg.cc/fyBpK7Ks/Screenshot-2024-04-14-185555.png" width="80%"/>
  <br>
  <h5>Get Recommendation</h5>
  <img src="https://i.postimg.cc/6QJjC1XR/Screenshot-2024-04-14-185721.png" width="80%"/>
</p>


## Installation

### Traditional Method (Without Docker)

#### Backend Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Arijeet-Nayak/JTP-Project.git
   cd JTP-Project
   ```

2. **Setup Backend**
   ```bash
   python -m venv venv
   source venv/bin/activate  # Activate virtual environment
   pip install -r requirements.txt
   ```

3. **Run Flask Backend**
   ```bash
   python app.py
   ```

#### Frontend Installation

1. **Install Node.js**
   - Download and install Node.js from [Node.js official website](https://nodejs.org/).

2. **Setup Frontend**
   ```bash
   cd job-recommendation-app
   npm install
   ```

3. **Run React Frontend**
   ```bash
   npm start
   ```

### Docker Method

#### Prerequisites
- Docker installed on your machine.

#### Build and Run Docker Containers

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Arijeet-Nayak/JTP-Project.git
   cd JTP-Project
   ```

2. **Build Docker Images**
   ```bash
   docker-compose build
   ```

3. **Run Docker Containers**
   ```bash
   docker-compose up
   ```

4. **Access Frontend**
   - Open a web browser and go to `http://localhost:3000` to access the frontend interface.

## Usage

1. **Frontend Interface**
   - Visit `http://localhost:3000` in your web browser.
   - Select a job title from the dropdown list.
   - Click "Get Recommendations" to view recommended job titles based on similarity scores.

2. **Backend API**
   - The Flask backend exposes the following API endpoints:
     - `GET /job_titles`: Get a list of all job titles available.
     - `POST /recommend`: Provide a job title as input to receive recommended job titles.


---

This documentation provides an overview of the job recommendation system project, installation instructions using both traditional and Docker methods, usage guidelines, and information for contributors.
