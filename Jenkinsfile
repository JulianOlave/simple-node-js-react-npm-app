node('clll') {
 
    docker.image('node:6-alpine').inside {
        stage('Test1') {
          sh 'node --version'
        }
        stage ('build') {
          sh 'npm install'
        }
        stage ('Test') {
          sh 'npm -v'
        }
        stage('Deliver') {
          sh './jenkins/scripts/deliver.sh' 
          input message: 'Finished using the web site? (Click "Proceed" to continue)' 
          sh './jenkins/scripts/kill.sh' 
        }        
    }            
}