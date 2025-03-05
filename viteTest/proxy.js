import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import https from "https";  // Thay require bằng import

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/proxy", async (req, res) => {
    try {
        const { pNgayHienTai, pLoaiLich } = req.body;
        console.log("Gửi request đến API IUH...");
        console.log(`Ngày: ${pNgayHienTai}, Loại lịch: ${pLoaiLich}`);

        const response = await fetch("https://sv.iuh.edu.vn/SinhVienTraCuu/GetDanhSachLichTheoTuan", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "X-Requested-With": "XMLHttpRequest",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
                "Referer": "https://sv.iuh.edu.vn/"
            },
            body: new URLSearchParams({ pNgayHienTai, pLoaiLich }).toString(),
            agent: new https.Agent({ rejectUnauthorized: false })
        });

        const responseText = await response.text();
        console.log("Phản hồi từ server IUH:", responseText);
        res.send(responseText);
    } catch (error) {
        console.error("Lỗi proxy:", error);
        res.status(500).send("Lỗi server proxy: " + error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server chạy tại http://localhost:${PORT}`);
});
