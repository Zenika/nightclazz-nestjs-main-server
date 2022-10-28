CREATE TABLE IF NOT EXISTS "Starship" (
  id: uuid,
  name varchar(255),
  cockpit varchar(255),
  hold varchar(255),
  engine varchar(255),
  teamId uuid,
);
CREATE TABLE IF NOT EXISTS "Team" (id: uuid, name: varchar(255))