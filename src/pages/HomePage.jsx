import React from 'react';

const HomePage = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/imgs/background.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
            }}
        >
            <div className="page-header flex">
                <div className="logo">
                    <img className="h-[200px] w-[200px]" src={process.env.PUBLIC_URL + '/imgs/logo.jpg'} alt="background" />
                </div>
                <div className="w-full text-center text-white">
                    <h1 className="text-90 ">AI AIRLINES</h1>
                    <h3 className="text-50 text-yellow-10">ĐÚNG - ĐỦ - ĐỀU</h3>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
