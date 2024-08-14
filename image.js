let warningMessage = document.getElementById("warningMessage");
let image = document.getElementById("image");
let imageWidth = document.getElementById("imageWidth");

let imageMaxWidth = 300;
let imageMinWidth = 100;
let originaImageWidth = 200;

let maxWidthWarningMassage = "Too big. Decrease the size of the Image."
let minWidthWarningMassage = "Can't Visible. Increase the size of the Image."

image.style.width = originaImageWidth + "px";
imageWidth.textContent = originaImageWidth + "px";


function incrementButton() {
    
    if (originaImageWidth >= imageMaxWidth) {
        warningMessage.textContent = maxWidthWarningMassage;
    }
    else{
        originaImageWidth = originaImageWidth + 5;
        let updatedImageWidth = originaImageWidth + "px";
        
        warningMessage.textContent = "";
        image.style.width = updatedImageWidth;
        imageWidth.textContent = updatedImageWidth;
    }

}

function decrementButton() {

    if (originaImageWidth <= imageMinWidth) {
        warningMessage.textContent = minWidthWarningMassage;
    }
    else{
        originaImageWidth = originaImageWidth - 5;
        let updatedImageWidth = originaImageWidth + "px";
        
        warningMessage.textContent = "";
        image.style.width = updatedImageWidth;
        imageWidth.textContent = updatedImageWidth;
    }
}