# TP fil rouge

## Objectif

L'objectif de ce TP est de mettre en pratique les notions vues en cours en deux parties :

- une partie sur le deploiement d'une application web avec une architecture micro-services en utilisant docker et Kubernetes
- une partie sur l'automatisation de la creation d'infrastructure avec Terraform, et l'automatisation de la configuration de serveurs avec Ansible sur AWS

## Partie 1 : Micro-services

### Pré-requis

- Docker
- Kubernetes

### Contexte

Votre application est une application web composee de 6 micro-services :

- event-bus : un service qui permet de publier des evenements 
- moderation : un service qui permet de moderer les commentaires
- query : un service qui permet de recuperer les commentaires
- comments : un service qui permet de creer des commentaires
- client : un service qui permet d'afficher les commentaires
- posts : un service qui permet de creer des posts

### Etape 1 : Dockeriser les micro-services

Pour chaque micro-service, vous devez creer un Dockerfile qui permet de construire une image docker de ce micro-service.
Le dockerfile devra etre cree dans le repertoire de chaque micro-service.

N'oubliez pas de creer un fichier .dockerignore pour chaque micro-service afin d'eviter de copier les fichiers inutiles dans l'image docker.

### Etape 2 : Deployer les micro-services sur Kubernetes

Vous devez deployer les micro-services sur Kubernetes en utilisant les fichiers de configuration suivants :

- event-bus-depl.yaml
- moderation-depl.yaml
- query-depl.yaml
- comments-depl.yaml
- client-depl.yaml
- posts-depl.yaml

ces fichiers devront etre crees dans un repertoire "k8s" dans le repertoire de chaque micro-service.

## Partie 2 : Automatisation

### Pré-requis

- Terraform
- Ansible

### Contexte

Vous devez automatiser la creation d'une infrastructure sur AWS avec Terraform, et l'automatisation de la configuration de serveurs avec Ansible.

### Etape 1 : Creation de l'infrastructure

Vous devez creer une infrastructure sur AWS avec Terraform en utilisant le fichier de configuration suivant:

- main.tf

Via celui ci, vous devez creer une instance ec2, sur laquelle vous provisionnerez minikube.

### Etape 2 : Configuration de l'instance

Vous devez configurer l'instance avec Ansible en utilisant le fichier de configuration suivant:

- setup.yml

Via celui ci, vous devez installer docker, kubectl, et minikube sur l'instance.

### Etape 3 : Utiliser Ansible pour deployer les micro-services

Avec un second playbook, vous deploierez les micro-services sur minikube. Votre playbook copiera les fichiers sources des micro-services sur l'instance, puis les deployera sur minikube.








