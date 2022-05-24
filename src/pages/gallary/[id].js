import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import { Layout } from "../../components/common/Layout";
import { GallaryContext } from "../../contexts/GallaryContext";

const Gallary = () => {
  const { currentGallary, fetchGallary, isLoading } =
    useContext(GallaryContext);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    fetchGallary(id);
  }, [id]);

  return <Layout>Gallary</Layout>;
};

export default Gallary;
