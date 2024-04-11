import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import uniqueValidator  from "mongoose-unique-validator";

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

// Avant de sauvegarder, hacher le mot de passe
userSchema.pre<IUser>('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        next();
    } catch (error:any) {
        next(error);
    }
});

// Créer et exporter le modèle à partir du schéma
export default mongoose.model<IUser>('User', userSchema);
