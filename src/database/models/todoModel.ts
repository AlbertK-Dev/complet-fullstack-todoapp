import mongoose, {Document, Schema} from "mongoose";

export interface ITodo extends Document{
    title: string;
    completed: boolean;
}
const todoSchema: Schema<ITodo> = new Schema<ITodo>({
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: false,
    }

})

export default mongoose.model<ITodo>('todo', todoSchema)