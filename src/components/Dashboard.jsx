import styles from "../styles/dashboard.module.css";

export default function Dashboard({ total }) {
  return (
    <div className={styles.container}>
      <h1>Painel de Usuários</h1>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Total de usuários</h3>
          <p>{total}</p>
        </div>

        <div className={styles.card}>
          <h3>Status da API</h3>
          <p>Online</p>
        </div>
      </div>
    </div>
  );
}
