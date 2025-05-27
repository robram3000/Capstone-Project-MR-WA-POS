import React from 'react';

const Card = ({ title, content, footer }) => (
    <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        padding: '16px',
        background: '#fff',
        maxWidth: '350px',
        margin: '16px auto'
    }}>
        {title && <h3 style={{ marginTop: 0 }}>{title}</h3>}
        <div>{content}</div>
        {footer && <div style={{ marginTop: '16px', color: '#888', fontSize: '0.9em' }}>{footer}</div>}
    </div>
);

export default Card;