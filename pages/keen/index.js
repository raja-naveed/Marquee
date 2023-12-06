import Marquee from 'react-double-marquee';

export default function FooComponent() {
    return (
        <div
            style={{
                width: '200px',
                whiteSpace: 'nowrap',
            }}
        >
            <Marquee direction="up" >
                <div className="image_wrapper mx-auto my-2">
                    <img src={"/images/one.png"} alt="" className="" />
                </div>
                <div className="image_wrapper mx-auto my-2">
                    <img src={"/images/two.png"} alt="" className="" />
                </div>
                <div className="image_wrapper mx-auto my-2">
                    <img src={"/images/three.png"} alt="" className="" />
                </div>
                <div className="image_wrapper mx-auto my-2">
                    <img src={"/images/four.png"} alt="" className="" />
                </div>
                <div>
                    <img src={"/images/five.png"} alt="" className="" />
                </div>
                <div className="image_wrapper mx-auto my-2">

                    <img src={"/images/six.png"} alt="" className="" />
                </div>
                <div className="image_wrapper mx-auto my-2">

                    <img src={"/images/seven.png"} alt="" className="" />
                </div>
                <div className="image_wrapper mx-auto my-2">

                    <img src={"/images/eight.png"} alt="" className="" />
                </div>
                <div className="image_wrapper mx-auto my-2">

                    <img src={"/images/nine.png"} alt="" className="" />
                </div>
                <div className="image_wrapper mx-auto my-2">

                    <img src={"/images/ten.png"} alt="" className="" />
                </div>
            </Marquee>
        </div>
    );
}