// ✅ Formata um CPF com pontos e traço (usado para exibição de dados da API)
export const formatCPF = (cpf: string): string => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

export const cleanCPF = (cpf: string): string => {
  return cpf.replace(/\D/g, ""); // Remove pontos e traço
};

// ✅ Formata uma data para o padrão "dd/mm/aaaa"
export const formatDate = (dateString: string | null): string => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR");
};

// ✅ Valida nome
export const validateName = (name: string): string | null => {
  if (!name.trim()) return "Nome é obrigatório";
  return null;
};

// ✅ Valida email
export const validateEmail = (email: string): string | null => {
  if (!email.trim()) return "Email é obrigatório";
  if (!/\S+@\S+\.\S+/.test(email)) return "Email inválido";
  return null;
};

// ✅ Valida CPF
export const validateCPF = (cpf: string): string | null => {
  const rawCpf = cpf.replace(/\D/g, ""); // Remove pontuações
  if (!rawCpf) return "CPF é obrigatório";
  if (rawCpf.length !== 11) return "CPF deve conter 11 dígitos";
  return null;
};

// ✅ Valida senha
export const validatePassword = (password: string): string | null => {
  if (!password.trim()) return "Senha é obrigatória";
  if (password.length < 6) return "A senha deve ter pelo menos 6 caracteres";
  return null;
};

// ✅ Valida data de nascimento
export const validateDateOfBirth = (date: string): string | null => {
  if (!date) return "Data de nascimento é obrigatória";

  const [year, month, day] = date.split("-"); // Input HTML retorna yyyy-MM-dd
  const birthDate = new Date(`${year}-${month}-${day}`);

  if (isNaN(birthDate.getTime())) return "Data de nascimento inválida";
  return null;
};

// ✅ Define o tipo do formulário
interface FormData {
  name: string;
  email: string;
  cpf: string;
  password: string;
  dateOfBirth: string;
}

// ✅ Valida todo o formulário
export const validateForm = (formData: FormData): Partial<Record<keyof FormData, string>> => {
  const errors: Partial<Record<keyof FormData, string>> = {};

  errors.name = validateName(formData.name) || "";
  errors.email = validateEmail(formData.email) || "";
  errors.cpf = validateCPF(formData.cpf) || "";
  errors.password = validatePassword(formData.password) || "";
  errors.dateOfBirth = validateDateOfBirth(formData.dateOfBirth) || "";

  // Remove erros nulos
  Object.keys(errors).forEach((key) => {
    if (!errors[key as keyof FormData]) delete errors[key as keyof FormData];
  });

  return errors;
};
