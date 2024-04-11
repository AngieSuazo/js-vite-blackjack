
import _ from 'underscore';

/**
 * esta función crea un nuevo deck 
 * @param {array<string>} tiposDeCarta EJM: ['C','D','H','S']; 
 * @param {array<string>} tiposEspeciales EJM: ['A','J','Q','K'];
 * @returns {array} retorna uno nuevo
 */

//export const miNombre='Angie';
 export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.lengh ===0) 
    throw new Error ('TiposDeCarta es obligatorio como un arreglo de string');

    
    if (!tiposEspeciales || tiposEspeciales.lengh ===0) 
    throw new Error ('TiposEspeciales es obligatorio como un arreglo de string');

   let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}
//export default crearDeck;