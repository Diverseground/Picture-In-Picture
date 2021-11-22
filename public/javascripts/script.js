const videoElement = document.getElementById("video");
const button = document.getElementById("button");
const getDisplayMediaButton = document.getElementById(
  "get-display-media-button"
);
button.disabled = true;

// Prompt to select media stream, pass to video element, then play
const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Here
  }
};

button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// On Load
getDisplayMedia.addEventListener("click", async () => {
  button.disabled = false;
  await selectMediaStream();
});
