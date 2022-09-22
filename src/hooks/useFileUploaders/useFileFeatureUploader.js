import { useState } from "react";

function useFileFeatureUploader() {
  const [file, setFile] = useState(null);

  function repairSingleFile(selectedFile) {
    const formData = new FormData();
    formData.append("img", selectedFile);
    setFile(formData);
  }
  return {
    setFile,
    file,
    repairSingleFile,
  };
}

export default useFileFeatureUploader;
