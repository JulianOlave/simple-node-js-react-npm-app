#!/usr/bin/env groovy

@Library('PSL@master')
@Library('CILibrary@CBP/stable') _




node { 
    docker.image('node:7-alpine').inside {
        stage('Test1') {
            sh 'node --version'
        }
        stage('cilibrary') {
          try {
            StartPipeline()
          }
          catch(err) {                        
            sh "ERRORE: ${err}"
          }
          finally{            
            echo 'finally'
          }
        }
    }
}