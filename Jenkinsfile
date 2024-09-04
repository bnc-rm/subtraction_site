pipeline {
  agent any
  stages {
    stage('Build Docker Image') {
      steps {
        script {
          bat 'docker build -t angelocapone/my-app:v1 .'
        }
      }
    }
    stage('Push') {
      steps {
        bat 'docker push angelocapone/my-app:v1'
      }
    }    
  }
  post {
    always {
      cleanWs() 
    }
  }  
}
