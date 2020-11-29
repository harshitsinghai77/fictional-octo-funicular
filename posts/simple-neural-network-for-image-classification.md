---
title: "A simple neural network for Image Classification"
excerpt: "A very basic and easy to understand image classifier to get started with deep learning using images. We will be using Dense layer to set the baseline accuracy before moving to convolutional network and compare both the results."
coverImage: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=749&q=80"
date: "2020-11-29T12:10:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

## Your first deep neural network.

#### Required libraries

```python
import numpy as np
from keras.utils import to_categorical
from keras.datasets import cifar10
import matplotlib.pyplot as plt
from keras.layers import Input, Flatten, Dense, Conv2D, BatchNormalization, LeakyReLU, Dropout, Activation
from keras.models import Model
from keras.optimizers import Adam
%matplotlib inline
```

#### Loading the data

```python
(x_train, y_train), (x_test, y_test) = cifar10.load_data()

NUM_CLASSES = 10

x_train = x_train.astype('float32') / 255.0
x_test = x_test.astype('float32') / 255.0

y_train = to_categorical(y_train, NUM_CLASSES)
y_test = to_categorical(y_test, NUM_CLASSES)
```

1. Loads the CIFAR-10 dataset. x_train and x_test are numpy arrays of shape [50000, 32, 32, 3] and [10000, 32, 32, 3] , respectively. y_train and y_test are numpy arrays with shape [50000, 1] and [10000, 1] , respectively, containing the integer labels in the range 0 to 9 for the class of each image.

2. By default the image data consists of integers between 0 and 255 for each pixel channel. Neural networks work best when each input is inside the range –1 to 1, so we need to divide by 255.

3. We also need to change the integer labeling of the images to one-hot-encoded vectors. If the class integer label of an image is i, then its one-hot encoding is a vector of length 10 (the number of classes) that has 0s in all but the ith element, which is 1. The new shapes of y_train and y_test are therefore [50000, 10] and [10000, 10] respectively.

## Building the model

In Keras there are two ways to define the structure of your neural network: as a Sequential model or using the Functional API.

I recommend that even if you are just starting out building linear models with Keras, you still use the Functional API rather than Sequential models, since it will serve you better in the long run as your neural networks become more architecturally complex. The Functional API will give you complete freedom over the design of your deep neural network.

### Basic Model

```python
input_layer = Input(shape=(32,32, 3))

x = Flatten()(input_layer)
x = Dense(units=200, activation='relu')(x)
x = Dense(units=150, activation='relu')(x)

output_layer = Dense(units=10, activation='softmax')(x)

model = Model(input_layer, output_layer)
```

Here, we are using three different types of layer: Input , Flatten , and Dense .

1. The Input layer is an entry point into the network. We tell the network the shape of
   each data element to expect as a tuple.

2. Next we flatten this input into a vector, using a Flatten layer. This results in a vector
   of length 3,072 (= 32 × 32 × 3). The reason we do this is because the subsequent Dense layer requires that its input is flat, rather than a multidimensional array.

The Dense layer is perhaps the most fundamental layer type in any neural network. It contains a given number of units that are densely connected to the previous layer— that is, every unit in the layer is connected to every unit in the previous layer, through a single connection that carries a weight (which can be positive or negative). The out‐ put from a given unit is the weighted sum of the input it receives from the previous layer, which is then passed through a nonlinear activation function before being sent to the following layer. The activation function is critical to ensure the neural network is able to learn complex functions and doesn’t just output a linear combination of its input.

There are many kinds of activation function, but the three most important are ReLU, sigmoid, and softmax.

The final step is to define the model itself, using the Model class. In Keras a model is defined by the input and output layers. In our case, we have one input layer that we defined earlier, and the output layer is the final Dense layer of 10 units. It is also possible to define models with multiple input and output layers; we shall see this in action later in the book.

## Compiling the Model

In this step, we compile the model with an optimizer and a loss function:

```python
opt = Adam(lr=0.0005)
model.compile(loss='categorical_crossentropy', optimizer=opt, metrics=['accuracy'])
```

The loss function is used by the neural network to compare its predicted output to the ground truth. It returns a single number for each observation; the greater this number, the worse the network has performed for this observation.

We pass both the loss function and the optimizer into the compile method of the model, as well as a metrics parameter where we can specify any additional metrics that we would like reporting on during training, such as accuracy.

## Training the Model

```python
model.fit(x_train, y_train, batch_size = 32, epochs = 10, shuffle = True)
```

1. The raw image data.
2. The one-hot-encoded class labels.
3. The batch_size determines how many observations will be passed to the network at each training step.
4. The epochs determine how many times the network will be shown the full training data.
5. If shuffle = True , the batches will be drawn randomly without replacement from the training data at each training step.

This will start training a deep neural network to predict the category of an image from the CIFAR-10 dataset.

The training process works as follows. First, the weights of the network are initialized to small random values. Then the network performs a series of training steps.

![Training image](https://i.ibb.co/3BHcyWw/2cdcfd005394.png)

### Evaluating the model

We know the model achieves an accuracy of 51.9% on the training set, but how does
it perform on data it has never seen?

To answer this question we can use the evaluate method provided by Keras:

```python
model.evaluate(x_test, y_test)
```

The result will be
[1.4390370845794678, 0.48899999260902405]

The output from this method is a list of the metrics we are monitoring: categorical cross-entropy and accuracy. We can see that model accuracy is still 49.0% even on images that it has never seen before. Note that if the model was guessing randomly, it would achieve approximately 10% accuracy (because there are 10 classes), so 50% is a good result given that we have used a very basic neural network. We can view some of the predictions on the test set using the predict method:

```python
CLASSES = np.array(['airplane', 'automobile', 'bird', 'cat', 'deer', 'dog', 'frog', 'horse', 'ship', 'truck'])

preds = model.predict(x_test)
preds_single = CLASSES[np.argmax(preds, axis=-1)]
actual_single = CLASSES[np.argmax(y_test, axis=-1)]
```

We can view some of the images alongside their labels and predictions with the following code. As expected, around half are correct:

```python
n_to_show = 10
indices = np.random.choice(range(len(x_test)), n_to_show)
fig = plt.figure(figsize=(15, 3))
fig.subplots_adjust(hspace=0.4, wspace=0.4)

for i, idx in enumerate(indices):
    img = x_test[idx]
    ax = fig.add_subplot(1, n_to_show, i+1)
    ax.axis('off')
    ax.text(0.5, -0.35, 'pred = ' + str(preds_single[idx]), fontsize=10
        , ha='center', transform=ax.transAxes)
    ax.text(0.5, -0.7, 'act = ' + str(actual_single[idx]), fontsize=10
        , ha='center', transform=ax.transAxes)
    ax.imshow(img)
```

![Basic Model Results](https://i.ibb.co/tpk4h8t/7c83fbe0562b.png)

Congratulations! You’ve just built your first deep neural network using Keras and used it to make predictions on new data.

In the next article we will look at ways of improving this model, by introducing a few new layer types called convolutional layer.
