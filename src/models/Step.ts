export class Step {
  public id: string;
  public title: string;
  public isActive: boolean;
  public backRoute: string;

  constructor (id: string, title: string, backRoute:string, isActive: boolean) {
    this.id = id;
    this.title = title;
    this.backRoute = backRoute;
    this.isActive = isActive;

  }
}
