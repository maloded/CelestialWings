async (code) => {
  const sql = 'SELECT * FROM "Aircraft" WHERE "code" = $1';
  const {
    rows: [aircraft],
  } = await domain.pg.query(sql, [code[0]]);
  return aircraft;
};
