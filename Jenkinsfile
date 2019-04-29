node {
 
    docker.image('node:7-alpine').inside {
        stage('Test1') {
          sh 'node --version'
        }
        stage ('build') {
          sh 'npm install'
        }
        stage ('Test') {
          sh 'TEst 1'
        }
        stage('Deliver') {
          sh './jenkins/scripts/deliver.sh' 
          input message: 'Finished using the web site? (Click "Proceed" to continue)' 
          sh './jenkins/scripts/kill.sh' 
        }        
    }
    stage('#Test1') {
      sh 'node --version'
    }
    stage ('#build') {
      sh 'npm install'
    }
    stage ('#Test') {
      sh 'TEst'
    }
    stage('#Deliver') {
      sh 'Deliver!'
    }            
}