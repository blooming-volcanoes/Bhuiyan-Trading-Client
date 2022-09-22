import { useState } from "react";

function useGalleryUploader() {
  const [galleryFiles, setGalleryFiles] = useState(null);

  function repairMultipleFiles(selectedFile) {
    const formData = new FormData();
    for (let i = 0; i < selectedFile.length; i++) {
      formData.append("img", selectedFile[i]);
    }
    setGalleryFiles(formData);
  }
  return {
    setGalleryFiles,
    galleryFiles,
    repairMultipleFiles,
  };
}

export default useGalleryUploader;
