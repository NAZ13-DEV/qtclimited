import React from "react";
import hall from '../../img/565 2hall.png'

const AboutUs = () => {
    return (
        <div className="px-12 py-12">
            <div className="grid mt-64 mb-16 text-center place-content-center">
                <h1>ABOUT US</h1>
                <h3>LEARN MORE ABOUT US </h3>
            </div>

            <div className="flex flex-column lg:flex-row">
                <div className="">
                    <img src={hall} alt="" className=""/>
                </div>
                <div className="">

                    <p>Welcome to QTC EVENTS/RENTALS, a premier event planning company that has been turning dreams into reality since 2013. With over a decade of experience, we have successfully delivered more than 1,000 unforgettable events, each meticulously crafted to bring joy and lasting memories to our clients. Our passion for excellence and attention to detail have made us a trusted name in the industry.</p>
                </div>
            </div>




        </div>
    );
};

export default AboutUs;
