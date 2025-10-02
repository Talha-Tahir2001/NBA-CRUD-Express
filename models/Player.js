import mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid';
const playerSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => uuidv4(),
    },
    firstName: {
        type: String,
        required: [true, 'First Name is Required'],
        trim: true,
        maxlength: [50, 'First Name cannot be more than 50 characters'],
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is Required'],
        trim: true,
        maxlength: [50, 'Last Name cannot be more than 50 characters'],
    },
    position: {
        type: String,
        required: [true, 'Position is required'],
        enum: {
            values: [
                'Point Guard', 'Shooting Guard', 'Small Forward',
                'Power Forward', 'Center', 'Guard', 'Forward'
            ],
            message: '{VALUE} is not a valid position'
        }
    },
    team: {
        type: String,
        required: [true, 'Team is required'],
        trim: true,
        maxlength: [50, 'Team name cannot be more than 50 characters']
    },
    number: {
        type: Number,
        required: [true, 'Jersey number is required'],
        min: [0, 'Jersey number cannot be negative'],
        max: [99, 'Jersey number cannot be more than 99']
    },
    height: {
        type: String,
        required: [true, 'Height is required'],
        match: [/^\d{1,2} ft \d{1,2} in$/, 'Height must be in format "X ft Y in"']
    },
    weight: {
        type: String,
        required: [true, 'Weight is required'],
        match: [/^\d{1,3} lbs$/, 'Weight must be in format "X lbs"']
    },
}, {
    timestamps: true, toJSON: {
        // transform: function (doc, ret) {
        //     ret.id = ret._id;
        //     delete ret._id;
        //     delete ret.__v;
        //     return ret;
        // }
    }
});


const Player = mongoose.model('Player', playerSchema);

export default Player;