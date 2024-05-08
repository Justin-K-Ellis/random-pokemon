import Button from "./Button";

const Footer = (props) => {
  return (
    <div className="fixed bottom-0 flex justify-center p-4 w-full">
      <Button handleClick={props.handleClick} text={"Get a new Pokemon"} />
    </div>
  );
};

export default Footer;
