# Changelog
All notable changes to this project will be documented in this file.

---

## [v0.1.22](https://github.com/Bejibun-Framework/bejibun-database/compare/v0.1.21...v0.1.22) - 2026-08-20

### 🩹 Fixes

### 📖 Changes
#### Tooling
- Added `prettier` + `.prettierrc.json` / `.prettierignore` and an `eslint.config.js` (flat config, `typescript-eslint`) for consistent formatting/linting across `src`
- Added `bun run format`, `bun run eslint`, and `bun run lint` scripts; `bun run build` now runs `lint` before compiling
- `alias` script now runs `tsc-alias` directly instead of via `bunx`

### 📦 Dependencies

- Bumped [`@bejibun/app`](https://github.com/Bejibun-Framework/bejibun-app) from `^0.1.24` to `^0.1.25`
- Bumped [`@bejibun/logger`](https://github.com/Bejibun-Framework/bejibun-logger) from `^0.1.22` to `^0.1.23`
- Bumped [`@bejibun/utils`](https://github.com/Bejibun-Framework/bejibun-utils) from `^0.1.28` to `^0.1.29`
- Bumped `knex` (devDependency) from `^3.2.10` to `^3.3.0`
- Bumped `ora` (devDependency) from `^9.4.0` to `^9.4.1`
- Bumped `pg` (devDependency) from `^8.21.0` to `^8.23.0`
- Bumped `tsc-alias` (devDependency) from `^1.8.17` to `^1.9.2`
- Added `@eslint/js` (devDependency) `^10.0.1`
- Added `eslint` (devDependency) `^10.8.1`
- Added `eslint-config-prettier` (devDependency) `^10.1.8`
- Added `globals` (devDependency) `^17.11.0`
- Added `prettier` (devDependency) `^3.9.6`
- Added `typescript` (devDependency) `^6.0.3`
- Added `typescript-eslint` (devDependency) `^8.67.0`

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-database/blob/master/CHANGELOG.md

---

## [v0.1.21](https://github.com/Bejibun-Framework/bejibun-database/compare/v0.1.20...v0.1.21) - 2026-06-01

### 🩹 Fixes
- Invalid parameter for specific seeder - [#2](https://github.com/Bejibun-Framework/bejibun-database/issues/2)

### 📖 Changes

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-database/blob/master/CHANGELOG.md

---

## [v0.1.20](https://github.com/Bejibun-Framework/bejibun-database/compare/v0.1.14...v0.1.20) - 2026-05-11

### 🩹 Fixes

### 📖 Changes
- Added `db:seed --seeder file.ts` for specific file seeder
- Added `db:seed --force` for skip confirmation in production

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-database/blob/master/CHANGELOG.md

---

## [v0.1.14](https://github.com/Bejibun-Framework/bejibun-database/compare/v0.1.12...v0.1.14) - 2025-10-25

### 🩹 Fixes
- Fix `make:migration` migration filename
- Fix `make:seeder` seeder filename

### 📖 Changes

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-database/blob/master/CHANGELOG.md

---

## [v0.1.12](https://github.com/Bejibun-Framework/bejibun-database/compare/v0.1.11...v0.1.12) - 2025-10-25

### 🩹 Fixes
- Fix `make:migration` counter undefined

### 📖 Changes
What's New :
- Adding `make:seeder` Create a new seeder file

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-database/blob/master/CHANGELOG.md

---

## [v0.1.11](https://github.com/Bejibun-Framework/bejibun-database/compare/v0.1.1...v0.1.11) - 2025-10-25

### 🩹 Fixes

### 📖 Changes
What's New :
- Adding `make:migration` Create a new migration file

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-database/blob/master/CHANGELOG.md

---

## [v0.1.1](https://github.com/Bejibun-Framework/bejibun-database/compare/v0.1.0...v0.1.1) - 2025-10-22

### 🩹 Fixes

### 📖 Changes
What's New :
- Adding `Database.knex()` for init database connection
- Adding `config/database.ts` configuration file
- Adding commands directory structure

Available Commands :
- `db:seed` Run database seeders
- `migrate:fresh` Rollback all migrations and re-run migrations
- `migrate:latest` Run latest migration
- `migrate:rollback` Rollback the latest migrations
- `migrate:status` List migrations status

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-database/blob/master/CHANGELOG.md