const mongoose = require("mongoose");

const divisionSchema = new mongoose.Schema({
  divisionID: {
    type: String,
    required: true,
    unique: true,
    enum: [
      "Matara",
      "Galle",
      "Hambantota",
      "Kalutara",
      "Colombo",
      "Kegalle",
      "Kandy",
      "Matale",
      "Anuradhapura",
      "Polonnaruwa",
      "Vauniya",
      "Madakalauwa",
      "Ampara",
      "Gampaha",
      "Nuwara Eliya",
      "Jaffna",
      "Mannar",
      "Mulathiv",
      "Kilinochchi",
      "Batticaloa",
      "Trincomalee",
      "Kurunagala",
      "Puttalam",
      "Badulla",
      "Monaragala",
      "Rathnapura",
    ],
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  voterCount: {
    type: Number,
    required: true,
  },
  districtID: {
    type: String,
    required: true,
    unique: true,
    enum: [
      "Matara",
      "Galle",
      "Hambantota",
      "Kalutara",
      "Colombo",
      "Kegalle",
      "Kandy",
      "Matale",
      "Anuradhapura",
      "Polonnaruwa",
      "Vauniya",
      "Madakalauwa",
      "Ampara",
      "Gampaha",
      "Nuwara Eliya",
      "Jaffna",
      "Mannar",
      "Mulathiv",
      "Kilinochchi",
      "Batticaloa",
      "Trincomalee",
      "Kurunagala",
      "Puttalam",
      "Badulla",
      "Monaragala",
      "Rathnapura",
    ],
  },
});

const Division = mongoose.model("Division", divisionSchema);

exports.Voter = Division;
