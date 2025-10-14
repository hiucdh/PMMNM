import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';
import { getFamilyMembers, updateMember, createMember } from '../services/api';
import EditMemberForm from '../components/EditMemberForm'; // Import the form component

const FamilyTree = () => {
    const [data, setData] = useState(null);
    const [familyId, setFamilyId] = useState('68ed3746173786a85f87ba12');
    const [selectedMember, setSelectedMember] = useState(null); // selected node datum
    const [selectedMode, setSelectedMode] = useState('edit'); // 'edit' or 'add'

    useEffect(() => {
        const fetchFamilyData = async () => {
            try {
                const response = await getFamilyMembers(familyId);
                const members = response.data;
                const treeData = buildTree(members);
                setData(treeData);
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu:", error);
            }
        };

        if (familyId) {
            fetchFamilyData();
        }
    }, [familyId]);

    const buildTree = (members) => {
        if (members.length === 0) return null;

        const memberMap = new Map(members.map(m => [m._id, { ...m, children: [] }]));
        let root = null;

        members.forEach(member => {
            const node = memberMap.get(member._id);

            if (!member.fatherId && !member.motherId) {
                if (!root) {
                    root = node;
                }
            } else {
                // Thêm con vào cha
                if (member.fatherId && memberMap.has(member.fatherId)) {
                    const fatherNode = memberMap.get(member.fatherId);
                    if (fatherNode && fatherNode._id !== member._id) {
                        fatherNode.children.push(node);
                    }
                }
                // Thêm con vào mẹ
                if (member.motherId && memberMap.has(member.motherId)) {
                    const motherNode = memberMap.get(member.motherId);
                    if (motherNode && motherNode._id !== member._id) {
                        motherNode.children.push(node);
                    }
                }
            }
        });

        if (!root) {
            console.warn("Không tìm thấy nút gốc. Cây gia phả có thể bị ngắt kết nối.");
        }

        return root;
    };

    const handleNodeClick = (nodeDatum) => {
        // khi click node: mở form chỉnh sửa
        setSelectedMode('edit');
        setSelectedMember(nodeDatum);
    };

    const handleAddChild = (nodeDatum) => {
        // mở form thêm con với parent là nodeDatum
        setSelectedMode('add');
        setSelectedMember(nodeDatum);
    };

    const handleCloseForm = () => {
        setSelectedMember(null);
    };

    const handleUpdateMember = async (updatedData) => {
        try {
            await updateMember(selectedMember._id, updatedData);

            const response = await getFamilyMembers(familyId);
            const members = response.data;
            const treeData = buildTree(members);
            setData(treeData);

            setSelectedMember(null);
        } catch (error) {
            console.error("Lỗi khi cập nhật thành viên:", error);
        }
    };

    const handleCreateMember = async (newData) => {
        try {
            // Tạo payload đầy đủ
            const payload = {
                name: newData.name,
                gender: newData.gender,
                dob: newData.dob,
                familyId: familyId, // Gán familyId từ state của component cha
                // Bạn có thể thêm fatherId hoặc motherId nếu cần
                fatherId: selectedMember._id,
                motherId: selectedMember && selectedMember.gender === 'nữ' ? selectedMember._id : null,
            };
            console.log("Tạo thành viên với payload:", payload);

            await createMember(payload);

            // Fetch lại dữ liệu sau khi tạo thành công
            const response = await getFamilyMembers(familyId);
            const members = response.data;
            const treeData = buildTree(members);
            setData(treeData);

            setSelectedMember(null);
        } catch (error) {
            console.error("Lỗi khi tạo thành viên:", error);
        }
    };

    const renderNodeWithCustomEvents = ({ nodeDatum }) => (
        <g>
            {/* click node => mở form edit; stopPropagation để không bị tree xử lý (collapse/expand) */}
            <g
                onClick={(e) => {
                    e.stopPropagation();
                    console.log('node click:', nodeDatum);
                    setSelectedMode('edit');
                    setSelectedMember(nodeDatum);
                }}
                style={{ cursor: 'pointer' }}
            >
                <circle r={15} className="fill-blue-400" />
                <text x="20" className="text-sm font-semibold fill-current text-gray-800">
                    {nodeDatum.name}
                </text>
            </g>

            {/* nút + để thêm con (dừng lan truyền sự kiện) */}
            <g>
                <circle
                    cx={-20}
                    r={8}
                    fill="#16a34a"
                    onClick={(e) => {
                        e.stopPropagation();
                        console.log('add click:', nodeDatum);
                        setSelectedMode('add');
                        setSelectedMember(nodeDatum);
                    }}
                    style={{ cursor: 'pointer' }}
                />
                <text x={-24} y={4} fontSize="10" fill="#fff" textAnchor="middle" pointerEvents="none">+</text>
            </g>
        </g>
    );

    return (
        <div className="w-full h-[80vh] flex items-center justify-center">
            {data ? (
                <Tree
                    data={data}
                    orientation="vertical"
                    translate={{ x: window.innerWidth / 2, y: 100 }}
                    pathFunc="step"
                    zoomable={true}
                    collapsible={false}                       // <-- tắt collapse để click không bị tree xử lý
                    renderCustomNodeElement={renderNodeWithCustomEvents} // <-- prop đúng
                />
            ) : (
                <div className="text-lg font-medium text-gray-600">Đang tải sơ đồ...</div>
            )}
            {selectedMember && (
                <>
                    <EditMemberForm
                        member={selectedMember}
                        mode={selectedMode} // 'edit' hoặc 'add'
                        onClose={() => setSelectedMember(null)}
                        onUpdate={handleUpdateMember}
                        onCreate={handleCreateMember}
                    />
                    <div style={{ position: 'fixed', right: 12, bottom: 12, zIndex: 9999, background: '#fff', padding: 8, borderRadius: 6 }}>
                        <pre style={{ maxWidth: 300, maxHeight: 200, overflow: 'auto' }}>{JSON.stringify(selectedMember, null, 2)}</pre>
                    </div>
                </>
            )}
        </div>
    );
};

export default FamilyTree;