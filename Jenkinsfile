#!/usr/bin/env groovy

// @Library('PSL@master')
// @Library('CILibrary@CBP/stable') _

// StartPipeline()
node {
  docker.image('node:7-alpine').inside { 
    stage('rw') {
      try {
        def gitInfo = checkout scm
        def gitCommit = gitInfo["GIT_COMMIT"]
        def filename = 'pipeline.yml'
        if(fileExists(filename)) {
          def data = readYaml file: filename

          echo "${data.pipeline_os}"

          echo "ENV ${data.env}"

          echo "${gitCommit}"

          echo "buildArgs ${data.env.buildArgs}"

          data.env.buildArgs = data.env.buildArgs + ' Testing!!'

          sh "rm $filename"


          writeYaml file: filename, data: data

          def data2 = readYaml file: filename
          echo "New buildArgs ${data.env.buildArgs}"
        } else{
           def amap = ['something': 'my datas',
                      'size': 3,
                      'isEmpty': false,
                      'version': '0.0.1',
                      'language': 'nodejs',
                      'nodejs_version': "8",
                      'pipeline_os': "Linux"]

          writeYaml file: filename, data: amap
          echo ' wasnt there'
        }

      }
      catch (err) {
        echo " Errrrrror ${err}"
      }

    }
  }
}


// // Change something in the file
// data.image.tag = applicationVersion

// sh "rm $filename"