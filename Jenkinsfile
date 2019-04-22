#!/usr/bin/env groovy

node {

  stage('pruebita') {
    echo 'hi'
  }
    
    docker.image('node:7-alpine').inside {
        stage('Test1') {
            sh 'node --version'
        }
        withEnv(['CI=true']) {
            stage ('build') {
                sh 'npm install'
            }
            stage ('Test') {
                sh './jenkins/scripts/test.sh'
            }
            stage('Deliver') {
                sh './jenkins/scripts/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './jenkins/scripts/kill.sh' 
            }
        }
    }
}