import mongoose from "mongoose";
const {Schema ,model } = mongoose
const UserSchema = new Schema({
    email: {type: String ,required: true},
    name: {type: String ,required: true},
    username: {type: String ,required: true},
    profilepic:{type:String},
    coverpic:{type: String},
    createdAt: {type: Date ,default : Date.now},
    updatedAt: {type: Date ,default : Date.now}
});
const User = model("User" ,UserSchema); 
export default  mongoose.models.User  || User ;