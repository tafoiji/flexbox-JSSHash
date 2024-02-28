var hashTable = new Object();
// звукозапись: ключ - инструмент, значение - описание

function AddValue(key, value)
{
    if (key === null)
    {
        return;
    }

    hashTable[key] = value;
}

function DeleteValue(key)
{
    if (key === null)
    {
        return;
    }

    delete hashTable[key];
}

function GetValueInfo(key)
{
    if (key in hashTable)
    {
        return hashTable[key];
    }
    
    return "No Informaiton";
}

function ListValues()
{
    var res = "";
    for (var pair in hashTable)
    {
        res+=pair.toString() + ' ' + hashTable[pair].toString() + '\n';
    }

    if (res === "")
    {
        return "No Information";
    }

    return res;
}