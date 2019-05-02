#!/usr/bin/env groovy

@Library('PSL@master')
@Library('CILibrary@master') _
import com.quantum.CiUtils


def utils = new CiUtils(steps, env, docker)
utils.setEnvironmentVariables()

def branches = [:]
def names = nodeNames()
for (int i=0; i<names.size(); ++i) {
  def nodeName = names[i];
  // Into each branch we put the pipeline code we want to execute
  branches["node_" + nodeName] = {
    node {
      echo "Triggering on " + nodeName      
    }
  }
}

// Now we trigger all branches
parallel branches

// This method collects a list of Node names from the current Jenkins instance
@NonCPS
def nodeNames() {
  return jenkins.model.Jenkins.instance.nodes.collect { node -> node.name }
}
