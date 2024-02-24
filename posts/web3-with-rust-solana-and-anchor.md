---
title: "Web3 with Rust, Solana and Anchor."
excerpt: "Getting started with Rust and Solana."
coverImage: "https://images.unsplash.com/photo-1565153907400-7e01a9ab25f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
date: "2021-12-26T12:04:07.322Z"
author:
  name: Harshit Singhai
  picture: "/images/profile.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

It's been a while since I've been thinking about creating web3 project on Solana blockchain using Rust. After doodling for a while I finally decided to make it into a reality.

I wanted to start with something simple. Not let my intense vulnerability to rust become any kind of obstacle here.

## Demo

[https://web3-football-gif.netlify.app/](https://web3-football-gif.netlify.app/)

## Anchor

We will be using Anchor.

Read about Anchor here [https://project-serum.github.io/anchor/getting-started/introduction.html](https://project-serum.github.io/anchor/getting-started/introduction.html)

Anchor is a framework for Solana's Sealevel runtime providing several convenient developer tools.

Don't get carried away. It's basically just javascript with Anchor taking care of some magic behind the scenes.

We will be using Anchor in the frontend react app.

## Rust

```rust
use anchor_lang::prelude::*;

declare_id!("SiaGpVaNrhiae7BE6hNK48BbqKfcxPmuYLceWU8Ub1Y");

#[program]
pub mod footballgif {
    use super::*;
    pub fn start_stuff_off(ctx: Context<StartStuffOff>) -> ProgramResult {
        // Get a reference to the account.
        let base_account = &mut ctx.accounts.base_account;

        base_account.total_gifs = 0;
        Ok(())
    }

    pub fn add_gif(ctx: Context<AddGif>, gif_link: String) -> ProgramResult {
        let base_account = &mut ctx.accounts.base_account;
        let user = &mut ctx.accounts.user;

        let item = ItemStruct {
            gif_link: gif_link.to_string(),
            user_address: *user.to_account_info().key,
            upvote: 0,
            downvote: 0,
        };

        base_account.gif_list.push(item);
        base_account.total_gifs += 1;
        Ok(())
    }

    pub fn upvote_gif(ctx: Context<AddGif>, index: u64) -> ProgramResult {
        let base_account = &mut ctx.accounts.base_account;
        base_account.gif_list[index as usize].upvote += 1;
        Ok(())
    }

    pub fn downvote_gif(ctx: Context<AddGif>, index: u64) -> ProgramResult {
        let base_account = &mut ctx.accounts.base_account;
        base_account.gif_list[index as usize].downvote += 1;
        Ok(())
    }
}

// Attach certain variables to the StartStuffOff context.
#[derive(Accounts)]
pub struct StartStuffOff<'info> {
    #[account(init, payer = user, space = 9000)]
    pub base_account: Account<'info, BaseAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program <'info, System>,
}

#[derive(Accounts)]
pub struct AddGif<'info> {
    #[account(mut)]
    pub base_account: Account<'info, BaseAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
}

#[derive(Debug, Clone, AnchorSerialize, AnchorDeserialize)]
pub struct ItemStruct {
    pub gif_link: String,
    pub user_address: Pubkey,
    pub upvote: u64,
    pub downvote: u64,
}

#[account]
pub struct BaseAccount {
    pub total_gifs: u64,
    pub gif_list: Vec<ItemStruct>,
}
}
```

Explaining the rust programme is a blog post on it's own. To be honest, I don't fully understand it either.

Maybe once I develop a good understanding of Rust Programming language, I'll come back to this blog post and explain each and every line.

But right now, it's just too much work to explain the code snippet.

## Frontend

Here's the link to the frontend. You can check the code here.

[https://github.com/harshitsinghai77/web3-football-gif/tree/master/frontend](https://github.com/harshitsinghai77/web3-football-gif/tree/master/frontend)

## Github

[https://github.com/harshitsinghai77/web3-football-gif](https://github.com/harshitsinghai77/web3-football-gif)

## Demo

[https://web3-football-gif.netlify.app/](https://web3-football-gif.netlify.app/)

## Conclusion

Web3 is an amazing place to explore. You can run your Rust Smart Contracts in Solana Blockchain. Like Metamask, to interact with Solana Blockahin you'll need Phantom Wallet.

That’s it for today, see you soon. :)
