---
title: "Everything you need to know to upload Images to IPFS"
excerpt: "Everything I learned while working with image and IPFS."
coverImage: "https://miro.medium.com/max/10418/1*OB3Vk1P6L6iHoHAQGYROXw.png"
date: "2021-12-28T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

Code snippet to add user uploaded image, SVG images or base64 images to IPFS.

# Getting Started with IPFS using React.

Boilerplate code for IPFS.

```javascript
import { create } from "ipfs-http-client";
import axios from "axios";

const ifpsConfig = {
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
};

const ipfs = create(ifpsConfig);

export const addDataToIPFS = async (metadata) => {
  const ipfsHash = await ipfs.add(metadata);
  return ipfsHash.cid.toString();
};

export const retrieveImageFromIPFS = (ipfsHash) => {
  return axios.get(`https://ipfs.io/ipfs/${imgHash}`);
};
```

## Upload Image using react-dropzone and Send it to IPFS

```javascript
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "reactstrap";

const UploadImage = ({ onImageUploaded }) => {
  const [image, setImage] = useState();

  const convertToBuffer = async (reader) => {
    //file is converted to a buffer for upload to IPFS
    //set this buffer -using es6 syntax
    const buffer = await Buffer.from(reader.result);
    return buffer;
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      const uploadedImage = acceptedFiles[0];
      if (!uploadedImage) return;

      uploadedImage["preview"] = URL.createObjectURL(uploadedImage);
      setImage(uploadedImage);

      let reader = new window.FileReader();
      reader.readAsArrayBuffer(uploadedImage);
      reader.onloadend = async () => {
        const bufferImage = await convertToBuffer(reader);
        const ipfsHash = await addDataToIPFS(bufferImage);
        console.log("ipfsHash", ipfsHash);
      };
    },
    [onImageUploaded]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/jpeg, image/png",
  });

  const thumbs = image && (
    <img className="square-cirle" src={image.preview} alt={image.name} />
  );

  return (
    <div {...getRootProps()} className="mb-3">
      <input {...getInputProps()} />
      {isDragActive ? (
        <Button block color="warning" type="button">
          Drop
        </Button>
      ) : (
        <Button block color="default" type="button">
          Drag and drop profile pic
        </Button>
      )}
      {thumbs}
    </div>
  );
};

export default UploadImage;
```

## Create SVG from text and upload it to IPFS

Maybe you want to create a SVG using awesome Game of Thrones quotes and upload it to IPFS 🤔.

Don't worry you can find something like that here: [https://game-of-thrones-nft.netlify.app/](https://game-of-thrones-nft.netlify.app/)

Here's how to do it.

```javascript
import { renderToStaticMarkup } from "react-dom/server";

export const createSvgFromText = (text) => {
  const imgSVG = (
    <svg
      id="mysvg"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
      viewBox="0 0 350 350"
      fill="#FFC059"
    >
      <rect width="100%" height="70%" fill="black" />
      <text
        x="50%"
        y="25%"
        textAnchor="middle"
        style={{ fontFamily: "Gochi Hand, cursive", fontSize: "28px" }}
      >
        <tspan x="50%" dy="1.2em">
          {text}
        </tspan>
      </text>
    </svg>
  );
  return renderToStaticMarkup(imgSVG);
};

export const convertSVGToBuffer = async (svgElement) => {
  const svgBuffer = Buffer.from(svgElement);
  return svgBuffer;
};
```

This function will take someText as an input, will create a SVG and return it as a static markup.

Here's how to send your awesome SVG to IPFS

```javascript
const uploadTextSVGToIpfs = async () => {
  // Create SVG image from text and add it to IPFS
  const imgSVG = createSvgFromText("The lone wolf dies but the pack survives.");
  const svgImg = await convertSVGToBuffer(imgSVG);
  const ipfsHash = await addDataToIPFS(svgImg);

  console.log(ipfsHash);
};
```

## Upload Base64 encoded image to IPFS

Here's how to directly upload base64 encoded image to IPFS.

```javascript
const base64EncodedImageToIPFS = async (base64ImageString) => {
  const fetchImage = await fetch(base64ImageString);
  const blob = await fetchImage.blob();
  const file = new File([blob], "something.png", { type: "image/png" });
  const imghash = await addDataToIPFS(file);
  return imghash;
};
```

`base64EncodedImageToIPFS` will take base64 image as an input, will convert it too blob, create a file object from the blob and upload the file to ipfs.

That’s it for today, see you soon. :)
