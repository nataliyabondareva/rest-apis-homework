const { Pool } = require('pg')
const pool = new Pool({ connectionString: 'postgresql://postgres:secret@localhost:5432/postgres' })

pool.connect()
  .then(() => {
    console.log('Connection to postgres established!')
  })
  .then(() => pool.query('CREATE TABLE IF NOT EXISTS person (id serial, first_name varchar(255), last_name varchar(255), eye_color varchar(255))'))
  .then(() => (console.log('Table created!')))
  // .then(() => pool.query('INSERT INTO person(first_name, last_name, eye_color) VALUES(\'' + 'James' + '\',\'' + 'Smith' + '\', \'' + 'brown eyes' + '\')'))
  .then(() => pool.query('INSERT INTO person(first_name, last_name, eye_color) VALUES(\'' + 'Frank' + '\',\'' + 'Jones' + '\', \'' + 'brown eyes' + '\')'))
  .then(() => pool.query('INSERT INTO person(first_name, last_name, eye_color) VALUES(\'' + 'Rebecca' + '\',\'' + 'Andrews' + '\', \'' + 'blue eyes' + '\')'))
  .catch(err => console.error('error', err))