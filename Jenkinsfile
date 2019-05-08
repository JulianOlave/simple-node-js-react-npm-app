#!/usr/bin/env groovy

// @Library('PSL@master')
// @Library('CILibrary@CBP/stable') _

// StartPipeline()

def filename = 'pipeline.yaml'
def data = readYaml file: filename

sh "${data.pipeline_os}"

data.pipeline_os = "Windows"

sh "rm $filename"

writeYaml file: filename, data: data


// // Change something in the file
// data.image.tag = applicationVersion

// sh "rm $filename"