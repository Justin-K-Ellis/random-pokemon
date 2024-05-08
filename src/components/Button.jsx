const Button = (props) => {
  return (
    <button
      className="rounded border-2 border-slate-700 border-solid p-2 text-xl"
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
