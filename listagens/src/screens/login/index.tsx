"use client";

import InputLabel from "@/components/InputLabel";

const LoginScreen: React.FC = () => {
    const formData = {
        email: "",
        password: "",
    };
    const errors = {
        email: "",
        password: "",
    };

    function handleChange() {

    }

    return (
        <main className="h-screen flex justify-center items-center">
            <section>
                <form className="flex flex-col gap-5 p-10 bg-white rounded-md shadow-md w-96 mx-auto text-onyxBlack">
                    <legend className="text-2xl text-center font-extrabold text-emeraldTeal">Login</legend>
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
                    <button>Entrar</button>
                    <a href="">Cadastrar-se</a>
                </form>
            </section>
        </main>
    );
}

export default LoginScreen;