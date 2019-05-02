#!/usr/bin/env groovy
def branches = [:]
def names = nodeNames()
for (int i=0; i<names.size(); ++i) {
  def nodeName = names[i];
  // Into each branch we put the pipeline code we want to execute
  branches["node_" + nodeName] = {
    node(nodeName) {
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