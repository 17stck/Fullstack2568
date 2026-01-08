
// ex4.1
const guest = ["Alice", "Bob", "Charlie", "David"]; // ประกาศอาเรย์ชื่อแขก

// ค้นหา "Charlie" แล้วเอาค่าที่ได้มาใส่ในตัวแปร findcharlie แล้วเช็คเงื่อนไขของ while
while ((findcharlie = guest.find((name) => name === "Charlie"))) {
  console.log("Found Charlie!"); // ถ้าพบ ให้พิมพ์ข้อความ
  break; // ออกจากลูปทันที (ทำให้ลูปทำงานแค่ครั้งเดียว)
}

