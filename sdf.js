const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema.Types
const doctorSchema = new Schema({institutions: [{institution: { 
    type: ObjectId, ref: 'Institution', required: true },
    branch: {publicId: { type: String },name: { type: String },},},],professionalId: { type: String, trim: true },medicalSpecialties: [{ type: ObjectId, ref: 'MedicalSpecialty', required: true }],})module.exports = doctorSchema

