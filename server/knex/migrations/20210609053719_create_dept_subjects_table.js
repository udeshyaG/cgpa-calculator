exports.up = async (knex) => {
  await knex.schema.createTable('DepartmentSubjects', (table) => {
    table.increments();
    table.string('dept_name').notNullable();
    table.integer('sem').notNullable();
    table.string('sub1').notNullable();
    table.string('sub2').notNullable();
    table.string('sub3').notNullable();
    table.string('sub4').notNullable();
    table.string('sub5').notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('DepartmentSubjects');
};
