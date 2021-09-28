export class Modal{
    constructor(title: string="", description: string="", textButton: string="", href: string=""){
      this.title = title;
      this.description = description;
      this.textButton = textButton;
      this.href = href;
    }
  public title: string;
  public description: string;
  public textButton: string;
  public href: string;
}
