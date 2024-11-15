// import React, { useState } from 'react'

// const Images = () => {
//     const [imagesList, setImagesList] = useState([])

//     const handleImage = event =>{
//         console.log("images event", event.target.files )
//         if(event.target.files){
           
//         }
//     }

//   return (
//     <div>
//        <input type='file' onChange={handleImage}/>
//     </div>
//   )
// }

// export default Images

// import React, { useState, useEffect } from 'react';

// const Images = () => {
//     const [imagesList, setImagesList] = useState([]);

//     const handleImage = event => {
//         if (event.target.files) {
//             const filesArray = Array.from(event.target.files).map(file =>
//                 URL.createObjectURL(file)
//             );
//             setImagesList(prevImages => prevImages.concat(filesArray));
//         }
//     };

//     // Cleanup object URLs when component unmounts or imagesList changes
//     useEffect(() => {
//         return () => {
//             imagesList.forEach(url => URL.revokeObjectURL(url));
//         };
//     }, [imagesList]);

//     return (
//         <div>
//             <input type='file' multiple onChange={handleImage} />
//             <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
//                 {imagesList.map((image, index) => (
//                     <img
//                         key={index}
//                         src={image}
//                         alt={`Uploaded ${index}`}
//                         style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '5px' }}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Images;


// import React, { useState } from 'react';

// const Images = () => {
//     const [imagesList, setImagesList] = useState([]);

//     const handleImage = files => {
//         const filesArray = Array.from(files).map(file => URL.createObjectURL(file));
//         setImagesList(prevImages => prevImages.concat(filesArray));
//     };

//     const handleFileInputChange = event => {
//         if (event.target.files) {
//             handleImage(event.target.files);
//         }
//     };

//     const handleDragOver = event => {
//         event.preventDefault();
//         event.stopPropagation();
//     };

//     const handleDrop = event => {
//         event.preventDefault();
//         event.stopPropagation();
//         if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
//             handleImage(event.dataTransfer.files);
//             event.dataTransfer.clearData();
//         }
//     };

//     return (
//         <div>
//             {/* File input (optional for users who prefer clicking) */}
//             <input type="file" multiple onChange={handleFileInputChange} style={{ display: 'none' }} />
            
//             {/* Drag-and-drop area */}
//             <div
//                 onDragOver={handleDragOver}
//                 onDrop={handleDrop}
//                 style={{
//                     width: '300px',
//                     height: '200px',
//                     border: '2px dashed #cccccc',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     color: '#aaaaaa',
//                     marginBottom: '10px'
//                 }}
//             >
//                 Drag & Drop images here or click to select files
//             </div>

//             {/* Render image previews */}
//             <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
//                 {imagesList.map((image, index) => (
//                     <img
//                         key={index}
//                         src={image}
//                         alt={`Uploaded ${index}`}
//                         style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '5px' }}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Images;

// import React, { useState } from 'react';

// const Images = () => {
//     const [imagesList, setImagesList] = useState([]);

//     const handleImage = files => {
//         const filesArray = Array.from(files).map(file => URL.createObjectURL(file));
//         setImagesList(prevImages => prevImages.concat(filesArray));
//     };

//     const handleFileInputChange = event => {
//         if (event.target.files) {
//             handleImage(event.target.files);
//         }
//     };

//     const handleDragOver = event => {
//         event.preventDefault();
//         event.stopPropagation();
//     };

//     const handleDrop = event => {
//         event.preventDefault();
//         event.stopPropagation();
//         if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
//             handleImage(event.dataTransfer.files);
//             event.dataTransfer.clearData();
//         }
//     };

//     return (
//         <div>
//             {/* File input (visible for browse files option) */}
//             <input
//                 type="file"
//                 multiple
//                 onChange={handleFileInputChange}
//                 style={{ display: 'none' }}  // Hide file input but allow user to click anywhere
//                 id="fileInput"
//             />
            
//             {/* Drag-and-drop area with browse files option */}
//             <div
//                 onDragOver={handleDragOver}
//                 onDrop={handleDrop}
//                 style={{
//                     width: '300px',
//                     height: '200px',
//                     border: '2px dashed #cccccc',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     color: '#aaaaaa',
//                     marginBottom: '10px',
//                     position: 'relative',  // Allowing file input to be accessible over the area
//                     cursor: 'pointer', // Change cursor to pointer to indicate it's clickable
//                 }}
//                 onClick={() => document.getElementById('fileInput').click()}  // Trigger file input on click
//             >
//                 Drag & Drop images here or <span style={{ color: '#007bff' }}>Browse</span>
//             </div>

//             {/* Render image previews */}
//             <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
//                 {imagesList.map((image, index) => (
//                     <img
//                         key={index}
//                         src={image}
//                         alt={`Uploaded ${index}`}
//                         style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '5px' }}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Images;
import "./images.css"
import React, { useState } from 'react';

const Images = () => {
    const [imagesList, setImagesList] = useState([]);

    const handleImage = files => {
        const filesArray = Array.from(files).map(file => URL.createObjectURL(file));
        setImagesList(prevImages => prevImages.concat(filesArray));
    };

    const handleFileInputChange = event => {
        if (event.target.files) {
            handleImage(event.target.files);
        }
    };

    const handleDragOver = event => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDrop = event => {
        event.preventDefault();
        event.stopPropagation();
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            handleImage(event.dataTransfer.files);
            event.dataTransfer.clearData();
        }
    };

    return (
        <div className="container">
            {/* Hidden File Input */}
            <h1>This is a Upload Images App</h1>
            <input
                type="file"
                multiple
                onChange={handleFileInputChange}
                style={{ display: 'none' }}
                id="fileInput"
            />

            {/* Drag-and-drop area with clickable functionality */}
            <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="drag-drop-area"
                onClick={() => document.getElementById('fileInput').click()}
            >
                <p>Drag & Drop images here or <span className="browse-text">Browse</span></p>
            </div>

            {/* Render image previews */}
            <div className="image-previews">
                {imagesList.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Uploaded ${index}`}
                        className="image-preview"
                    />
                ))}
            </div>
        </div>
    );
};

export default Images;


