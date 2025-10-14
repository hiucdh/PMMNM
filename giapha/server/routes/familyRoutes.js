const express = require('express');
const router = express.Router();
const familyController = require('../controllers/familyController');

// Tạo một cây gia phả mới
router.post('/families', familyController.createFamily);

// Lấy thông tin một cây gia phả theo ID
router.get('/families/:id', familyController.getFamily);

// Cập nhật tên của một cây gia phả
router.put('/families/:id', familyController.updateFamily);

// Xóa một cây gia phả và tất cả thành viên của nó
router.delete('/families/:id', familyController.deleteFamily);

module.exports = router;