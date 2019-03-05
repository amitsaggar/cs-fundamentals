## Jenkins

My quest started with exploring how to create automation pipeline from the very begining.

First step is to understand github well. Next i looked into getting Jenkins master/slave up in AWS so it could scale and is highly available.

Multiple different ways to do that with Docker, or directly in EC-2. Building from RPM etc.

[Jenkins 2.0: highly available master](https://github.com/widdix/aws-cf-templates/tree/master/jenkins)

This template describes a Jenkins master in a highly available manner. If the master instance fails it will be replaced automatically. All data stored on EFS where it is replicated across AZs and the file system can grow without a limit. The Jenkins master sits behind a load balancer to provide a fixed endpoint. Logs from the operating system and Jenkins are pushed to CloudWatch Logs. Ebs vs Efs is also a good study.

**********************

* [Cloudonaut template](https://templates.cloudonaut.io/en/stable/)
* [Free Templates for AWS CloudFormation] https://github.com/widdix/aws-cf-templates
* Amazon Web Services - Labs - All the AWS related resources are available here from deeplearning to cloudformation
[Github AWS](https://github.com/awslabs/)
* [Challenges Your AWS And Cloudformation - Very detailed and good.](https://github.com/dennyzhang/challenges-cloudformation-jenkins)
* [Challenges Your Kubernetes Skills And Knowledge](https://kubernetes.dennyzhang.com)
** https://github.com/dennyzhang/challenges-kubernetes
* https://wiki.jenkins.io/display/JENKINS/Amazon+EC2+Plugin
* https://docs.aws.amazon.com/aws-technical-content/latest/jenkins-on-aws/jenkins-integration.html

Simple shell script for initiating blue-green deployments on Amazon EC2 Container Service (ECS)
  https://github.com/silinternational/ecs-deploy

Articles: 
  https://medium.com/@jagdale0210/deploy-jenkins-master-slave-as-docker-container-ea8557d0d52a
  https://antonfisher.com/posts/2017/01/16/run-jenkins-in-docker-container-with-persistent-configuration/
  https://github.com/gitbucket/gitbucket/wiki/Setup-Jenkins-Multibranch-Pipeline-and-Organization
  https://github.com/jenkinsci/workflow-aggregator-plugin/blob/master/demo/README.md