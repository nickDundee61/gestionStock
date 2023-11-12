import {
    ajouterUnObjet,
    obtenirTouteLaCollection,
    trouverDocumentsAvecValeur,
    mettreAJourUnDocument,
    supprimerUnDocument,
    supprimerTousLesDocumentsDeLaCollection,
    mettreAJourDocumentsAvecValeurParticulière,
    telDocumentExiste,
    ajouterUnObjetAvecIdSpécifique,
    leNomDuDocExiste
  } from './firebase.js';

  import  {listeDesProduits, collectionDeDestination,allPossibleField}  from './VG.js';
import { constructeurDeTable } from './constucteurs.js';




const inscrireProduitSurDataBase = async (objet,_collection) => {
    //une fois que l'écriture en base de donnée à été confirmer, 
    //ajouter le produit à la liste et ajouter le nouvel élément à la table. 
    let result = await ajouterUnObjet(objet,_collection)
 
    listeDesProduits.push(result)
    constructeurDeTable(result)
  
  }
  //supprimerTousLesDocumentsDeLaCollection('fleurs')
  
  const récupérerListeDesProduitsSurDataBase = async (_collection) => {

    listeDesProduits.length = 0
    //une fois que la liste est téléchargée, afficher la liste
    const products = await obtenirTouteLaCollection(_collection)
    listeDesProduits.push(...products)
    afficherListeDesProduits();
  }
  
  const afficherListeDesProduits = () => {
  
    for (let objetProduit of listeDesProduits) {
  
      constructeurDeTable(objetProduit)
    }
  
  }

  const checkConfig = async(_collection,target)=>{

  let exist =   await leNomDuDocExiste(_collection,"config")
 
    if(exist){
      allPossibleField.length = 0;
console.log(exist,"exit!!")
  


allPossibleField.push(...exist[0].allPossibleField)


    }else{
     
    
     await ajouterUnObjetAvecIdSpécifique({allPossibleField},_collection,target)

    }
    
    }
    

  export {inscrireProduitSurDataBase,récupérerListeDesProduitsSurDataBase,
    afficherListeDesProduits,checkConfig}