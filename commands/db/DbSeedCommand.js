import Chalk from "@bejibun/logger/facades/Chalk";
import { ask, defineValue, isNotEmpty } from "@bejibun/utils";
import ora from "ora";
import path from "path";
import Database from "../../facades/Database";
export default class DbSeedCommand {
    /**
     * The name and signature of the console command.
     *
     * @var $signature string
     */
    $signature = "db:seed";
    /**
     * The console command description.
     *
     * @var $description string
     */
    $description = "Run database seeders";
    /**
     * The options or optional flag of the console command.
     *
     * @var $options Array<Array<any>>
     */
    $options = [
        ["-f, --force", "Skip command confirmation"],
        ["-s, --seeder <file>", "Specific file seeder"]
    ];
    /**
     * The arguments of the console command.
     *
     * @var $arguments Array<Array<string>>
     */
    $arguments = [];
    async handle(options, args) {
        const database = Database.knex();
        const environment = defineValue(Bun.env.APP_ENV, "development");
        const bypass = isNotEmpty(options.force);
        const seeder = options.seeder;
        let confirm = "Y";
        if (environment === "production" && !bypass)
            confirm = await ask(Chalk.setValue("Application in production. Are you sure you want to run this command? (Y/N): ")
                .inline()
                .error()
                .show());
        if (confirm.toUpperCase() === "Y") {
            const spinner = ora(Chalk.setValue("Seeding...")
                .info()
                .show()).start();
            try {
                const logs = (await database.seed.run({
                    specific: seeder
                })).flat();
                spinner.succeed("Seeding finished");
                if (logs.length > 0)
                    logs.forEach((seeder) => spinner.succeed(path.basename(seeder)));
                else
                    spinner.succeed("No seeders were run.");
            }
            catch (error) {
                spinner.fail(`Seeding failed : ${error.message}`);
            }
            finally {
                await database.destroy();
                spinner.stop();
            }
        }
    }
}
