db.createCollection('engines');
db.engines.insertMany([
  {
    description:
      'Le ZInjection 0.7VL est un monstre de puissance, avec une vitesse de pointe proche des 0.7 vitesse lumière il permet de traverser le cosmos à une allure folle.',
    speed: '0.7VL',
    consumption: '1000L/AL',
    acceleration: '8G',
  },
  {
    description:
      "Le moteur électrique TeZla est une alternative aux moteurs à Kérosène que l'on connaît. Avec une consommation très faible il permet d'effectuer les petits trajets quotidien sans encombres.",
    speed: '0.4VL',
    consumption: '10MW/AL',
    acceleration: '12G',
  },
]);
