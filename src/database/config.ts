import mongoose from "mongoose";



export default class MongoDB{

    private _stringConnexion: string
    private static _instance:boolean = false 

    constructor(stringURI: string) {
        if (MongoDB._instance) {
            throw new Error("Mongo db Instance already in use")
        } else {
            MongoDB._instance = true
            this._stringConnexion = stringURI; 
        }
        
        
    }

    connect(){
        let connected = false
        mongoose.connect(this._stringConnexion)
            .then(() => {
                connected = true;
            }).catch((err) => {
                connected = false;
                console.log(err)
            }).finally(() => {
            console.log(`Connexion à la BD...${connected? ' ok ' : ' echec '}`)
        })
    }

}