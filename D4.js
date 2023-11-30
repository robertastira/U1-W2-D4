/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area = rettangolo()

function rettangolo(){
const l1 = 5
const l2 = 3
const result = l1 * l2
return result
}
console.log('Area ', area)


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const sommagenerale = crazySum()

function crazySum(n1,n2){

    if (n1 === n2) {
    const somma = (n1+n2)*3
    console.log('I parametri sono uguali, la somma è moltiplicata per tre', somma)
    return somma
} 
    else { 
    const somma1 = n1+n2
    console.log ('La somma dei parametri è', somma1)
    return somma1
}
}
console.log(crazySum(5,5))



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const n3 = 40
const n4 = 19
const differenzassoluta = crazyDiff
function crazyDiff(n3,n4){

if (n3 > 19) {
    const differenza = (n3 - n4)
    console.log('La differenza assoluta è', differenza)
    return differenza
}
else {
    const differenza1 = ((n3 - n4)*(-1))*3
    console.log('La differenza assoluta moltiplicata per tre è', differenza1)
return differenza1
}
}


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/



const n5 = 28
const numerointero = boundary()

function boundary(){ 
if (n5 >= 20 && n5 <= 100 || n5 === 400 ){
console.log('True')
return}
else {
console.log('False')
return
}
}



/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const str = 'EPICODE è una scuola di formazione'
const epicode = epify()

function epify(){
    const paroladacercare = str.indexOf('EPICODE')
    if ( paroladacercare === 0) {
    const str = str.slice(0,6)
    console.log (str) }
    return 
    else {
    console.log(str)}
    return
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const numeropositivo = check3and7()

function check3and7(n6){
if (n6 % 3 = 0 || n6 % 7 = 0){
console.log('Multiplo di 3 o Multiplo di 7')}
return
else{
console.log('Non multiplo di 3 o 7')
}
return
}


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const stringainvertita = reverseString()
const stringadainvertire = 'EPICODE'

function reverseString(){
return stringadainvertire.split().reverse().join()
}
console.log(stringadainvertire)

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
