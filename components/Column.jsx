import React from 'react';

const Column = () => {
    return (
        <div
            // style={{ width: '200px', height: '700px' }}
        >
            <div className="image_wrapper mx-auto my-2">
                <img src={"/images/one.png"} alt="" className="h-[40px]" />
            </div>
            <div className="image_wrapper mx-auto my-2">
                <img src={"/images/two.png"} alt="" className="h-[40px]" />
            </div>
            <div className="image_wrapper mx-auto my-2">
                <img src={"/images/three.png"} alt="" className="h-[40px]" />
            </div>
            <div className="image_wrapper mx-auto my-2">
                <img src={"/images/four.png"} alt="" className="h-[40px]" />
            </div>
            <div>
                <img src={"/images/five.png"} alt="" className="h-[40px]" />
            </div>
            <div className="image_wrapper mx-auto my-2">

                <img src={"/images/six.png"} alt="" className="h-[40px]" />
            </div>
            <div className="image_wrapper mx-auto my-2">

                <img src={"/images/seven.png"} alt="" className="h-[40px]" />
            </div>
            <div className="image_wrapper mx-auto my-2">

                <img src={"/images/eight.png"} alt="" className="h-[40px]" />
            </div>
            <div className="image_wrapper mx-auto my-2">

                <img src={"/images/nine.png"} alt="" className="h-[40px]" />
            </div>
            <div className="image_wrapper mx-auto my-2">

                <img src={"/images/ten.png"} alt="" className="h-[40px]" />
            </div>
        </div>
    )
};

export default Column;
