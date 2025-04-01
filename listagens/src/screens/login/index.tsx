"use client";

import InputLabel from "@/components/InputLabel";
import { useState } from "react";
import { validateEmail, validatePassword } from "@/utils/validations";
import { useRouter } from "next/navigation";

const LoginScreen: React.FC = () => {
    const navigate = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        const fieldError = validateField(name, value);

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: fieldError,
        }));
    }

    const validateField = (name: string, value: string): string | null => {
        switch (name) {
            case "email":
                return validateEmail(value);
            case "password":
                return validatePassword(value);
            default:
                return null;
        }
    };

    return (
        <main className="h-screen flex justify-center items-center">
            <section>
                <form className="flex flex-col gap-3 py-10 px-10 bg-white rounded-md shadow-md w-96 mx-auto text-onyxBlack">
                    <h1 className="text-3xl text-center font-bold text-emeraldTeal mb-4">Login</h1>
                    <div className="flex flex-col gap-2">
                        <InputLabel
                            label={"E-mail"}
                            type={"email"}
                            placeholder={"exemplo@gmail.com"}
                            inputId={"email"}
                            inputName={"email"}
                            change={handleChange}
                            value={formData.email}
                            errors={errors.email}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <InputLabel
                            label={"Senha"}
                            type={"password"}
                            placeholder={"••••••••••"}
                            inputId={"password"}
                            inputName={"password"}
                            change={handleChange}
                            value={formData.password}
                            errors={errors.password}
                        />
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center mt-2">
                        <button type="button" onClick={() => {navigate.push("/dashboard/home")}} className="bg-emeraldTeal text-pureWhite text-xl font-semibold px-16 py-2 rounded-3xl">Entrar</button>
                        <a href="" className="text-emeraldTeal text-lg font-medium">Cadastrar-se</a>
                        <div className="flex text-start mt-5 w-full">
                            <a href="" className="text-emeraldTeal text-sm">Esqueceu a senha?</a>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    );
}

export default LoginScreen;