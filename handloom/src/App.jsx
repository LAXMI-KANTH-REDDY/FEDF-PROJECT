function App() {
  const [selectedRole, setSelectedRole] = useState(null);

  const renderRoleComponent = () => {
    if (!selectedRole) return null;
    switch (selectedRole.name) {
      case "Admin":
        return <Admin />;
      case "Artisan":
        return <Artisan />;
      case "Buyer":
        return <Buyer />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Handloom Platform</h1>
      <h2>Select your role:</h2>
      <ul>
        {roles.map((role) => (
          <li key={role.name}>
            <button onClick={() => setSelectedRole(role)}>{role.name}</button>
          </li>
        ))}
      </ul>
      {selectedRole && (
        <div>
          <h3>{selectedRole.name}</h3>
          <p>{selectedRole.description}</p>
          <h4>Permissions:</h4>
          <ul>
            {selectedRole.permissions.map((perm) => (
              <li key={perm}>{perm}</li>
            ))}
          </ul>
          {renderRoleComponent()}
        </div>
      )}
    </div>
  );
}

export default App
