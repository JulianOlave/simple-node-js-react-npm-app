#!/usr/bin/env groovy

pipeline {
  stages {
    stage('test on linux') {
      agent {
        label 'linux'
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