CREATE TABLE IF NOT EXISTS "Starship" (
  id uuid,
  name varchar(255),
  cockpit varchar(255),
  hold varchar(255),
  engine varchar(255),
  teamId uuid
);
CREATE TABLE IF NOT EXISTS "Team" (id uuid, name: varchar(255))
  engine varchar(255)
);

CREATE TABLE IF NOT EXISTS "Issues" (
    id varchar(255),
    description varchar(255),
    teamId nullable varchar(255)
    starshipId nullable varchar(255)
)