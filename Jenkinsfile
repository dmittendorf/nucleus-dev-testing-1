/*
 * You can find the latest release tag at https://git.soma.salesforce.com/dci/sfci-pipeline-sharedlib/releases
 */
@Library('sfci-pipeline-sharedlib@master')

import net.sfdc.dci.BuildUtils
import net.sfdc.dci.GitHubUtils
import net.sfdc.dci.JenkinsUtils
import net.sfdc.dci.NotifyUtils
import net.sfdc.dci.MavenUtils
import groovy.json.JsonOutput

def envDef = [
    buildImage: 'ops0-artifactrepo1-0-prd.data.sfdc.net/docker-dev/uiplatform/forks/uiplatform-deploy:latest',
]

executePipeline(envDef) {

    stage('INIT') {
      checkout scm
      workspace = pwd()
    }

    doBuild()
}

def doBuild() {
    stage('BUILD') {
        try{
            sh 'node --version'
            sh 'npm --version'
            sh 'yarn --version'
            sh 'yarn config set proxy http://public0-proxy1-0-prd.data.sfdc.net:8080'
            sh 'yarn config set https-proxy http://public0-proxy1-0-prd.data.sfdc.net:8080'
            npmInit([nexusCredsId: 'sfci-nexus'])

            sh 'yarn install'
        } catch (e) {
            error 'Build failed.'
        }
    }
}
