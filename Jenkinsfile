pipeline {

    agent any

    stages {

        stage('Clone Repository') {

            steps {

                git 'https://github.com/nirmalbaba2140-max/nodejs_microservice.git'

            }

        }

        stage('Build Docker Containers') {

            steps {

                bat 'docker compose up --build -d'

            }

        }

        stage('Check Running Containers') {

            steps {

                bat 'docker ps'

            }

        }

    }

}