import React from "react";
import ContactForm from "../Contact/ContactForm/ContactForm";
import PageLayout from "./../../layouts/PageLayout";
import Banner from "./Banner/Banner";
import BlogOne from "./BlogOne/BlogOne";
import BlogThree from "./BlogThree/BlogThree";
import BlogTwo from "./BlogTwo/BlogTwo";
import HonorableClient from "./HonorableClient/HonorableClient";

// import bgTop from "../../assets/Images/bg-right.png";
function ClientsPage() {
  return (
    <PageLayout>
      {/* Banner */}
      <Banner />
      <BlogOne></BlogOne>
      <BlogTwo></BlogTwo>
      <BlogThree></BlogThree>
      <HonorableClient></HonorableClient>
      <BlogThree></BlogThree>
      <ContactForm></ContactForm>
      {/*  */}
    </PageLayout>
  );
}

export default ClientsPage;
