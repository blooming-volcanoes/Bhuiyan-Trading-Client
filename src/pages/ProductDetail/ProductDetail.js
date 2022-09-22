import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import httpProductService from "../../services/product.service";

import LoadingButton from "./../../Components/custom/Buttons/LoadingButton";
import ProtectedPageLayout from "./../../layouts/ProtectedPageLayout";
import PdDetailMain from "./PdDetailMain/PdDetailMain";

const ProductDetail = () => {
  const image = useRef();
  const [color, setColor] = useState(null);
  const [images] = useState({
    primary: "https://picsum.photos/id/701/500/300",
    secondary: [
      "https://picsum.photos/id/102/500/300",
      "https://picsum.photos/id/103/500/300",
      "https://picsum.photos/id/104/500/300",
      "https://picsum.photos/id/105/500/300",
      "https://picsum.photos/id/106/500/300",
    ],
  });

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    setLoading(true);
    httpProductService
      .getSingleProductById(id)
      .then((data) => {
        setProduct(data[0]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  console.log(product);

  return (
    <ProtectedPageLayout>
      {loading ? (
        <div className="flex h-screen justify-center space-y-4">
          <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
        </div>
      ) : (
        <PdDetailMain images={images} product={product} />
      )}
    </ProtectedPageLayout>
  );
};

export default ProductDetail;
