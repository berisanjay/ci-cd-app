pipeline {
    agent any
    tools {
        nodejs 'NodeJS'  // <-- Match the exact name in Jenkins
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                bat 'npm install -g pm2'
                bat 'pm2 stop ci-cd-app || exit 0'
                bat 'pm2 start app.js --name ci-cd-app'
                bat 'pm2 save'
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
