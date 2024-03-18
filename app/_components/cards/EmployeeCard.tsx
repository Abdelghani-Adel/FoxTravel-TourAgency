import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
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
      <p className="textSecondary text-center">{employee.position}</p>
      <p className="text-center fw-normal mb-2">"{employee.quote}"</p>
      <p className="fw-light">
        <MdOutlineAttachEmail className="textSecondary me-2" />
        {employee.email}
      </p>
      <p className="fw-light">
        <MdLocalPhone className="textSecondary me-2" />
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
