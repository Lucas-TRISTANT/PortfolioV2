class Photographie extends Creation {
  constructor(nom, date, img, description) {
    super(nom, date, description);
    this._img = img;
  }
  //Getter
  get img() {
    return this._img;
  }

  //Setter
  set img(value) {
    this._img = value;
    console.log("Chemin de l'image changé, nouvelle valeur = " + value);
  }

  //Methods
  //
  // Les PrintMethods place les information dans des élements deja presents
  PrintNom(selector_Nom) {
    console.log("Nom placé avec le selector : " + selector_Nom);
    var dest = document.querySelector(selector_Nom);
    dest.innerHTML = this.nom;
  }

  PrintDate(selector_Date) {
    console.log("Date placé avec le selector : " + selector_Date);
    let dest = document.querySelector(selector_Date);
    dest.innerHTML = "Crée le " + this.date;
  }

  PrintImg(selector_Img) {
    console.log("Img placé avec le selector : " + selector_Img);
    let dest = document.querySelector(selector_Img);
    dest.setAttribute("src", this.img);
  }

  PrintImgSize(selector_Img, selector_ImgSize) {
    console.log("ImageSize placé avec le selector : " + selector_ImgSize);
    let img = document.querySelector(selector_Img);
    let dest = document.querySelector(selector_ImgSize);
    let width = img.naturalWidth;
    let height = img.naturalHeight;
    dest.innerHTML = width + " x " + height;
  }

  PrintDescription(selector_Description) {
    console.log("Description placé avec le selector : " + selector_Description);
    let dest = document.querySelector(selector_Description);
    dest.innerHTML = this.desc;
  }

  PrintDescriptionCourte(selector_DescriptionCourte, nbMots) {
    console.log(
      "Description Courte placé avec le selector : " +
        selector_DescriptionCourte
    );
    let dest = document.querySelector(selector_DescriptionCourte);
    dest.innerHTML = this.DescriptionCourte(nbMots);
  }

  PrintObject(
    selector_Nom,
    selector_Date,
    selector_Img,
    selector_ImgSize,
    selector_Description
  ) {
    this.PrintNom(selector_Nom);
    this.PrintDate(selector_Date);
    this.PrintImg(selector_Img);
    this.PrintImgSize(selector_Img, selector_ImgSize);
    this.PrintDescription(selector_Description);
  }
}
