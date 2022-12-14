import React from "react";
import PageLayout from "../../layouts/PageLayout";
import ContactForm from "../Contact/ContactForm/ContactForm";
import Banner from "./Banner/Banner";
import BlogOne from "./BlogOne/BlogOne";
import BlogThree from "./BlogThree/BlogThree";
import BlogTwo from "./BlogTwo/BlogTwo";

function ClientsPage() {
  return (
    <PageLayout>
      {/* Banner */}
      <Banner />
      <BlogOne></BlogOne>
      <BlogTwo></BlogTwo>
      <BlogThree></BlogThree>
      {/* <HonorableClient></HonorableClient>
      <BlogThree></BlogThree> */}
      <ContactForm></ContactForm>
      {/*  */}
    </PageLayout>
  );
}

export default ClientsPage;
