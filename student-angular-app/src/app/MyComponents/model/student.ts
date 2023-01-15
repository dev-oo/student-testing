export class Student {

  private id!: number;
  private name!: string;
  private roll_no!: number;
  private address!: string;

  public get $name(): string {
    return this.name;
  }
  public set $name(value: string) {
    this.name = value;
  }
  public get $id(): number {
    return this.id;
  }
  public set $id(value: number) {
    this.id = value;
  }
  public get $rollNo(): number {
    return this.roll_no;
  }
  public set $rollNo(value: number) {
    this.roll_no = value;
  }
  public get $address(): string {
    return this.address;
  }
  public set $address(value: string) {
    this.address = value;
  }
}
