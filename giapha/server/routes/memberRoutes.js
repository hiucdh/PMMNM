const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');

// Lấy tất cả thành viên của một gia đình
router.get('/members/:familyId', memberController.getAllMembers);

// Tạo thành viên mới
router.post('/members', memberController.createMember);

// Lấy thông tin thành viên theo ID
router.get('/members/:id', memberController.getMember);

// Cập nhật thành viên theo ID
router.put('/members/:id', memberController.updateMember);

// Xóa thành viên theo ID
router.delete('/members/:id', memberController.deleteMember);

module.exports = router;