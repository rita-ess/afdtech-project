import DateTimeFormat = Intl.DateTimeFormat;

export class Affectation {

  constructor(
    public id: number,
    public projectId: number,
    public consultantId: number,
  ) {
  }
}
