#!/usr/bin/env bash

set -eux

pushd src/website/assets;
    npm prune
    npm install
    node_modules/.bin/webpack
popd;

pushd src/website;
    GOOS=linux go build
popd;

rm -rf deploy 2>/dev/null;
mkdir -p deploy

pushd deploy;
    cp ../manifest.yml manifest.yml
    cp -R ../src/website/dist dist/
    cp -R ../src/website/images images/
    cp -R ../src/website/templates templates/
    cp ../src/website/website website

    chmod a+x website
popd;

eval $(docker-machine env)
RANDOM_HASH=`date | md5`
docker build . -t gcr.io/corded-photon/painting-website:RANDOM_HASH
gcloud docker push gcr.io/corded-photon/painting-website:RANDOM_HASH

if kubectl get deployment painting-website
then
    echo "deployment already exists - updating image"

    kubectl set image deployment/painting-website painting-website=gcr.io/corded-photon/painting-website:RANDOM_HASH
else
    echo "deployment does not exist - uploading image"

    kubectl run painting-website --image gcr.io/corded-photon/paintings-website:RANDOM_HASH --port=8000
    kubectl expose deployment painting-website --type="LoadBalancer"
fi

gcloud docker images
kubectl rollout status deployment/painting-website
kubectl get deployment painting-website
kubectl get services painting-website
kubectl describe service painting-website
kubectl get pods | grep painting-website
echo "Finished deploying image painting-website:$RANDOM_HASH"