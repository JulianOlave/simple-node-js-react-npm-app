
pipeline {
  agent none
  stages {
    stage('test on linux') {
      agent {
        label 'master'
      }
      steps {
        sh 'echo hi'
      }
    }
    stage('test on windows') {
      agent {
        label 'windows'
      }
      steps {
        bat 'echo hiiiii'
      }
    } 
  }
}