import axios from 'axios';

// Tạo một instance Axios với URL gốc của backend
const API = axios.create({
    baseURL: 'http://localhost:8080/api'
});

// APIs cho Gia đình (Family)
export const createFamily = (familyData) => API.post('/families', familyData);
export const getFamily = (familyId) => API.get(`/families/${familyId}`);
export const updateFamily = (familyId, familyData) => API.put(`/families/${familyId}`, familyData);
export const deleteFamily = (familyId) => API.delete(`/families/${familyId}`);

// APIs cho Thành viên (Member)
export const getFamilyMembers = (familyId) => API.get(`/members/${familyId}`);
export const getMember = (memberId) => API.get(`/members/${memberId}`);
export const createMember = (memberData) => API.post('/members', memberData);
export const updateMember = (memberId, memberData) => API.put(`/members/${memberId}`, memberData);
export const deleteMember = (memberId) => API.delete(`/members/${memberId}`);