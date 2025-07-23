type Prop= {label:string, type:string}

const InputField = (props:Prop) => {
    
  return (
    <div>
      <label className="block text-sm font-medium text-heading flex align-item-center">
       {props.label}
      </label>
      <input
        type={props.type}
        name="name"
        className="mt-2 w-full p-3 pb-4 border-b-1 border-b-text-heading focus:outline-none focus:ring-0 focus:ring-green-900"
        placeholder="John Doe"
      />
    </div>
  );
};

export default InputField;
