const { MongoClient } = require('mongodb');


async function testMongoDBConnection() {
  const url = 'mongodb://127.0.0.1:27017'; // Sử dụng IPv4 localhost
  const dbName = 'test'; // Tên database
  // Tạo một đối tượng MongoClient
  const client = new MongoClient(url);
  try {
    // Kết nối đến MongoDB
    await client.connect();
    console.log('Kết nối thành công đến MongoDB');
    // Làm bất kỳ thao tác nào bạn muốn ở đây, ví dụ:
    const db = client.db(dbName);
    const collection = db.collection('mycollection');
    const result = await collection.findOne({}); // Tìm một tài liệu trong collection

    // console.log('Kết quả truy vấn:', result);
  } catch (err) {
    console.error('Không thể kết nối đến MongoDB:', err);
  } finally {
    // Đóng kết nối sau khi hoàn tất công việc
    client.close();
  }
  
}
// Gọi hàm kiểm tra kết nối
testMongoDBConnection();
