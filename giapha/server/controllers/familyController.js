const Family = require('../models/family');
const Member = require('../models/member'); // Dùng để xóa thành viên khi xóa gia đình

// Tạo một cây gia phả mới
exports.createFamily = async (req, res) => {
    const family = new Family({
        name: req.body.name,
    });

    try {
        const newFamily = await family.save();
        res.status(201).json(newFamily);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Lấy thông tin một cây gia phả
exports.getFamily = async (req, res) => {
    try {
        const family = await Family.findById(req.params.id);
        if (!family) return res.status(404).json({ message: 'Không tìm thấy gia phả' });
        res.status(200).json(family);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật tên của một cây gia phả
exports.updateFamily = async (req, res) => {
    try {
        const updatedFamily = await Family.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
        res.status(200).json(updatedFamily);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Xóa một cây gia phả và tất cả thành viên của nó
exports.deleteFamily = async (req, res) => {
    try {
        const family = await Family.findByIdAndDelete(req.params.id);
        if (!family) return res.status(404).json({ message: 'Không tìm thấy gia phả' });

        // Xóa tất cả thành viên liên quan
        await Member.deleteMany({ familyId: req.params.id });

        res.status(200).json({ message: 'Gia phả và tất cả thành viên đã được xóa' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};