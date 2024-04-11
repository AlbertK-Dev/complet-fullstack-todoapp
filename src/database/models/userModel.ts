import mongoose, { Document, Schema } from 'mongoose';

import * as uniqueValidator  from "mongoose-unique-validator";

// Définir l'interface représentant les données de votre document
interface IUser extends Document {
    username: string;
    email: string;
    password: string;
}

// Définir le schéma
const userSchema: Schema<IUser> = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Appliquer le plugin uniqueValidator au schéma
userSchema.plugin(uniqueValidator);

// Créer et exporter le modèle à partir du schéma
export default mongoose.model<IUser>('User', userSchema);
