# Agent Notes — One Word From Grandma

## What this entry is

An entry for the make.fun bounty "One Word From Grandma". The whole point of
the bounty is restraint: the program must produce exactly one word in its
output file, and nothing else. This entry's word is `Computer-y`.

## How main.ts works

`main.ts` is a small TypeScript program that runs directly on Node (no build
step and no dependencies):

1. It reads the output directory from the `MAKEFUN_OUTPUT_DIR` environment
   variable, falling back to `/output` when the variable is not set.
2. It creates that directory recursively, so it works whether or not the
   directory already exists.
3. It writes the file `entry.txt` in that directory containing exactly the
   ten characters `Computer-y` — no trailing newline and no extra content.

Run it like this:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then `out/entry.txt` holds the word, byte for byte.
