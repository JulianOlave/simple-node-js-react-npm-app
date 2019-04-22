#!/usr/bin/env groovy

// @Library('pipeline-library-demo')_

// stage('Demo') {
//     echo 'Hello world'
//     sayHello 'Juliu s'
// }
node {

  stage('pruebita') {
    sh 'echo hiiii'
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