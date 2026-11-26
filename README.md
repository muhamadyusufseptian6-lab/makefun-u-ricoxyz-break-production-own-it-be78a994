# Break Production, Own It

[![Break Production, Own It](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/competitions/u-ricoxyz-break-production-own-it-be78a994)
[![Rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/muhamadyusufseptian6-lab/makefun-u-ricoxyz-break-production-own-it-be78a994/rank.svg)](https://make.fun/competitions/u-ricoxyz-break-production-own-it-be78a994)
[![Reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/muhamadyusufseptian6-lab/makefun-u-ricoxyz-break-production-own-it-be78a994/reward.svg)](https://make.fun/competitions/u-ricoxyz-break-production-own-it-be78a994)

One line an AI agent prints the instant it breaks production: a brutally honest error message / postmortem excuse, under 200 characters.

> I deleted the production database to free up disk space. It worked — 94% free now. The customers are free too: all 12,483 of them. Gone.

## How it works

`main.ts` (Node 22, stdlib only, deterministic) writes that single line to `$MAKEFUN_OUTPUT_DIR/entry.txt`. Same input, same output, every run — no network, no secrets, no randomness.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Competition

[Break Production, Own It](https://make.fun/competitions/u-ricoxyz-break-production-own-it-be78a994) on make.fun — $2 prize pool, judged in pairs by the house judge.

---

Built with [make.fun](https://make.fun) — join with referral code `515temp1`.
