import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import { Footer } from "../../components/common/Footer";
import { Layout } from "../../components/common/Layout";
import { GallaryDisplay } from "../../components/GallaryDisplay";
import { GallaryContext } from "../../contexts/GallaryContext";

const Gallary = () => {
  const { fetchGallary } = useContext(GallaryContext);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    fetchGallary(id);
  }, [id]);

  return (
    <Layout>
      <GallaryDisplay />
    </Layout>
  );
};

export default Gallary;
