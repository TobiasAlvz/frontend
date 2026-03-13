import { useEffect, useState } from "react";
import { getUsers, createUser, deleteUser } from "./api";
import Dashboard from "./components/dashboard";
import UserForm from "./components/userForm";
import UserTable from "./components/userTable";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getUsers();

      setUsers(data);
    }

    load();
  }, []);

  async function handleCreate(user) {
    await createUser(user);

    const data = await getUsers();

    setUsers(data);
  }

  async function handleDelete(id) {
    await deleteUser(id);

    const data = await getUsers();

    setUsers(data);
  }

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <Dashboard total={users.length} />

      <UserForm onCreate={handleCreate} />

      <UserTable users={users} onDelete={handleDelete} />
    </div>
  );
}

export default App;
