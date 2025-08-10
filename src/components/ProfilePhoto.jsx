import React, { useState } from "react";
import Cropper from "react-easy-crop";

const ProfilePhoto = () => {
    const [image, setImage] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);  
    const [croppedArea, setCroppedArea] = useState(null);

    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
        setCroppedArea(croppedAreaPixels);
    }


    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

  return (
    <div>
      <input type="file" accept ="image/*" onChange={handleImageUpload} />"
      {image && (
        <div className="relative w-64 h-64 bg-gray-200">
            <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            >

            </Cropper>
        </div>
      )}
    </div>
  )
}

export default ProfilePhoto
