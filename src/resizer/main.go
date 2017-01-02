package main

import (
    "flag"
    "github.com/nfnt/resize"
    "image"
    "os"
    "log"
    "image/jpeg"
    "fmt"
    "regexp"
    "strings"
)

func main() {
    maxWidth := flag.Uint("maxWidth", 220, "Max width of thumbnail")
    maxHeight := flag.Uint("maxHeight", 120, "Max height of thumbnail")
    inputFile := flag.String("inputFile", "foo.jpg", "File to be resized")
    outputDir := flag.String("outputDir", "/tmp", "Directory to output new file (without trailing slash)")
    flag.Parse()

    fmt.Println("Flags:")
    fmt.Println(fmt.Sprintf("--maxWidth=%d", *maxWidth))
    fmt.Println(fmt.Sprintf("--maxHeight=%d", *maxHeight))
    fmt.Println(fmt.Sprintf("--inputFile=%s", *inputFile))
    fmt.Println(fmt.Sprintf("--outputDir=%s", *outputDir))

    isJpeg, _ := regexp.MatchString(".*jpg|.*jpeg", *inputFile)
    if !isJpeg {
        log.Fatalf("%s is not a jpg/jpeg file. Only jpg/jpeg files are permitted!", *inputFile)
    }

    inputFileWithoutPath := getFileNameWithoutPath(*inputFile)
    fmt.Printf("Converting '%s'\n", inputFileWithoutPath)

    img := fileToImage(*inputFile)

    thumbnail := resize.Thumbnail(*maxWidth, *maxHeight, img, resize.NearestNeighbor)

    imageToFile(thumbnail, inputFileWithoutPath, *outputDir)
}

func getFileNameWithoutPath(fileName string) string {
    re, err := regexp.Compile(`([^\/]*)$`)
    if err != nil {
        log.Fatal(err)
    }
    res := re.FindAllStringSubmatch(fileName, -1)
    fileNamePlusFormat := res[0][0]

    re, err = regexp.Compile(`(.+)\.`)
    if err != nil {
        log.Fatal(err)
    }
    res = re.FindAllStringSubmatch(fileNamePlusFormat, -1)

    return strings.TrimRight(fmt.Sprintf("%v", res[0][0]), ".")
}

func fileToImage(fileName string) image.Image {
    reader, err := os.Open(fileName)
    if err != nil {
        log.Fatal(err)
    }
    defer reader.Close()
    img, _, err := image.Decode(reader)
    if err != nil {
        log.Fatal(err)
    }

    return img
}

func imageToFile(img image.Image, oldFilename, outputDir string) {
    newFileLocation := fmt.Sprintf("%s/%s_thumbnail.jpg", outputDir, oldFilename)
    newFile, err := os.Create(newFileLocation)
    if err != nil {
        log.Fatal(err)
    }
    defer newFile.Close()

    err = jpeg.Encode(newFile, img, &jpeg.Options{jpeg.DefaultQuality})
    if err != nil {
        log.Fatal(err)
    }

    fmt.Println(newFileLocation)
}
