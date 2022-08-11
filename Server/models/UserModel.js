const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    FirstName: {
        type: String,
        // required:true,
        // min:4,
        // max:15,

    },
    LastName: {
        type: String,
        // required:true,
        // min:4,
        // max:15,


    },
    Email: {
        type: String,
        // required:true,
        // min:4,
        // max:15,

    },
    Mobile: {
        type: Number,
        // required:true,
        // min:4,
        // max:15,

    },
    Gender: {
        type: String,
        // required:true,
        // min:4,
        // max:12,

    },
    Designation: {
        type: String,
        // required:true,
        // min:4,
        // max:12,
    },
    DateOfJoining: {
        type: Date,
        // required:true,
    },
    ReportingManager: {
        type: String,
        // required:true,
        // min:4,
        // max:12,

    },
    Salary: {
        type: Number,
        // required:true,
        // min:4,
        // max:12,

    },
    EmployeeCode: {
        type: Number,
        // required:true,
        unique: true


    },
    Location: {
        type: String,
        // required:true,
        // min:4,
        // max:12,

    },
    State: {
        type: String,
        // required:true,
        // min:4,
        // max:12,

    },
    City: {
        type: String,
        // required:true,
        // min:4,
        // max:12,

    },
    Password: {
        type: String,
        // required:true,
        // min:4,
        // max:12,

    },
    Country: {
        type: String,
        // required:true,
        // min:4,
        // max:12,

    },
    Department: {
        type: String,
        // required:true,
        // min:4,
        // max:12,

    },
    DeletedAt: {
        type: Date,
        // required:true,
        // min:4,
        // max:12,

    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("emps", UserSchema);