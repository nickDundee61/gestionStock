//IMPORTATION DES FONCTIONS CRUD (CREATE READ UPDATE DELETE)
import { caractéristiqueChampsDeSaisie, collectionDeDestination, allPossibleField,userX } from './VG.js';


import { récupérerListeDesProduitsSurDataBase, checkConfig } from "./functionsRequete.js"

import {
  constructeurDeTable,
  constructeurDeChampsDeSaisie,
  constucteurPrincipal,
  constructeurDuBoutonDeValidation,
  constructeurPanneauInfo, viderLeContainer,constructeurLog
} from "./constucteurs.js"


//liste des produits initialisée à zéro

const dateActuelle = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
const dateFormatee = dateActuelle.toLocaleDateString('fr-FR', options);

let collectionCourrante = collectionDeDestination[0]
const constructPage = async () => {
  constucteurPrincipal();
  constructeurPanneauInfo(allPossibleField);
  constructeurDeChampsDeSaisie(allPossibleField);
  constructeurDuBoutonDeValidation();
  constructeurDeTable();
  await récupérerListeDesProduitsSurDataBase(collectionCourrante);
};
//création d'un tableau d'objet contenant les caractéristiques de chaque champs de saisi

const deleteMain = async () => {
  let main = null;
  if (document.getElementById("containerPrincipal")) {

    main = document.getElementById("containerPrincipal")
    for (let c of main.children) {

      if (c.id === "panneauAdministration") {
        continue;
      }
      c.remove()
    }

  }


}
const Pricipal = async () => {
if(!userX){


 constructeurLog();

 
}else{
  console.log(userX)
  await deleteMain()
  constructeurPanneauInfo(allPossibleField);
  await checkConfig(collectionCourrante, "config")
  await constructPage();

}



}

Pricipal()

export { Pricipal }