#!/usr/bin/env groovy

// @Library('PSL@master')
// @Library('CILibrary@CBP/stable') _

// StartPipeline()
node {
  docker.image('node:7-alpine').inside { 
    stage('rw') {
      try {
        def filename = 'pipeline.yml'
        if(fileExists(filename)) {
          def data = readYaml file: filename

          sh " ${data.pipeline_os}"

          data.pipeline_os = "Windows"

          sh "rm $filename"


          writeYaml file: filename, data: data

          def data2 = readYaml file: filename
          sh " ${data2.pipeline_os}"
        } else{
           def amap = ['something': 'my datas',
                      'size': 3,
                      'isEmpty': false,
                      'version': '0.0.1',
                      'language': 'nodejs',
                      'nodejs_version': "8",
                      'pipeline_os': "Linux"]

          writeYaml file: filename, data: amap
          sh ' wasnt there'
        }

      }
      catch (err) {
        sh " Errrrrror ${err}"
      }

    }
  }
}


// // Change something in the file
// data.image.tag = applicationVersion

// sh "rm $filename"