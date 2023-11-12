let listeDesProduits = [];
let collectionDeDestination = ["articles"]
let caractéristiqueChampsDeSaisie = [
  { id: "Nom", element: "input", type: "text", destruct: false },
  { id: "Référence", element: "input", type: "text", destruct: false },
  { id: "Quantité", element: "input", type: "number", step: "1", destruct: false },
  { id: "Catégorie", element: "input", type: "text", destruct: true }
]


let allPossibleField = [
  {
    id: "Nom",
    checked: true,
    type:"text",
    readOnly: true
  },

  {
    id: "Référence",
    checked: true,
    type:"text",
    readOnly: true
  },

  {
    id: "Quantité",
    checked: true,
    type:"number",
    readOnly: true
  },

  {
    id: "Catégorie",
    checked: false,
    type:"text",
  },

  {
    id: "Unité",
    checked: false,
    type: "number",
    step: "1"
  },

  {
    id: "Prix",
    checked: false,
    type: "number",
    step: "0.01"
  },

  {
    id: "Date",
    checked: false,
    type: "date"
  },
];
const allPossibleFieldReduce = ["Nom", "Réf", "Qté", "Cat", "SS-Cat", "Uté", "Px", "D"]
let containerPrincipal = null;

//création du containerDeSaisie
let containerDeSaisie = null;
let tableEtTete = null;
let userX = null;

const updateUserX = (newValue) => {
  userX = newValue;
};
export {
  listeDesProduits,
  caractéristiqueChampsDeSaisie,
  collectionDeDestination,
  containerPrincipal, containerDeSaisie, tableEtTete, allPossibleField,userX,updateUserX
}

