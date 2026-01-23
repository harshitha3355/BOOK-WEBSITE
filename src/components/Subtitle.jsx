import React from 'react';
import './Subtitle.css';

export default function Subtitle({ heading }) {
  return (
    <h1 className="subtitle">
      {heading}
    </h1>
  );
}