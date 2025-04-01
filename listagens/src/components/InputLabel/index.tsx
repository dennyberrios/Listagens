"use client";

type InputLabelProps = {
    label: string;
    inputId: string;
    inputName: string;
    type: string;
    value: string;
    change: (event: React.ChangeEvent<HTMLInputElement>) => void;
    errors?: string;
    maxLength?: number;
    placeholder?: string;
};

const InputLabel: React.FC<InputLabelProps> = ({
    label,
    inputId,
    inputName,
    type,
    value,
    change,
    errors,
    maxLength,
    placeholder,
    ...props
}) => {
    return (
        <>
            <label htmlFor={inputName} className="text-emeraldTeal font-medium">{label}</label>
            <input
                type={type}
                id={inputId}
                name={inputName}
                value={value}
                onChange={change}
                maxLength={maxLength}
                placeholder={placeholder}
                className={`px-3 py-2 border border-[1px] rounded-md transition-colors duration-200 ease-in-out 
                    ${errors ? "border-coralRed outline-none" : "border-gray-300 focus:border-emeraldTeal focus:outline-none"}`}                
                {...props}
            />
            {errors && <span className="text-coralRed p-0 m-0">{errors}</span>}
        </>
    );
};

export default InputLabel;