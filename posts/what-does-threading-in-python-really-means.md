---
title: "What does threading in Python really means?"
excerpt: "Threads are terrible, and you should never use them, right? Unfortunately, the situation is not so simple. We need to weigh the benefits and risks of using threads, just like with any technology choice."
coverImage: "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg"
date: "2021-09-04T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

`Threads are terrible, and you should never use them,` right? Unfortunately, the situation is not so simple. We need to weigh the benefits and risks of using threads, just like with any technology choice.

## Benefits of Threading

1. Easy of reading code

2. Parallelism with shared memory - Your code can exploit multiple CPUs while still having threads share memory. This is important in many workloads where it would be too costly to move large amounts of data between the separate memory spaces of different processes, for example. In multiprocessing it is not share memory and each process get it's own copy of data.

3. Know-how and existing code - There is a large body of knowledge and best practices available for writing threaded applications.

Now, with Python, the point about parallelism is questionable because the Python interpreter uses a global lock, called the global interpreter lock (GIL), to protect the internal state of the interpreter itself. That is, it provides protection from the potential catastrophic effects of race conditions between multiple threads. A side effect of the lock is that it ends up pinning all threads in your program to a single CPU. As you might imagine, this negates any parallelism performance benefits.

## Best practice for threading

```python
from concurrent.futures import ThreadPoolExecutor as Executor

def worker(data):
    <process the data>
with Executor(max_workers=10) as exe:
    future = exe.submit(worker, data)
```

The `ThreadPoolExecutor` offers an extremely simple interface for running functions in a thread—and the best part is that, if needed, you can convert the pool of threads into a pool of subprocesses simply by using `ProcessPoolExecutor` instead. It has the same API as `ThreadPoolExecutor`, which means that your code will be little affected by the change.

In general, you’ll prefer your tasks to be somewhat short-lived, so that when your program needs to shut down, you can simply call Executor.shutdown(wait=True) and wait a second or two to allow the executor to complete.

Most importantly: if at all possible, you should try to prevent your threaded code (in the preceding example, the worker() function) from accessing or writing to any global variables!

## Drawbacks of Threading

1. Threading is difficult
   Threading bugs and race conditions in threaded programs are the hardest kinds of bugs to fix. With experience, it is possible to design new software that is less prone to these problems, but in nontrivial, naively designed software, they can be nearly impossible to fix, even by experts. Really!

2. Threads are resource-intensive
   Threads require extra operating system resources to create, such as preallocated, per-thread stack space that consumes process virtual memory up front.

3. Threading can affect throughput
   At very high concurrency levels (say, > 5,000 threads), there can also be an impact on throughput due to context-switching costs, assuming you can figure out how to configure your operating system to even allow you to create that many threads.

4. Threading is inflexible
   The operating system will continually share CPU time with all threads regardless of whether a thread is ready to do work or not. For instance, a thread may be waiting for data on a socket, but the OS scheduler may still switch to and from that thread thousands of times before any actual work needs to be done.

5. Threading makes code hard to reason about.

6. Threading is an inefficient model for large-scale concurrency (thousands of concurrent tasks).

## Conclusion

I hope after reading this you have some understanding on when you should or shouldn't use threading with python.

That’s it for today, see you soon. :)
