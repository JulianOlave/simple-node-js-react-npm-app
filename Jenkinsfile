#!/usr/bin/env groovy

@Library('PSL@master')
@Library('CILibrary@CBP/stable') _




node { 
    withEnv(["PATH=C:/Program Files/Git/usr/bin"]) {
      docker.image('node:7-alpine').inside {
          stage('Test1') {
              sh 'node --version'
          }
          stage('cilibrary') {
            try {
              StartPipeline()
            }
            catch(err) {                        
              sh "E###RRORE: ${err}"
            }
            finally{            
              echo '#####finally'
            }
          }
      }
    }
}