<div align="center">

<img src="https://github.com/Bejibun-Framework/bejibun/blob/master/public/images/bejibun.png?raw=true" width="150" alt="Bejibun" />

![GitHub top language](https://img.shields.io/github/languages/top/Bejibun-Framework/bejibun-database)
![NPM Downloads](https://img.shields.io/npm/d18m/%40bejibun%2Fdatabase)
![GitHub issues](https://img.shields.io/github/issues/Bejibun-Framework/bejibun-database)
![GitHub](https://img.shields.io/github/license/Bejibun-Framework/bejibun-database)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/Bejibun-Framework/bejibun-database?display_name=tag&include_prereleases)

</div>

# Database for Bejibun
Database for Bejibun Framework.

## Usage

### Installation
Install the package.

```bash
# Using Bun
bun add @bejibun/database

# Using Bejibun
bun ace install @bejibun/database
```

### Configuration
The configuration file automatically executed if you are using `ace`.

Or

Add `database.ts` inside config directory on your project if doesn't exist.

```bash
config/database.ts
```

```ts
const config: Record<string, any> = {
    default: "local",

    connections: {
        local: {
            host: "127.0.0.1",
            port: 6379,
            password: "",
            database: 0,
            maxRetries: 10
        }
    }
};

export default config;
```

You can pass the value with environment variables.

### How to Use
How to use tha package.

```ts
import Database from "@bejibun/database";

Database.knex();
```

## ☕ Support / Donate

If you find this project helpful and want to support it:

[![Donate](https://img.shields.io/badge/Donate-Support%20Me-orange?style=for-the-badge)](https://donate.bejibun.com)

Or you can buy this `$BJBN (Bejibun)` tokens [here](https://pump.fun/coin/CQhbNnCGKfDaKXt8uE61i5DrBYJV7NPsCDD9vQgypump).