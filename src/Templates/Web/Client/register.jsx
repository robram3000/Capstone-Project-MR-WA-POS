import React, { useState } from "react";

const Register = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        // Simulate registration logic
        setSuccess(true);
    };

    return (
        <div className="register-container" style={{ maxWidth: 400, margin: "2rem auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
            <h2 style={{ textAlign: "center" }}>Register</h2>
            {error && <div style={{ color: "red", marginBottom: 12 }}>{error}</div>}
            {success ? (
                <div style={{ color: "green", textAlign: "center" }}>Registration successful!</div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: 12 }}>
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", padding: 8, marginTop: 4 }}
                        />
                    </div>
                    <div style={{ marginBottom: 12 }}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", padding: 8, marginTop: 4 }}
                        />
                    </div>
                    <div style={{ marginBottom: 12 }}>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", padding: 8, marginTop: 4 }}
                        />
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", padding: 8, marginTop: 4 }}
                        />
                    </div>
                    <button type="submit" style={{ width: "100%", padding: 10, background: "#007bff", color: "#fff", border: "none", borderRadius: 4 }}>
                        Register
                    </button>
                </form>
            )}
        </div>
    );
};

export default Register;