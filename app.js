function addTokens(input, tokens){
    //VERIFICARI
    if(!(input instanceof String))
    {
         throw new Error("Invalid input");
    }
    if(input.length<6)
    {
        throw new Error("Input should have at least 6 characters");
    }
    if(!Array.isArray(tokens))
    {
        throw new Error("Invalid array format");
    }
    if(!(tokens[0].tokenName instanceof String)|| !(tokens[1].tokenName instanceof String)){
        throw new Error('Invalid array format');
    }
    if(!input.includes("..."))
    {
        return input;
    }

    //COMPLETARE CONTINUT 

    var elemente = input.split("...");
    var fraza= elemente[0];   //contine doar subsemnatul

   fraza += "${"+tokens[0].tokenName+"}";
   fraza+=elemente[1]; //continuarea frazei cu "domiciliul"
   fraza+= "${"+tokens[1].tokenName+"}"; //al doilea elem din token

    return fraza;
}

const app = {
    addTokens: addTokens
}

module.exports = app;