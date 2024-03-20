"use client";
import Logo from "@/app/_components/layout/MainHeader/Logo";
import useHideLoadingLayer from "@/app/_hooks/loadingLayer";
import React from "react";
import { MdOutlineMail, MdOutlineLocationOn } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";
import ContactForm from "./_contactForm";
import PageStripe from "@/app/_components/ui/PageStripe";
import BranchDetails from "./_branchDetails";
import BranchList from "./_branchList";

const Page = () => {
  useHideLoadingLayer();

  return (
    <div className="bg-light">
      <PageStripe title="contact us" />
      <div className="container pb-4 pt-4">
        <div className="text-center mb-3">
          <Logo />
        </div>

        <BranchList />

        <div className="row">
          <div className="col-md-6 m-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
