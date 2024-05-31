import Navigate from "../../ui/MyLink";

const SubmitButton = ({ link }: { link: string }) => {
  return (
    <Navigate href={link} className="ss_submitBtn">
      Search
    </Navigate>
  );
};

export default SubmitButton;
