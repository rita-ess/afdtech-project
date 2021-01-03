export class Affectation {
  project: any;
  consultant: any;

  constructor(
    public id: number,
    public projectId: number,
    public consultantId: number,
  ) {
  }
}
