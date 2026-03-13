import { useState } from "react";
import styles from "../styles/form.module.css";

export default function UserForm({ onCreate }) {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  function submit(e) {
    e.preventDefault();

    onCreate({
      nome,
      idade: Number(idade),
    });

    setNome("");
    setIdade("");
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome"
      />

      <input
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        placeholder="Idade"
      />

      <button>Cadastrar</button>
    </form>
  );
}
