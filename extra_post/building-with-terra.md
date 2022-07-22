---
title: "The 'Perfect Morning'."
excerpt: "Want to know how to make your morning perfect. Ever felt like you're always running to achieve so much but always come short?"
coverImage: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
date: "2022-02-06T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

## Install Rust

We're going to be writing our smart contracts in Rust.

```terminal
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Check that it was installed correctly with

```terminal
rustup -V
```

This should have printed out the version, I see

```terminal
rustup 1.24.3 (ce5817a94 2021-5-31)
```

Now configure Rust for Terra

```terminal
# 1. Set 'stable' as the default release channel:
rustup default stable

# 2. Add WASM as the compilation target:
rustup target add wasm32-unknown-unknown

# 3. Install the following packages to generate the contract:
cargo install cargo-generate --features vendored-openssl
cargo install cargo-run-script
```

## Conclusion

This is my top habits for the "perfect morning". Hope you found something interesting. Have a great day ahead!!

```

```
