pipeline {

    agent any

    environment {

        KUBECONFIG = 'C:\\Users\\user.DESKTOP-G887T85\\.kube\\config'

    }

    stages {

        // =========================
        // CLEAN OLD CONTAINERS
        // =========================

        stage('Cleanup Old Containers') {

            steps {

                bat 'docker compose down --remove-orphans'

            }

        }

        // =========================
        // CLONE REPOSITORY
        // =========================

        stage('Clone Repository') {

            steps {

                git 'https://github.com/nirmalbaba2140-max/nodejs_microservice.git'

            }

        }

        // =========================
        // BUILD CONTAINERS
        // =========================

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

                bat 'docker tag kubecart-pipeline-frontend:latest nnirmal24/kubecart-frontend:latest'

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
        // RESTART KUBERNETES PODS
        // =========================

        stage('Restart Kubernetes Deployments') {

            steps {

                bat 'kubectl rollout restart deployment products-deployment'
                bat 'kubectl rollout restart deployment customer-deployment'
                bat 'kubectl rollout restart deployment shopping-deployment'
                bat 'kubectl rollout restart deployment frontend-deployment'

            }

        }

        // =========================
        // VERIFY KUBERNETES PODS
        // =========================

        stage('Check Kubernetes Pods') {

            steps {

                bat 'kubectl get pods'

            }

        }

    }

}