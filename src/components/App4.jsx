import React, { useState } from 'react';

function App4() {
  setInterval(updateWaktu, 1000);

  const waktuSekarang = new Date().toLocaleTimeString();

  const [waktu, aturWaktu] = useState(waktuSekarang);

  function updateWaktu() {
    const waktuBaru = new Date().toLocaleTimeString();

    aturWaktu(waktuBaru);
  }

  return (
    <div className="container">
      <h1>{waktu}</h1>
      <button onClick={updateWaktu}>Get Time</button>
    </div>
  );
}

export default App4;
