const { useState } = React;

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Sindhu", plan: "Premium", status: "Active" },
    { id: 2, name: "John", plan: "Basic", status: "Active" }
  ]);

  const [name, setName] = useState("");
  const [plan, setPlan] = useState("Basic");

  const subscribe = () => {
    if (name === "") return;

    const newUser = {  
      id: users.length + 1,  
      name,  
      plan,  
      status: "Active"  
    };  

    setUsers([...users, newUser]);  
    setName("");
  };

  const cancel = (id) => {
    const updatedUsers = users.map(user =>
      user.id === id ? { ...user, status: "Canceled" } : user
    );

    setUsers(updatedUsers);
  };

  return (
    <div className="container">
      <h1>Subscription Management</h1>

      <div className="form-box">  
        <input  
          type="text"  
          placeholder="Enter your name"  
          value={name}  
          onChange={(e) => setName(e.target.value)}  
        />  

        <select value={plan} onChange={(e) => setPlan(e.target.value)}>  
          <option>Basic</option>  
          <option>Premium</option>  
          <option>Pro</option>  
        </select>  

        <button onClick={subscribe}>Subscribe</button>  
      </div>  

      <h3>Active Subscriptions</h3>  
      <ul>  
        {users.map(user => (  
          <li key={user.id}>  
            <span>  
              <strong>{user.name}</strong> - {user.plan} - {user.status}  
            </span>  
            <button onClick={() => cancel(user.id)}>Cancel</button>  
          </li>  
        ))}  
      </ul>  
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
