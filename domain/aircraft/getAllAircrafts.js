async () => {
  const sql = 'SELECT "code" FROM "Aircraft"';
  const {
    rows: [...aircrafts],
  } = await domain.pg.query(sql);
  return aircrafts;
};
