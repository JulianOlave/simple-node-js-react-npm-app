#!/usr/bin/env groovy

@Library('PSL@master')
@Library('CILibrary@CBP/stable') _

node {
  try {
    StartPipeline()
  }  
  catch (err) {
    echo " Errrrrror ${err}"
  }
}

// DOCKER_ORG='artifactory.dev.adskengineer.net/autodeskcloud'
// DOCKER_REGISTRY='https://artifactory.dev.adskengineer.net/artifactory/docker-local-v2/'
// DOCKER_CREDENTIALS='artifactory-deploy-dev'
// NODE_IMAGE='artifactory.dev.adskengineer.net/quantum-devops/cloudos-v2/base-nodejs8:latest'
// BUILD_VERSION="0.0.${BUILD_NUMBER}"
// SAFE_BRANCH_NAME="nombre/debranch".replaceAll('/','-')
// DOCKER_TAG=SAFE_BRANCH_NAME + "-${BUILD_VERSION}"
// DOCKER_ARGS="DOCKER_ORG=${DOCKER_ORG} DOCKER_TAG=${DOCKER_TAG}"
// currentBuild.displayName = DOCKER_TAG

// node {
//   docker.image('node:7-alpine').inside { 
//     stage('rw') {
//       try {
//         def gitInfo = checkout scm
//         def gitCommit = gitInfo["GIT_COMMIT"]
//         def filename = 'pipeline.yml'
//         if(fileExists(filename)) {
//           def data = readYaml file: filename
          
//           echo "${gitCommit}"

//           echo "${data.pipeline_os}"

//           echo "ENV ${data.env[0]}"

//           def builddd = data.env[0].buildArgs

//           echo "buildArgs ${builddd}"

//           builddd = builddd + ' Testing!!'
//           data.env[0].buildArgs = builddd

//           sh "rm $filename"


//           writeYaml file: filename, data: data

//           def data2 = readYaml file: filename
//           echo "New buildArgs ${data.env.buildArgs}"
//         } else{
//            def amap = ['something': 'my datas',
//                       'size': 3,
//                       'isEmpty': false,
//                       'version': '0.0.1',
//                       'language': 'nodejs',
//                       'nodejs_version': "8",
//                       'pipeline_os': "Linux"]

//           writeYaml file: filename, data: amap
//           echo ' wasnt there'
//         }

//       }
//       catch (err) {
//         echo " Errrrrror ${err}"
//       }

//     }
//   }
// }


// // // Change something in the file
// // data.image.tag = applicationVersion

// // sh "rm $filename"