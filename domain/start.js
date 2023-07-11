async () => {
  console.log('Connect to PG');
  domain.pg = new db.pg.Pool(config.database);
};
