import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Make sure axios is installed in your frontend (npm install axios)

const ItemsScreen = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                // Ensure your backend server is running on http://localhost:5000
                const response = await axios.get('http://localhost:5000/api/items');
                setItems(response.data);
            } catch (err) {
                setError('Failed to fetch items. Please ensure backend is running.');
                console.error('Error fetching items:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchItems();
    }, []); // Empty dependency array means this runs once after initial render

    if (loading) {
        return <div className="container" style={{ textAlign: 'center', marginTop: '20px' }}>Loading items...</div>;
    }

    if (error) {
        return <div className="container" style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>Error: {error}</div>;
    }

    return (
        <div className="container" style={{ marginTop: '20px' }}>
            <h1>Items from Backend</h1>
            {items.length === 0 ? (
                <p>No items found. Add some using Postman or Insomnia!</p>
            ) : (
                <ul>
                    {items.map(item => (
                        <li key={item._id} style={{ marginBottom: '10px' }}>
                            <strong>{item.name}:</strong> {item.quantity}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ItemsScreen;