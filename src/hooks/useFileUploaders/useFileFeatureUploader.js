import { useState } from "react";

function useFileFeatureUploader() {
  const [featureFile, setFeatureFile] = useState(null);

  function repairSingleFile(selectedFile) {
    const formData = new FormData();
    formData.append("img", selectedFile);
    setFeatureFile(formData);
  }
  return {
    setFeatureFile,
    featureFile,
    repairSingleFile,
  };
}

export default useFileFeatureUploader;
