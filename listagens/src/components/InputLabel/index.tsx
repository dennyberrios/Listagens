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
            <label htmlFor={inputName}>{label}</label>
            <input
                type={type}
                id={inputId}
                name={inputName}
                value={value}
                onChange={change}
                maxLength={maxLength}
                placeholder={placeholder}
                className={`p-3 border border-1 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emeraldTeal focus:border-transparent`}
                {...props}
            />
            {errors && <span>{errors}</span>}
        </>
    );
};

export default InputLabel;

{/* {errors && <ErrorMessage>{errors}</ErrorMessage>} */ }