node {
    /* Requires the Docker Pipeline plugin to be installed */
    docker.image('node:7-alpine').inside {
        stage('Test1') {
            sh 'node --version'
        }
        stage ('build') {
            sh 'npm install'
        }
        
        stage ('Test') {
            sh './jenkins/scripts/test/.sh'
        }
    }
}