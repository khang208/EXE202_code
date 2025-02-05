const mongoose = require('mongoose');
async function connect() {
    try {
        mongoose
            .connect(
                 'mongodb+srv://khangnbce170268:wbEYDYrSN5v37oX6@data.q51v8.mongodb.net/exe202'
                
            )
            .then(() => console.log('Connected!'));
           // Đợi MongoDB kết nối xong rồi mới in ra tên database
        // mongoose.connection.once("open", () => {
        //     console.log("📌 Database đang kết nối:", mongoose.connection.name);
        // });
    } catch (error) {
        console.log('fail!');
    }
}
module.exports = { connect };

// mongodb://localhost:3000/exe202
//http://localhost:3000