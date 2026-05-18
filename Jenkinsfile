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

        stage('Tag Products Image') {

            steps {

                bat 'docker tag kubecart-pipeline-products:latest nnirmal24/kubecart-products:latest'

            }

        }

        stage('Push Products Image') {

            steps {

                bat 'docker push nnirmal24/kubecart-products:latest'

            }

        }

        stage('Check Running Containers') {

            steps {

                bat 'docker ps'

            }

        }

    }

}