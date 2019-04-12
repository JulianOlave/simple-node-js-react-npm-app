// pipeline {
//     agent {
//         docker {
//             image 'node:6-alpine'
//             args '-p 3000:3000'
//         }
//     }
//     environment {
//         CI = 'true'
//     }
//     stages {
//         stage('Build') {
//             steps {
//                 sh 'npm install'
//             }
//         }       
//         stage('Test') {
//             steps {
//                 sh './jenkins/scripts/test.sh'
//             }
//         }
//         stage('Deliver') {
//             steps {
//                 sh './jenkins/scripts/deliver.sh'
//                 input message: 'Hello Again 2'
//                 sh './jenkins/scripts/kill.sh'
//             }
//         }
//     }
// }

node {
    dcoker.image('node:6-alpine').inside {
        stage ('build') {
            sh 'npm install'
        }
        
        stage ('Test') {
            sh './jenkins/scripts/test/.sh'
        }
    }
}