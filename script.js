// Aperture Value
var apertureValue = ["f22", "f8", "f2.8"];
var defaultAperture = document.getElementById("apertureSlider").defaultValue;
document.getElementById("apertureDisplay").innerHTML = apertureValue[defaultAperture];

// Shutter Value
var shutterValue = ["1/1000", "1/60", "1/4"];
var defaultShutter = document.getElementById("shutterSlider").defaultValue;
document.getElementById("shutterDisplay").innerHTML = shutterValue[defaultShutter];

// ISO Value
var isoValue = ["100", "400", "1600"];
var defaultIso = document.getElementById("isoSlider").defaultValue;
document.getElementById("isoDisplay").innerHTML = isoValue[defaultIso];

// Exposure Value
var exposureValue = ["-3", "-2", "-1", "0", "+1", "+2", "+3"];
var defaultExposure = +defaultAperture + +defaultShutter + +defaultIso;
document.getElementById("exposureDisplay").innerHTML = exposureValue[defaultExposure];

// Image Default
document.getElementById("imageDisplay").src = defaultExposure + ".jpg";

// Change Values
function exposureChange() {
    var currentAperture = document.getElementById("apertureSlider").value;
    document.getElementById("apertureDisplay").innerHTML = apertureValue[currentAperture];
    var currentShutter = document.getElementById("shutterSlider").value;
    document.getElementById("shutterDisplay").innerHTML = shutterValue[currentShutter];
    var currentIso = document.getElementById("isoSlider").value;
    document.getElementById("isoDisplay").innerHTML = isoValue[currentIso];
    var currentExposure = +currentAperture + +currentShutter + +currentIso;
    document.getElementById("exposureDisplay").innerHTML = exposureValue[currentExposure];
    document.getElementById("imageDisplay").src = currentExposure + ".jpg";
}