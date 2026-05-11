# Changelog
All notable changes to this project will be documented in this file.

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