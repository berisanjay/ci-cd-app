pipeline {
    agent any

    tools {
        nodejs 'NodeJS 24.9.0'   // 👈 must match the NodeJS name in Jenkins > Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/berisanjay/ci-cd-app.git'
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
                // ✅ Stop old process if running, then start new one
                bat '''
                pm2 stop all || echo "No existing process to stop"
                pm2 start app.js --name ci-cd-app
                pm2 save
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Build, Test, and Deploy Successful!'
        }
        failure {
            echo '❌ Build or Tests Failed. Check logs.'
        }
    }
}
