export async function seed(knex: any): Promise<void> {
    // @ts-expect-error for sample purposes
    await TestModel.query(knex).insert({
        name: "Sample"
    });
}
