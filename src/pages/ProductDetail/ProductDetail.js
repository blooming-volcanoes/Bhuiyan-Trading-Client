import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import httpProductService from "../../services/product.service";

import LoadingButton from "./../../Components/custom/Buttons/LoadingButton";
import PageLayout from "./../../layouts/PageLayout";
import PdDetailMain from "./PdDetailMain/PdDetailMain";

const ProductDetail = () => {
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

  return (
    <PageLayout>
      {loading ? (
        <div className="flex h-screen justify-center space-y-4">
          <LoadingButton styles="" svg="w-16 h-16 text-indigo-500" />
        </div>
      ) : (
        <PdDetailMain product={product} />
      )}
    </PageLayout>
  );
};

export default ProductDetail;
