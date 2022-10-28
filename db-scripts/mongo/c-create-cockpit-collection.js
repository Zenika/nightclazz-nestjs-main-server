db.createCollection('cockpits');
db.cockpits.insertMany([
  {
    description:
      "Le cockpit UZZ Series 3000 est le cockpit de référence pour tout les combats tactiques. Avec son grand champ de vision il permet d'avoir une vision étendue du champ de bataille. Malgré son blindage léger il reste un vaisseau de commandement de premier choix pour tout amiral qui se respecte.",
    weapon: 'Flak Gun + Hull Missile',
    hull: '2/5',
    fieldOfView: '5/5',
  },
  {
    description:
      'Le cockpit ZeniMine 4.2 est la quatrième itération du cockpit connu chez tout les mineurs de la galaxie. Équipé du fameux MinerDrill400 il permet de perforer les astéroïdes les plus résistant de la ceinture de Kuiper',
    weapon: 'MinerDrill400',
    hull: '4/5',
    fieldOfView: '2/5',
  },
]);
