
export function encuntraarray(array,grupo){
    let arraysresult = [];
    for (let i = 0; i < array.length; i += grupo) {
        let pedazo = array.slice(i, i + grupo);
        arraysresult.push(pedazo);
        
    }

    return arraysresult
}