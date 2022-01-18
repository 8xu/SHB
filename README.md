# SHB 
> 🪶 Lightweight Steam Hour Booster

![GitHub last commit](https://img.shields.io/github/last-commit/8xu/shb) ![GitHub all releases](https://img.shields.io/github/downloads/8xu/SHB/total)

![Header Image](/media/header.png)


## How to run

1. Install [node](https://nodejs.org/en/) on your machine.
2. Run `npm install .` in the directory to install dependencies.
3. Modify the [config](./config.json.example) file to your desired configuration.
    > Get steam game IDs [here](https://steamdb.info/apps/)
4. Rename `config.json.example` to `config.json`.
5. Run `node main.js` to start the hour booster.

## Notes
- If your Steam account has 2FA activated, run the program and just wait for it to ask for the 2FA code.
- You can only boost **32** games in the same time!
- You can delete [this](media) file if you want to reduce the size of this folder.
- Any wrong modifcation of the configuration file can cause the client to fail.

## Running 24/7 on Replit
You can run this **24/7** on [Repl.it](https://replit.com/) for as little as ***$7* / month** with the *Hacker* plan. See pricing [here](https://replit.com/site/pricing).