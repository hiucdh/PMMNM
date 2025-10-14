import React, { useState, useEffect } from 'react';

const EditMemberForm = ({ member, mode = 'edit', onClose, onUpdate, onCreate }) => {
    const [form, setForm] = useState({ name: '', gender: 'male', dob: '' });

    useEffect(() => {
        if (member && mode === 'edit') {
            setForm({
                name: member.name || '',
                gender: member.gender || 'male',
                dob: member.dob || ''
            });
        } else {
            // reset for add
            setForm({ name: '', gender: 'male', dob: '' });
        }
    }, [member, mode]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mode === 'edit') {
            onUpdate(form);
        } else {
            onCreate(form); // Gọi hàm onCreate khi ở chế độ 'add'
        }
        onClose(); // Đóng form sau khi hoàn thành
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="bg-white p-4 rounded shadow-md w-96">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold">{mode === 'edit' ? 'Chỉnh sửa thành viên' : 'Thêm con'}</h3>
                    <button onClick={onClose} className="text-gray-600">Đóng</button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                        <label className="block text-sm">Tên</label>
                        <input name="name" value={form.name} onChange={handleChange} className="w-full border px-2 py-1" />
                    </div>

                    <div>
                        <label className="block text-sm">Giới tính</label>
                        <select name="gender" value={form.gender} onChange={handleChange} className="w-full border px-2 py-1">
                            <option value="male">Nam</option>
                            <option value="female">Nữ</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm">Ngày sinh</label>
                        <input name="dob" type="date" value={form.dob} onChange={handleChange} className="w-full border px-2 py-1" />
                    </div>

                    <div className="flex justify-end gap-2">
                        <button type="button" onClick={onClose} className="px-3 py-1 border rounded">Hủy</button>
                        <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded">
                            {mode === 'edit' ? 'Lưu' : 'Tạo'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditMemberForm;