# Flashcard App

This Flashcard App is a language-learning tool that helps users enhance their vocabulary through interactive flashcards. Users can create flashcards for new words and their meanings, allowing them to practice and improve their language skills in a structured way. This application is developed with a Java Spring Boot backend, MySQL database, and a plain HTML and JavaScript frontend.

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Setup](#setup)
4. [Usage](#usage)
5. [Database Configuration](#database-configuration)
6. [Future Enhancements](#future-enhancements)
7. [License](#license)

## Features

- **Create Flashcards**: Add new words with definitions.
- **View Flashcards**: Display flashcards for easy reference.
- **Delete Flashcards**: Remove flashcards that are no longer needed.
- **Search Functionality**: Quickly search for words in the collection.
- **User-friendly Interface**: Simple, intuitive UI for easy navigation.

## Tech Stack

- **Backend**: Java, Spring Boot, Maven
- **Frontend**: HTML, JavaScript, CSS
- **Database**: MySQL
- **Server**: Embedded Tomcat (provided by Spring Boot)

## Setup

### Prerequisites

1. Java Development Kit (JDK) 17 or higher
2. Maven for managing dependencies
3. MySQL database

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/flashcard-app.git
   cd flashcard-app
   
2. **Set up the MySQL Database**:

   - **Create a new MySQL database**: 
   - Open your MySQL client and create a new database, for example:
     ```sql
     CREATE DATABASE flashcards_db;
     ```

   - **Update the database credentials in the `application.properties` file**:
   - Open the `src/main/resources/application.properties` file.
   - Update the following properties with your MySQL database details:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/flashcards_db
     spring.datasource.username=your_username
     spring.datasource.password=your_password
     spring.jpa.hibernate.ddl-auto=update
     ```
   - Replace `your_username` and `your_password` with your actual MySQL credentials.
     
3. **Install dependencies**:
   
