# One Word From Grandma

A tiny entry for the make.fun bounty **One Word From Grandma**. The program
does exactly one thing: it writes a single word to `entry.txt` — and nothing
else. No extra lines, no trailing newline, no decoration.

The word is:

```
Computer-y
```

## How it works

Run `main.ts` with Node. It reads the output directory from the
`MAKEFUN_OUTPUT_DIR` environment variable (falling back to `/output` when the
variable is not set), creates that directory if needed, and writes the word
to `entry.txt` inside it.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Badges

[![One Word From Grandma](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)

[![Rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/emasinves0-commits/u-0xkianno-one-word-from-grandma-f04bed16/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)

[![Reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/emasinves0-commits/u-0xkianno-one-word-from-grandma-f04bed16/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
