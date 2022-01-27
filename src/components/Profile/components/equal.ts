//check if the Data which is given in the same as the the other
// If not primary is returned

export  function equal(primary, second) {
        var result=''
        if (primary === second){
        result= second
        }
        else{
            result= primary
        }
        
        // console.log('Erste Var: ' + primary)
        // console.log('Zweite Var: ' + second)
        // console.log('Ergebniss: ' + result)
        return result

}