import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import { Brain, MapPin, UploadCloud } from 'lucide-react';

const CreateComplaintPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '', description: '', category: 'Garbage', ward: 'Ward 1', address: '', lat: '', lng: ''
  });
  const [aiSuggestion, setAiSuggestion] = useState(null);

  const simulateAI = () => {
    if (formData.description.length > 10) {
      setAiSuggestion({
        category: 'Water Leakage', priority: 'High', confidence: '92%'
      });
    }
  };

  const handleLocation = () => {
    setFormData(prev => ({ ...prev, lat: '18.5204', lng: '73.8567' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Complaint Created Successfully!');
    navigate('/citizen/dashboard');
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="page-content flex gap-6">
          <div className="card flex-1">
            <h1 className="text-2xl font-bold mb-6">Report a Civic Issue</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="label">Title</label>
                <input className="input" name="title" required value={formData.title} onChange={handleChange} placeholder="Brief summary of the issue" />
              </div>
              
              <div>
                <label className="label flex justify-between">
                  Description
                  <button type="button" onClick={simulateAI} className="text-primary text-sm flex items-center gap-1" style={{color: 'var(--color-primary)'}}><Brain size={14} /> Analyze with AI</button>
                </label>
                <textarea className="textarea" name="description" rows={4} required value={formData.description} onChange={handleChange} placeholder="Detailed description..." />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">Category</label>
                  <select className="select" name="category" value={formData.category} onChange={handleChange}>
                    <option>Garbage</option>
                    <option>Water Leakage</option>
                    <option>Streetlight</option>
                    <option>Road/Pothole</option>
                    <option>Drainage</option>
                    <option>Emergency</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="label">Ward</label>
                  <select className="select" name="ward" value={formData.ward} onChange={handleChange}>
                    {[1,2,3,4,5,6].map(w => <option key={w} value={`Ward ${w}`}>Ward {w}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="label flex justify-between">
                  Location Address
                  <button type="button" onClick={handleLocation} className="text-primary text-sm flex items-center gap-1" style={{color: 'var(--color-primary)'}}><MapPin size={14}/> Use Current Location</button>
                </label>
                <input className="input" name="address" required value={formData.address} onChange={handleChange} placeholder="Street, Landmark" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">Latitude</label>
                  <input className="input" style={{backgroundColor: 'var(--color-bg-main)'}} name="lat" readOnly value={formData.lat} placeholder="Optional" />
                </div>
                <div>
                  <label className="label">Longitude</label>
                  <input className="input" style={{backgroundColor: 'var(--color-bg-main)'}} name="lng" readOnly value={formData.lng} placeholder="Optional" />
                </div>
              </div>

              <div>
                <label className="label">Upload Image Proof</label>
                <div style={{ border: '1px dashed var(--color-border)', padding: '2rem', textAlign: 'center', borderRadius: 'var(--radius-md)', cursor: 'pointer', backgroundColor: 'var(--color-bg-main)' }}>
                  <div className="flex flex-col items-center justify-center text-muted">
                    <UploadCloud size={32} className="mb-2" />
                    <p>Click to upload or drag & drop</p>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary mt-4 py-3 text-lg">Submit Complaint</button>
            </form>
          </div>

          <div style={{ width: '300px' }}>
            <div className="card" style={{ backgroundColor: 'var(--color-primary-light)', borderColor: 'var(--color-primary-light)' }}>
              <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--color-primary)' }}><Brain size={18} /> AI Assistant</h3>
              {aiSuggestion ? (
                <div className="flex flex-col gap-3">
                  <div className="p-3 bg-white rounded border" style={{ backgroundColor: 'white', borderRadius: 'var(--radius-sm)', padding: 'var(--spacing-3)'}}>
                    <p className="text-xs text-muted mb-1">Suggested Category</p>
                    <p className="font-bold flex items-center justify-between">{aiSuggestion.category} <button className="btn btn-primary" style={{ padding: '2px 6px', fontSize: '10px' }} onClick={() => setFormData({...formData, category: aiSuggestion.category})}>Apply</button></p>
                  </div>
                  <div className="p-3 bg-white rounded border" style={{ backgroundColor: 'white', borderRadius: 'var(--radius-sm)', padding: 'var(--spacing-3)'}}>
                    <p className="text-xs text-muted mb-1">Priority Analysis</p>
                    <p className="font-bold" style={{ color: 'var(--color-danger)' }}>{aiSuggestion.priority}</p>
                  </div>
                  <div className="p-3 bg-white rounded border" style={{ backgroundColor: 'white', borderRadius: 'var(--radius-sm)', padding: 'var(--spacing-3)'}}>
                    <p className="text-xs text-muted mb-1">Confidence Score</p>
                    <p className="font-bold" style={{ color: 'var(--color-success)' }}>{aiSuggestion.confidence}</p>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted">Write a description and click "Analyze with AI" to get automatic categorizations and risk assessment.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateComplaintPage;
