const variavel = 54
function verificarotipodavariavel(variavel)
{
    if(typeof variavel === String)
    {
        return `Este tipo de dado ${variavel} é do tipo string`
    };
    
    if(typeof variavel === Number)
    {
        return `Este tipo de dado ${variavel} é do tipo number(numero)`
    };

    if(typeof variavel === Boolean)
    {
        return `Este tipo de dado ${variavel} é do tipo booleano`
    };
};

document.write(verificarotipodavariavel(variavel))                         