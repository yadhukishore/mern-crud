import mongoose from "mongoose";

const instanceSchema = new mongoose.Schema({
    instanceName:{
        type:String,
        required:true,
    },
    participantType: [{
        type: String,
        required: true
    }],
    ticket:{
        type:Number,
        require:true
    },
    isDeleted: {
        type: Boolean,
        default: false,
      },
},{timestamps:true});

const Instance = mongoose.model('Instance',instanceSchema);
export default Instance;