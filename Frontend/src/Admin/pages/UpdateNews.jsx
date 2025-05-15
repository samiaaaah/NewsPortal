import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateNews = () => {
  const BASE_URL = 'http://localhost:3000';
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    publisherName: '',
    description: '',
    image: null,
    categoryId: '',
    publishedAt: '',
  });

  const [existingImage, setExistingImage] = useState('');
  const [errors, setErrors] = useState({});
  const [categories, setCategories] = useState([]);

  

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('http://localhost:3000/category');
        setCategories(res.data.category); // FIX HERE
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    const fetchNews = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/news/${id}`);
        const data = response.data;
        setFormData({
          title: data.title || '',
          publisherName: data.publisherName || '',
          description: data.description || '',
          image: null,
          categoryId: data.categoryId || '',
          publishedAt: data.publishedAt?.slice(0, 16) || '',
        });
        setExistingImage(data.image);
      } catch (error) {
        console.error('Error fetching news item:', error);
        alert('Failed to load news details.');
      }
    };

    fetchCategories();
    fetchNews();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.publisherName.trim()) newErrors.publisherName = 'Publisher name is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.categoryId) newErrors.categoryId = 'Category is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const updatedData = new FormData();
      updatedData.append('title', formData.title);
      updatedData.append('publisherName', formData.publisherName);
      updatedData.append('description', formData.description);
      updatedData.append('categoryId', formData.categoryId);
      updatedData.append('publishedAt', formData.publishedAt);
      if (formData.image) {
        updatedData.append('image', formData.image);
      }

      await axios.put(`${BASE_URL}/news/${id}`, updatedData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      navigate('/admin/news');
    } catch (error) {
      console.error('Update failed:', error.response || error.message);
      alert('Failed to update news.');
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto mt-15">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Update News</h1>
        <button
          onClick={() => navigate('/admin/news')}
          className="text-gray-600 hover:text-gray-800 flex items-center gap-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to News
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 border border-gray-200">
        <div className="grid grid-cols-1 gap-6">

          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
          </div>

          {/* Publisher Name */}
          <div>
            <label htmlFor="publisherName" className="block text-sm font-medium text-gray-700 mb-1">Publisher Name *</label>
            <input
              type="text"
              id="publisherName"
              name="publisherName"
              value={formData.publisherName}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${errors.publisherName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.publisherName && <p className="mt-1 text-sm text-red-600">{errors.publisherName}</p>}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              className={`w-full px-3 py-2 border rounded-md ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
          </div>

          {/* Image */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Image</label>
            {existingImage && (
              <div className="mb-2">
                <img src={`${BASE_URL}/uploads/${existingImage}`} alt="Current" className="h-32 object-contain" />
              </div>
            )}
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${errors.image ? 'border-red-500' : 'border-gray-300'}`}
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
            <select
              id="categoryId"
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${errors.categoryId ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
            {errors.categoryId && <p className="mt-1 text-sm text-red-600">{errors.categoryId}</p>}
          </div>

          {/* Published Date */}
          <div>
            <label htmlFor="publishedAt" className="block text-sm font-medium text-gray-700 mb-1">Published Date & Time</label>
            <input
              type="datetime-local"
              id="publishedAt"
              name="publishedAt"
              value={formData.publishedAt}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors">
              Update News
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateNews;