import React from 'react';
import Navbar from '../molecules/Navbar';
import ButtonMobile from '../atoms/ButtonMobile';

type LayoutsProps = {
    children: React.ReactNode;
};

const Layouts: React.FC<LayoutsProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <ButtonMobile />
            {children}
        </>
    );
};

export default Layouts;