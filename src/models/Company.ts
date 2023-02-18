export class Company {
  public id: number;
  public businessName: string;
  public alias: string;
  public VAT: string;
  public priority: string | null;
  public numberRecord: string | null;
  public deadline: string | null;
  public status: string | null;
  public holder: string |null
  constructor (id: number, businessName: string, alias: string, VAT: string, priority: any, numberRecord: any, deadline: string, status: string, holder: string) {
    this.id = id;
    this.businessName = businessName;
    this.alias = alias;
    this.VAT = VAT;
    this.priority = priority;
    this.numberRecord = numberRecord;
    this.deadline = deadline;
    this.status = status;
    this.holder = holder;
  }
}
