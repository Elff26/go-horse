export class Modal{
    constructor(title: string="", description: string="", textButton: string=""){
      this.title = title;
      this.description = description;
      this.textButton = textButton;
    }
  public title: string;
  public description: string;
  public textButton: string;
}
