const SecondaryBtn = ({ children, className }) => {
  return (
    <button
      className={`btn bg-white border rounded-lg border-orange-500 font-semibold py-6 ${className}`}
    >
      {children}
    </button>
  );
};

export default SecondaryBtn;
