export async function seed(knex) {
    // @ts-expect-error for sample purposes
    await TestModel.query(knex).insert({
        name: "Sample"
    });
}
