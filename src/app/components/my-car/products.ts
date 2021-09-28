export class Products{
  constructor(name: string="", description: string="", src: string="", price: number, quant: number){
    this.name = name;
    this.description = description;
    this.src = src;
    this.price = price;
    this.quant = quant;
  }
  public name: string;
  public description: string;
  public src: string;
  public price: number;
  public quant: number;
}
