const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female', 'other'] }, // Thay đổi enum
    dob: Date,
    dod: Date,
    familyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Family' },
    fatherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
    motherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
    spouseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
    avatar: String,
    generation: Number,
});

module.exports = mongoose.model('Member', memberSchema);