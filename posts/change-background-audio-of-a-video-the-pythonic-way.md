---
title: "Change background audio of a video— The Pythonic Way"
excerpt: "Change the audio of a video file programatically using Python."
coverImage: "https://images.unsplash.com/photo-1554223789-df81106a45ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
date: "2020-07-08T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

MoviePy is an extremely useful library when dealing with video files. It’s built on top of FFmpeg.

> MoviePy is a Python module for video editing, which can be used for basic operations (like cuts, concatenations, title insertions), video compositing (a.k.a. non-linear editing), video processing, or to create advanced effects. It can read and write the most common video formats, including GIF.

## Video

We will be replacing the audio file for this video

<iframe width="100%" height="315" src="https://www.youtube.com/embed/4xPiBplFfE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Audio

<iframe width="100%" height="315" src="https://www.youtube.com/embed/pWc6rPPKzCU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Code

Install [moviepy](https://zulko.github.io/moviepy/install.html) from [here](https://zulko.github.io/moviepy/install.html). The library also requires a few external software like [ImageMagick](https://imagemagick.org/index.php). You can download it from [here](https://imagemagick.org/script/download.php).

```python
import os

ABS_PATH = os.path.abspath(__file__)
BASE_DIR = os.path.dirname(ABS_PATH)

source_video_path = os.path.join(BASE_DIR, "messi.mp4")
source_audio_path = os.path.join(BASE_DIR, "lucid_dreams.mp3")
new_video_path = os.path.join(BASE_DIR, "edited-video.mp4")
```

```python
from moviepy.editor import VideoFileClip, AudioFileClip

video_clip = VideoFileClip(source_video_path)
audio_clip = AudioFileClip(source_audio_path)

audio_clip = audio_clip.subclip(0, video_clip.duration)

final_clip = video_clip.set_audio(audio_clip)
final_clip.write_videofile(new_video_path, codec='libx264', audio_codec='aac')
```

The code is pretty straight forward. source_video_path is the source video file, source_audio_path is the source audio file and final_video_path is the final rendered video.

```python
new_audio_clip = new_audio_clip.subclip(0, video_clip.duration)
```

This line makes sure that the audio clip has the same length as the video clip duration.

```python
final_clip = video_clip.set_audio(new_audio_clip)
final_clip.write_videofile(final_video_path, codec='libx264', audio_codec="aac")
```

Finally, we set the audio of the source video clip as the new_audio_clip and write the video file in the given path.

## Mixing both the audio

Earlier we replace the song of the video file with the new song. Now, we’re going to merge both the audio files on top of each other. Think of it as two songs playing at the same time rather than after each other.

![change-background-audio-of-a-video-the-pythonic-way](https://miro.medium.com/max/908/1*S2G3laYwVHfNW4gpLeojSA.png)

The code is almost similar to the previous code.

```python
original_audio = original_audio.fx(volumex, 0.4)
```

We’re using the .fx(volumes, 0.4) to decrease the volume of the original audio.

```python
final_audio = CompositeAudioClip([original_audio, bg_music])
final_audio.write_audiofile(final_audio_path, fps=original_audio.fps)

final_clip = video_clip.set_audio(final_audio)

final_clip.write_videofile(final_video_path, codec='libx264', audio_codec="aac")
```

CompositeAudioClip takes an array of the music files. You can compose as many audio clips as you want, but remember they will be on top of each other, and not in sequence order (i.e one after the other).

## Output Video

<iframe width="100%" height="315" src="https://www.youtube.com/embed/ocBA0y5bW7I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

That’s it, you’re done. :)
