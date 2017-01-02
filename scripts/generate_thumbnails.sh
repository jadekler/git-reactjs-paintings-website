#!/usr/bin/env bash

RESIZER=$GOPATH/src/resizer/main.go
ORIGINALS_DIR=$GOPATH/src/website/assets/images/originals
THUMBNAILS_DIR=$GOPATH/src/website/assets/images/thumbnails

pushd $ORIGINALS_DIR;
    for i in `ls`; do
        go run $RESIZER --inputFile=$i --outputDir=$THUMBNAILS_DIR
    done
popd;