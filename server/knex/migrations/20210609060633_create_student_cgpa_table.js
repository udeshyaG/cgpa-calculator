exports.up = async (knex) => {
  await knex.schema.createTable('StudentCGPA', (table) => {
    table.increments();
    table.string('student_name').notNullable();
    table.decimal('cgpa', 4, 2).notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('StudentCGPA');
};
