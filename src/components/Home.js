import React from 'react';
import '../css/Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="home-image"
                />

                <div className="home__row">
                    <Product
                    id="12321341" 
                    title='Acer Chromebook Spin 311 Convertible Laptop, Intel Celeron N4020, 11.6" HD Touch, 4GB LPDDR4, 32GB eMMC, Gigabit Wi-Fi 5, Bluetooth 5.0, Google Chrome, CP311-2H-C679'
                    price={248.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/41Uqi+l3EiL.jpg"
                    rating={4}
                    />
                    <Product 
                    id="12321342" 
                    title='Amazon Basics Lightweight Super Soft Easy Care Microfiber Sheet Set with 14" Deep Pockets, Queen, Dark Grey'
                    price={19.99}
                    image="https://m.media-amazon.com/images/I/71UiEEAk0aL._AC_UL640_FMwebp_QL65_.jpg"
                    rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                    id="49538094"
                    title="Amazon Basics 30% Recycled Multipurpose Copy Printer Paper - 8.5 x 11 Inches, 3 Ream Case (1500 Sheets)"
                    price={19.99}
                    image="https://m.media-amazon.com/images/I/71hPjliac6S._AC_UL640_FMwebp_QL65_.jpg"
                    rating={5}
                    />
                    <Product
                    id="34674573" 
                    title="Amazon Basics USB 2.0 A-Male to Micro B Cable - 3-Foot, Black, 5-Pack"
                    price={17.99}
                    image="https://m.media-amazon.com/images/I/71AB2RWLveL._AC_UL640_FMwebp_QL65_.jpg"
                    rating={4}
                    />
                    <Product
                    id="45679805" 
                    title="Amazon Basics 48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
                    price={14.99}
                    image="https://m.media-amazon.com/images/I/71IdKRlm8+L._AC_UL640_FMwebp_QL65_.jpg"
                    rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                    id="07885663" 
                    title="Power Strip with 6 Feet, Yintar Surge Protector with 6 AC Outlets and 3 USB Ports, 6 Ft Extension Cord for for Home, Office, Dorm Essentials, 2100 Joules, ETL Listed, (Black)"
                    price={14.97}
                    image="https://m.media-amazon.com/images/I/71qE6chtx+L._AC_UL640_FMwebp_QL65_.jpg"
                    rating={4}/>
                </div>
				<div className="home__row">
				<Product
                    id="07841235" 
                    title="Monocular Telescope - 12X50 Professional Portable Waterproof Monocular with Smartphone Adapter, HD Super Zoom BAK4 Monocular for Adults Kids for Bird Watching, Camping, Hiking"
                    price={41.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71LMuFAWbRL._AC_UL675_SR675,480_.jpg"
                    rating={2}/>
                    <Product
                    id="078832567" 
                    title="Wyze Cam Spotlight, Wyze Cam v3 Security Camera with Spotlight Kit, 1080p HD Security Camera with Two-Way Audio and Siren, IP65 Weatherproof, Compatible with Alexa and Google Assistant"
                    price={47.80}
                    image="https://images-na.ssl-images-amazon.com/images/I/61E8RWSXtoS._AC_UL675_SR675,480_.jpg"
                    rating={5}/>
                    <Product
                    id="05342667" 
                    title="Interior Car Lights Keepsmile Car Accessories Car Led Lights APP Control with Remote Music Sync Color Change RGB Under Dash Car Lighting with Car Charger 12V 2A LED Lights for Car (RGB)"
                    price={14.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/716rOtQsgjS._AC_UL675_SR675,480_.jpg"
                    rating={3}/>
				</div>
            </div>
        </div>
    )
}

export default Home
