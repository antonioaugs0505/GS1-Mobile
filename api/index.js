// api/index.js

const users = [
  { id: 1, name: "João", cpf: "123.456.789-00", email: "joao@example.com", password: "123456" },
  { id: 2, name: "Maria", cpf: "987.654.321-00", email: "maria@example.com", password: "654321" },
  { id: 3, name: "Pedro", cpf: "456.789.123-00", email: "pedro@example.com", password: "789123" },
  { id: 4, name: "Antonio Augusto Gomes dos Santos", cpf: "11995465433", email: "aagomes0505@gmail.com", password: "23a0lusa" }
];

export const registerUser = async (name, cpf, email, password) => {
  try {
    // Verifica se o email já está cadastrado
    const existingUserEmail = users.find(user => user.email === email);
    if (existingUserEmail) {
      throw new Error('Email já cadastrado');
    }

    // Verifica se o CPF já está cadastrado
    const existingUserCpf = users.find(user => user.cpf === cpf);
    if (existingUserCpf) {
      throw new Error('CPF já cadastrado');
    }

    // Cria um novo usuário
    const newUser = {
      id: users.length + 1,
      name,
      cpf,
      email,
      password
    };

    users.push(newUser);
    return newUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginUser = async (email, password) => {
  try {
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
      throw new Error('Email ou senha incorretos');
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateUser = async (userId, newData) => {
  try {
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
      throw new Error('Usuário não encontrado');
    }

    // Atualiza os dados do usuário
    users[userIndex] = {
      ...users[userIndex],
      ...newData
    };

    return users[userIndex];
  } catch (error) {
    throw new Error(error.message);
  }
};
