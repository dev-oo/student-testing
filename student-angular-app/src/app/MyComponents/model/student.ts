export class Student {

  private _name!: string;
  private _id!: number;
  private _rollNo!: number;
  private _address!: string;

  public get address(): string {
    return this._address;
  }
  public set address(value: string) {
    this._address = value;
  }
  public get rollNo(): number {
    return this._rollNo;
  }
  public set rollNo(value: number) {
    this._rollNo = value;
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}
