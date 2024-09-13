import React from 'react';
import './ToolGrid.css'; // Import your CSS styles

const tools = [
  { name: "Merge PDF", imgSrc: "/images/mergepdf.png" }, // Replace with actual paths
  { name: "Compress PDF", imgSrc: "/images/compress-icon.png" },
  { name: "Split PDF", imgSrc: "/images/split-icon.png" }
];

const ToolGrid = () => {
  return (
    <div className="tool-grid">
      {tools.map((tool, index) => (
        <div key={index} className="tool-box">
          <img src={tool.imgSrc} alt={tool.name} className="tool-icon" />
          <p>{tool.name}</p>
          <form 
      action="https://43.204.227.55:3000/first/mergePdf" 
        method="POST" 
        encType="multipart/form-data"
      >
        <label htmlFor="pdfFiles">Select PDF files to merge:</label>
        <input 
          type="file" 
          name="file" 
          id="file" 
          multiple 
          accept="application/pdf" 
        />
        <button type="submit">Merge PDFs</button>
      </form>
        </div>
      ))}
      
    </div>
  );
};

export default ToolGrid;


