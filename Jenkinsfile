pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    stages {
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

        stage('Build') {
            steps {
                echo 'Build stage - optional'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy stage - optional'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
        }
        success {
            echo 'All tests passed ✅'
        }
        failure {
            echo 'Pipeline failed ❌'
        }
    }
}
