// createAdminUser.js
const mongoose = require('mongoose');
const adminService = require('./root/backend/services/adminService');

// MongoDB bağlantısını kurun
const uri = "mongodb+srv://bent536:Gl418nSX2NYUC9Gs@cluster0.3dejykk.mongodb.net/";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error(err));

// Yeni admin kullanıcısını oluşturmak için fonksiyon
async function createAdminUser() {
  const username = 'admin';
  const password = 'admin123';

  try {
    await adminService.createAdminUser(username, password);
    console.log('Admin user created successfully');
  } catch (error) {
    console.error('Error creating admin user:', error.message);
  } finally {
    mongoose.connection.close();
  }
}

// Admin kullanıcısını oluşturun
createAdminUser();