class THashStorage
{
    #hashTable
    constructor()
    {
        this.#hashTable = new Object();
    }

    Reset()
    {
        for (key in this.#hashTable)
        {
            this.DeleteValue(key);
        }

        this.#hashTable = new Object();
    }

    AddValue(key, value)
    {
        if (key === null)
        {
            alert("key is empty");
            console.log("key is empty");
        }

        this.#hashTable[key] = value;
    }

    DeleteValue(key)
    {
        if (key === null)
        {
            alert("key is empty");
            console.log("key is empty");
        }

        delete this.#hashTable[key];
    }

    GetValue(key)
    {
        if (key in this.#hashTable)
        {
            return this.#hashTable[key];
        }
    
        return undefined;
    }

    GetKeys()
    {
        var res = [];
        for (var pair in this.#hashTable)
        {
            res.push(pair);
        }

        return res;
    }
}

var Storage = new THashStorage();