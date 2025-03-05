import { useState } from "react";

function App() {
  const [date, setDate] = useState("");

  const fetchSchedule = () => {
    fetch("http://localhost:5000/proxy", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          pNgayHienTai: "2025-03-03",
          pLoaiLich: "0"
      })
  })
  .then(res => res.json())
  .then(data => console.log("Dữ liệu lịch học:", data))
  .catch(error => console.error("Lỗi khi gọi API:", error));
  
  };

  return (
    <div>
      <h1>Xem lịch học</h1>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={fetchSchedule}>Xem lịch</button>
    </div>
  );
}

export default App;