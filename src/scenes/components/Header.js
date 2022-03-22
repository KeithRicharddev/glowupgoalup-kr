import GoogleButton from "react-google-button";

export default function Header({ user, handleLogin }) {
  return (
    <>
      <nav className="navbar">
        <h1>GoalUp and GlowUp </h1>
        <div className="links">
          {!user ? (
            <GoogleButton type="light" onClick={handleLogin} />
          ) : (
            <a
              href="/"
              style={{
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: "8px",
              }}
            >
              Log out
            </a>
          )}
        </div>
      </nav>
    </>
  );
}
