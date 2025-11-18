import { useState } from "react";

function App() {
  const [texto, setTexto] = useState("");
  const [respuesta, setRespuesta] = useState(null);

  async function analizar() {
    const res = await fetch("http://localhost:8000/analizar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ texto }),
    });
    const data = await res.json();
    setRespuesta(data.resultado);
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Analizador de sentimientos en frases con IA</h1>
      <input
        style={{ width: "300px", padding: "8px" }}
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe algo..."
      />
      <button onClick={analizar} style={{ marginLeft: "10px" }}>
        Analizar
      </button>

      {/* Renderizado del resultado */}
      {respuesta && (
        <div style={{ marginTop: "20px" }}>
          {respuesta.map((r, i) => (
            <div
              key={i}
              style={{
                marginBottom: "10px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <strong>Etiqueta:</strong> {r.label} <br />
              <strong>Score:</strong> {(r.score * 100).toFixed(2)}%
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
