const Member = require('../models/member');
const Family = require('../models/family'); // Import Family model

// Lấy tất cả thành viên trong một cây gia phả
exports.getAllMembers = async (req, res) => {
    try {
        const familyId = req.params.familyId;
        const members = await Member.find({ familyId: familyId });
        res.status(200).json(members);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Tạo một thành viên mới
exports.createMember = async (req, res) => {
    try {
        let familyId = req.body.familyId;
        // Nếu không có familyId, tạo một family mới
        if (!familyId) {
            const newFamily = new Family({
                // Có thể thêm tên gia đình mặc định
                name: `${req.body.name}'s Family`
            });
            const savedFamily = await newFamily.save();
            familyId = savedFamily._id;
        }

        // Tạo thành viên mới với familyId
        const member = new Member({
            name: req.body.name,
            gender: req.body.gender,
            dob: req.body.dob,
            familyId: familyId,
            fatherId: req.body.fatherId,
            // ...các thuộc tính khác
        });

        const newMember = await member.save();
        res.status(201).json(newMember);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Lấy thông tin một thành viên
exports.getMember = async (req, res) => {
    try {
        const member = await Member.findById(req.params.id);
        if (!member) return res.status(404).json({ message: 'Không tìm thấy thành viên' });
        res.status(200).json(member);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Cập nhật thông tin thành viên
exports.updateMember = async (req, res) => {
    try {
        const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedMember);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Xóa một thành viên
exports.deleteMember = async (req, res) => {
    try {
        const member = await Member.findByIdAndDelete(req.params.id);
        if (!member) return res.status(404).json({ message: 'Không tìm thấy thành viên' });
        res.status(200).json({ message: 'Thành viên đã được xóa' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};