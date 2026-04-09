import React from 'react'
import LeftSection from './LeftSection';
import RightSection from "./RightSection";
import ProductHero from "./ProductHero";
import Universe from "./Universe";

function ProductPage() {
    return (
        <>
            <ProductHero />
            <LeftSection
                imageURL="media/images/kite.png"
                productName="StockEra Web"
                productDescription="A simple and fast web-based trading platform designed for beginners. It allows users to explore stocks, view basic charts, and understand how trading works in a clean and easy interface. Built for learning and smooth user experience."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />

            <RightSection
                imageURL="media/images/console.png"
                productName="StockEra Dashboard"
                productDescription="A central dashboard to track your investments and activity in one place. It provides simple insights, basic reports, and easy-to-understand data to help users learn how to manage their portfolio."
                tryDemo=""
            />

            <LeftSection
                imageURL="media/images/coin.png"
                productName="StockEra Funds"
                productDescription="A beginner-friendly section to explore and learn about mutual funds. Users can understand how fund investments work with a simple and clean interface designed for learning purposes."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />

            <RightSection
                imageURL="media/images/kiteconnect.png"
                productName="StockEra API"
                productDescription="A basic API concept created for learning how trading platforms connect with external applications. It demonstrates how developers can build simple features and integrate services."
                tryDemo=""
            />

            <LeftSection
                imageURL="media/images/varsity.png"
                productName="StockEra Learn"
                productDescription="An easy-to-understand learning section that explains stock market basics in simple language. Content is divided into small parts to help beginners learn step by step."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />
            <Universe />
        </>
    );
}

export default ProductPage;