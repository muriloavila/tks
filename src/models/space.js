import mongoose from '../config/database';

const SpaceSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true,
        unique: true
    },
    description:{
        type:String,
        require:true
    },
    projeto:{
        type:String
    }
});

const Space = mongoose.model('Space', SpaceSchema);

export default Space;