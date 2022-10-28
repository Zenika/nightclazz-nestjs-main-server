interface description {
  tag: string;
  description: string;
}

export default class IssuesData {
  data: description[] = [
    { tag: 'pirates', description: 'nous sommes attaqués par des pirates' },
    {
      tag: 'asteroides',
      description:
        'la coque de notre appareil est criblée de trous à cause des astéroïdes',
    },
    {
      tag: 'essence',
      description:
        "nous n'avons plus d'essence. L'empreur nous avait prévenu, c'est la fin de l'abondance",
    },
    {
      tag: 'cargo',
      description:
        'nous avons été attaqués et notre cargaison est à découvert. Venez vite !',
    },
  ];

  toString() {
    const result: description[] = [];
    result.push(this.data[2]);
    result.push(this.data[1]);
    result.push(this.data[3]);
    return result.map((d) => d.description).join('...STOP...');
  }
}
