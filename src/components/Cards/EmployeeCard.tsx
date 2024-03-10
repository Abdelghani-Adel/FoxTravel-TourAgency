import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdLocalPhone, MdOutlineAttachEmail } from "react-icons/md";

type Props = {
  employee: FoxEmployee;
};

const EmployeeCard = (props: Props) => {
  const { employee } = props;

  return (
    <div className="employeeCard">
      <div className="image">
        <Image src={employee.image} fill alt="employee" />
      </div>
      <h5 className="fw-bold text-center">{employee.name}</h5>
      <p className="text_third text-center">{employee.position}</p>
      <p className="text-center fw-normal mb-2">"{employee.quote}"</p>
      <p className="fw-light">
        <MdOutlineAttachEmail className="text_third me-2" />
        {employee.email}
      </p>
      <p className="fw-light">
        <MdLocalPhone className="text_third me-2" />
        {employee.phone}
      </p>

      <div className="d-flex gap-3 mt-2 fs-5">
        <FaFacebook />
        <FaWhatsapp />
        <FaInstagram />
      </div>
    </div>
  );
};

export default EmployeeCard;
