db.createCollection('holds');
db.holds.insertMany([
  {
    description:
      "La ZCarg est la soute qu'il vous faut si vous voulez déplacer du matériel en toute sécurité. D'un volume extraordinaire de 50m3 elle est capable de charger un nombres impressionnat de caisses.",
    volume: '50m3',
    capacity: '0',
    hull: '2/5',
  },
  {
    description:
      "Appréciez-vous le champagne ? Que pensez-vous du caviar ? La Personux Z42 est la roll royce des soute de luxe. Avec ses siège en velours et sa climatisation hypoallergénique, elle vous permet de naviguer en toute confiance jusqu'au confins de la galaxie.",
    volume: '20m3',
    capacity: '5',
    hull: '4/5',
  },
]);
