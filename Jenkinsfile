#!/usr/bin/env groovy

// @Library('PSL@master')
// @Library('CILibrary@CBP/stable') _

// StartPipeline()
node {
  docker.image('node:7-alpine').inside { 
    stage('rw') {
      try {
        def filename = 'pipeline.yml'
        def data = readYaml file: filename

        sh "echo ${data.pipeline_os}"

        data.pipeline_os = "Windows"

        sh "rm $filename"

        writeYaml file: filename, data: data

        sh "echo ${data.pipeline_os}"
      }
      catch (err) {
        sh "echo ${err}"
      }

    }
  }
}


// // Change something in the file
// data.image.tag = applicationVersion

// sh "rm $filename"