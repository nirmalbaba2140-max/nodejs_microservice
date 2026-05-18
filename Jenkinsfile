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

        // =========================
        // TAG IMAGES
        // =========================

        stage('Tag Products Image') {

            steps {

                bat 'docker tag kubecart-pipeline-products:latest nnirmal24/kubecart-products:latest'

            }

        }

        stage('Tag Customer Image') {

            steps {

                bat 'docker tag kubecart-pipeline-customer:latest nnirmal24/kubecart-customer:latest'

            }

        }

        stage('Tag Shopping Image') {

            steps {

                bat 'docker tag kubecart-pipeline-shopping:latest nnirmal24/kubecart-shopping:latest'

            }

        }

        stage('Tag Frontend Image') {

            steps {

                bat 'docker tag kubecart-pipeline-nginx-proxy:latest nnirmal24/kubecart-frontend:latest'

            }

        }

        // =========================
        // DOCKER LOGIN
        // =========================

        stage('DockerHub Login') {

            steps {

                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {

                    bat 'docker login -u %DOCKER_USER% -p %DOCKER_PASS%'

                }

            }

        }

        // =========================
        // PUSH IMAGES
        // =========================

        stage('Push Products Image') {

            steps {

                bat 'docker push nnirmal24/kubecart-products:latest'

            }

        }

        stage('Push Customer Image') {

            steps {

                bat 'docker push nnirmal24/kubecart-customer:latest'

            }

        }

        stage('Push Shopping Image') {

            steps {

                bat 'docker push nnirmal24/kubecart-shopping:latest'

            }

        }

        stage('Push Frontend Image') {

            steps {

                bat 'docker push nnirmal24/kubecart-frontend:latest'

            }

        }

        // =========================
        // VERIFY CONTAINERS
        // =========================

        stage('Check Running Containers') {

            steps {

                bat 'docker ps'

            }

        }

    }

}