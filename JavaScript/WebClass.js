class Web extends Creation {
  constructor(nom, date, url, description) {
    super(nom, date, description);
    this._url = url;
  }
  //Getter
  get url() {
    return this._url;
  }

  //Setter
  set url(value) {
    this._url = value;
    console.log("Chemin du site changé, nouvelle valeur = " + value);
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

  PrintUrl(selector_Url) {
    console.log("Url placé avec le selector : " + selector_Url);
    let dest = document.querySelector(selector_Url);
    dest.setAttribute("href", this.url);
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

  PrintObject(selector_Nom, selector_Date, selector_Url, selector_Description) {
    this.PrintNom(selector_Nom);
    this.PrintDate(selector_Date);
    this.PrintImg(selector_Url);
    this.PrintDescription(selector_Description);
  }
}
