// Valeurs par Défaut
var DefaultNom = "Sans nom";
var DefaultDate = "Sans date";
var DefaultDesc = "Sans description";

// Class Création (Mère)

class Creation {
  constructor(nom = DefaultNom, date = DefaultDate, description = DefaultDate) {
    (this._nom = nom), (this._date = date), (this._desc = description);
  }
  // Getteur
  get nom() {
    return this._nom;
  }
  get date() {
    return this._date;
  }
  get desc() {
    return this._desc;
  }

  //Setter
  set nom(value) {
    this._nom = value;
    console.log("Valeur du nom changé, nouvelle valeur = " + value);
  }
  set date(value) {
    this._date = value;
    console.log("Valeur de la date changé, nouvelle valeur = " + value);
  }
  set desc(value) {
    this._desc = value;
    console.log("Valeur de la description changé, nouvelle valeur = " + value);
  }

  //Methods
  DescriptionCourte(NbMots) {
    let descArray = this._desc.split(" ", NbMots - 1); //Transforme la description en un Array de mots de la longueur donné
    let descString = descArray.join(" ") + " ..."; //Transforme l'Array en String;
    return descString;
  }
}

//Test de la class
var obj = new Creation(
  "Lucas",
  "16/02/2022",
  "mot1 mot2 mot3 mot4 mot5 mot6 mot7 mot8 mot9 mot10"
);

console.log(obj.nom);
console.log(obj.DescriptionCourte(5));
