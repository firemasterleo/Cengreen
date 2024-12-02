<template>
    <div class="body">
        <div class="section1container">
            <div class="herosection">
                <img class="hero-img" src="../assets/cengreenpic2.jpg" loading="lazy" alt="">   
                <div class="veil">

                </div>
                <div class="herotext">
                    <h1 class="toptext">The all in one app for</h1>
                    <div class="textsequence">
                        <div class="box fuel">fuel delivery</div>
                        <div class="box cng">CNG delivery</div>
                        <div class="box emergency">emergency rescue</div>
                        <div class="box oil">oil change</div>
                        <div class="box battery">battery replacement</div>
                    </div>
                    <div class="qrcode">
                            <img src="../assets/qr (2).png" loading="lazy" alt="">   
                            <p>scan to download</p>
                    </div>
                </div>

            </div>
        </div>
        <div class="section2container"> 
            <div class="section2">
                <div class="veil"></div>
                <div class="carousel-container">

                    <!-- Buttons Section -->
                    <div class="carousel-buttons">
                        <div
                            class="carousel-button"
                            v-for="(button, index) in buttons"
                            :key="index"
                            @click="setActive(index)"
                            :class="{ active: activeIndex === index }"
                            >
                            <!-- Image inside the button -->
                            <img :src="button.image" :alt="'Image for ' + button.text" class="button-image" />
                            <!-- Text for the button -->
                            <div class="button-text">{{ button.text }}</div>

                        </div>
                    </div>

                    <!-- Carousel Content Section -->
                    <div class="carousel-content">

                        <div
                            class="carousel-tile"
                            v-for="(tile, index) in tiles"
                            :key="index"
                            :class="['carousel-tile', { visible: activeIndex === index }, `tile-${index}`]"
                        >      
                            <div class="tile-content-left">
                                <h2>{{ tile.title }}</h2>
                                <p>{{ tile.description }}</p>
                                <!-- Button inside the tile -->
                                <button
                                v-if="tile.buttonText"
                                @click="handleTileButtonClick(index)"
                                class="tile-button"
                                >
                                {{ tile.buttonText }}
                            </button>
                        </div>
                        <div class="tile-image-right">
                            <img v-if="tile.image" :src="tile.image" :alt="fuel" />
                        </div>
                        </div>
                    </div>
                </div>

            </div>         
        </div>  
        <div class="section3container">
            <div class="section3">
                <div class="section3veil"></div>
                <div class="left-section">
                    <!-- <div class="section3image">
                        <img src="../assets/fuelpic.jpg" loading="lazy" alt="">        
                        
                    </div> -->
                    <div class="mockupimage">
                        <img src="../assets/mockupnew.png" loading="lazy" alt="">        

                    </div>

                </div>
                <div class="right-section">
                    <h2>The everything app for your car</h2>
                    <p class="rightsectiontext">Fuel delivery, car wash, servicing and more – just tap and we’ll roll to wherever you are. I mean, who still goes to the petrol station or the garage for vehicle services anymore? It’s 2024 – where CENGREEN comes to you.</p>
                    <div class="qrcode2">
                            <img src="../assets/qr (2).png" loading="lazy" alt="">   
                            <p class="qrtext">scan to download</p>
                    </div>

                </div>
               
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

 .body {
    background-color: black;
    // border: solid red;
    width: 100%;
    height: fit-content;
    overflow-x: hidden ;

    .section1container {
        // border: yellow solid;
        background-color: rgb(118, 118, 205);
        height: 130vh;
        width: 100%;
        display: flex; //you need this to make fixed with children responsive
        // position: relative;
        // z-index: 1;
        
        .herosection {      
            // border: solid blue;
            background-color: #232323; 
            margin-inline: auto;
            width: 100%;
            height: 100%;
            justify-content: center;
            position: relative;
            z-index: 0;
            // overflow: hidden;
            .hero-img {
                // border: solid red;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center 0%;
                position: absolute;
                // top: 0rem;

            }

            .veil {
            // border: solid yellow;
            // background-color: rgba(0, 0, 0, 0.893);
            background: linear-gradient(
                to top,
                rgb(0, 0, 0), /* Least transparent at the top */
                rgba(0, 0, 0, 0.708)  /* 0.854 Darker and less transparent at the bottom */
            );
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            z-index: 1;
            }

            .herotext {
            // border: solid blue;
            width: 100%;
            height: fit-content;
            position: relative;
            top: 14.2rem;
            z-index: 2;
            background: linear-gradient(to left, #7cae65, #ffffff);
            background-clip: text;
            -webkit-background-clip: text;
            
            
            .toptext {
                // border: solid red;
                -webkit-text-fill-color: transparent;
                text-align: center;
                font-size: 64px;
                font-weight: 700;

                line-height: 7rem;
                font-family: "Poppins", serif;
            }

            .textsequence {
                // border: solid red;
                width: 100%;
                margin: auto;
                background: linear-gradient(to left, #7cae65, #ffffff);
                background-clip: text;
                -webkit-background-clip: text;
                position: relative;
                
            
        
                .box {
                    background: linear-gradient(to left, #7cae65, #ffffff);
                background-clip: text;
                -webkit-background-clip: text;
                    // border: solid blue;
                    -webkit-text-fill-color: transparent;
                    text-align: center;
                    font-size: 64px;
                    font-family: "Poppins", serif;
                    font-weight: 700;
                    line-height: 7rem;
                    opacity: 0;  //secret ingredient for text transition
                    position: absolute;
                    width: 100%;
            
                    
                }
                .fuel {
                    animation: ani1 10s infinite;
                }
                .cng {
                    animation: ani2 10s infinite;
                }
                .emergency {
                    animation: ani3 10s infinite;
                }
                .oil {
                    animation: ani4 10s infinite;
                }
                .battery {
                    animation: ani5 10s infinite;
                }

                @keyframes ani1 {
                    0%{
                        opacity: 0;
                        transform: translateY(3px); /* Slide up from below */
                        
                    }
                    20%{
                        opacity: 1;
                        transform: translateY(0); /* Reset position */

                    }
                    25% {
                        opacity: 0;
                        transform: translateY(-3px); /* Slide up from below */

                    }
                }
                @keyframes ani2 {
                    20%{
                        opacity: 0;
                        transform: translateY(3px); /* Slide up from below */

                    }
                    40%{
                        opacity: 1;
                        transform: translateY(0px); /* Slide up from below */

                    }
                    45% {
                        opacity: 0;
                        transform: translateY(-3px); /* Slide up from below */

                    }
                }
                @keyframes ani3 {
                    40%{
                        opacity: 0;
                        transform: translateY(3px); /* Slide up from below */

                    }
                    60%{
                        opacity: 1;
                        transform: translateY(0px); /* Slide up from below */

                    }
                    65% {
                        opacity: 0;
                        transform: translateY(-3px); /* Slide up from below */

                    }
                }
                @keyframes ani4 {
                    60%{
                        opacity: 0;
                        transform: translateY(3px); /* Slide up from below */

                    }
                    80%{
                        opacity: 1;
                        transform: translateY(0px); /* Slide up from below */

                    }
                    85% {
                        opacity: 0;
                        transform: translateY(-3px); /* Slide up from below */

                    }
                }
                @keyframes ani5 {
                    80%{
                        opacity: 0;
                        transform: translateY(3px); /* Slide up from below */

                    }
                    99%{
                        opacity: 1;
                        transform: translateY(0px); /* Slide up from below */

                    }
                    100% {
                        opacity: 0;
                        transform: translateY(-3px); /* Slide up from below */

                    }
                }
            }
    
            .qrcode {
            
                border: none;
                margin-top: 8.5rem;
                padding-top: 0.5rem;
                padding-left: 0.5rem;
                padding-right: 1rem;
                padding-bottom: 0.5rem;
                border-radius: 1rem;
                position: relative;
                background-color: #232323;
                width: fit-content;
                height: fit-content;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                margin-inline: auto;
                transition: all 0.4s ease-out;
                cursor: pointer;


            
                    img {
                        width: 4.5rem;
                        height:4.5rem;
                        background-color: #7cae65;
                    }
                p {
                font-family: "Poppins", serif;
                font-size: 14px;
                border: none;
                // text-align: center;
                // padding-block: 2px;
                }
            }
            .qrcode:hover {
                scale: 114%;
                transition: all 0.5s ease-out;
            }
            }


        }

    }
    .section2container {
        // border: yellow solid;
        background-color: rgb(118, 118, 205);
        height: fit-content;
        width: 100%;
        display: flex;
        // overflow-x: hidden;
        // overflow-y: auto;
        // margin-top: 7rem;

        .section2 {
            // border: solid green;
      
            background: radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%);                    
            // background: green;
            width: 80rem;
            width: 100%;
            // height: 45rem;
            position: relative;
            z-index: 0;
            // top: -7rem;
            margin-inline: auto;
            // overflow-x: hidden;
            // overflow-y: auto;

            .veil {
                // border: solid red;
                position: absolute;
                z-index: 1;
                height: 100%;
                width: 100%;
                background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.945), /* Least transparent at the top */
                rgb(0, 0, 0)  /* Darker and less transparent at the bottom */
            );
            }

            .carousel-container {
                // border: solid green;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                // border: solid blue;
                position: relative;
                z-index: 2;
                height: fit-content;
                margin-top: -10rem;
                overflow-y: auto;

                .carousel-buttons {
                    // border: solid;
                    display: flex;
                    justify-content: center;
                    margin-bottom: 20px;
                    gap: 1rem;

                    .carousel-button {
                        // border: solid;
                    width: 8.5rem;
                    height: 9.5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    // background-color: #333;
                    color: white;
                    position: relative;
                    border-radius: 1.3rem;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                    font-size: 14px;
                    img {
                        width: 7rem;
                        // mix-blend-mode: color-burn;

                    }


                    &.active {
                        background-color: rgba(26, 26, 26, 0.644); /* Highlight active button with green */
                    }

                    &:not(.active):hover {
                        background-color: #11101092; /* Slight hover effect */
                    }
                    }
                    .carousel-button:nth-child(1) {
                        // border: solid red;
                        img {
                            width: 5rem;
                        }
                    }
                    .carousel-button:nth-child(2) {
                        // border: solid red;
                        img {
                            width: 4rem;
                        }
                    }

                    .carousel-button:nth-child(3) {
                        // border: solid red;
                        img {
                            width: 5rem;
                        }
                        
                    }
                    .carousel-button:nth-child(4) {
                        // border: solid red;
                        position: relative;
                        img {
                            width: 3.5rem;
                        }
                        .button-text {
                            // border: solid ;
                            // margin-bottom: 2px;
                            position: relative;
                            bottom: 4px;
                    
                        }
                    }
                    .carousel-button:nth-child(6) {
                        // border: solid red;
                        img {
                            width: 5rem;
                        }
                        
                    }

                }

                .carousel-content {
                    // border: solid blue;
                    position: relative;
                    width: 85%;
                    height: 28rem;
                    overflow: hidden;
                    border-radius: 2.5rem;

                    .carousel-tile {
                        // border: solid red;
                        border-radius: 2.5rem;
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        // padding-inline: 5rem;
                        background: linear-gradient(60deg, #137a62 0%, #e6f0ef 45%);
                        // backdrop-filter: blur(17px);
                        // padding-top: 4rem;
                        color: rgb(31, 29, 29);
                        font-size: 1.5rem;
                        opacity: 0; /* Make tiles invisible by default */
                        //   z-index: 0; /* Ensure inactive tiles are behind */
                        // transform: translateY(15px);
                        // transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

                        &.visible {
                            display: flex; /* Only show the active tile */
                            opacity: 1; /* Make the active tile visible */
                            gap: 2rem;
                            // animation: fadeIn 0.5s ease-in-out; /* Smooth fade-in animation */
                            // transform: translateY(0);
                        }          
                        .tile-content-left {
                            // border: solid red;
                            width: 50%;
                            padding-left: 6rem;
                            padding-top: 5rem;
                            h2 {
                                line-height: 3rem;
                                margin-bottom: 16px;
                                font-weight: 600;
                                font-size: 38px;
                                
                            }
                            p {
                                font-size: 19px;
                                margin-bottom: 1.5rem;
                                
                            }
                            .tile-button {
                                padding: 10px;
                                border-radius: 10px;
                                border: none;
                                background-color: #232323;
                                color: white;



                            }
                        }
                        .tile-image-right {
                            // border: solid green;
                            width: 50%; 
                            display: flex;
                            img {
                                width: 40%;
                                height: auto;
                                object-fit: cover;
                                margin: auto auto;
                            }

                        }
                    }
                    
                    // .carousel-tile:nth-child(1) {
                    // }
                    .carousel-tile:nth-child(6) {
                        background: linear-gradient(65.3deg, rgb(217, 147, 147) 8.4%, rgb(230, 224, 224) 55%);

                    }
                }

                @keyframes fadeIn {
                    from {
                    opacity: 0;
                    }
                    to {
                    opacity: 1;
                    }
                }
            }   
        }
    }
    .section3container {
        // border: solid blue ;
        background-color: rgb(118, 118, 205);
        // background: radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(29, 27, 27) 90.2%);                    
        height: 60rem;
        width: 100%;
        display: flex;
        overflow: hidden;
        
        .section3 {
            background: radial-gradient(ellipse 25% 30% at 55% 25%, #7cae65, #000000);

            width: 80rem;
            height: 100%;
            margin-block: auto auto;
            position: relative;

            display: flex;
            margin-inline: auto;
            // padding-top: 10rem;

            .section3veil {
                                // border: solid red;
                                position: absolute;
                z-index: 1;
                height: 100%;
                width: 100%;
                background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.945), /* Least transparent at the top */
                rgba(0, 0, 0, 0.358)  /* Darker and less transparent at the bottom */
            );
            }

            .left-section {
                // border: solid red;
                width: 50%;
                height: 100%;
                padding-left: 7rem;
                position: relative;
                margin-top: 15rem;

                .section3image {
                    // border: solid red;
                    width: 31rem;
                    height: 34rem;
                    border-radius: 2rem;
                    position: relative;
                    // z-index: 1;
                    // margin-inline: auto;
                    overflow: hidden;
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;

                    }
                    .veil {
                        position: absolute;
                        top: 0;
                        // border: solid green;
                        width: 100%;
                        height: 100%;
                        z-index: 0;
                        background-color: rgba(0, 0, 0, 0.539);
                    }
                }
                .mockupimage {
                    // border: solid red;
                width: auto;
                height: 40rem;
                position: absolute;
                top: -8rem;
                left: 10rem;
                    z-index: 1;
                    img {

                        height: 100%;
                        width: auto;
                        rotate: -15deg;

                    }

                }
                
            }
            .right-section{
                // border: solid blue;
                width: 50%;
                position: relative;
                z-index: 1;
                padding-right: 3rem;
                padding-top: 5rem;
                background: linear-gradient(to left, #7cae65, #d1dec7);
            background-clip: text;
            -webkit-background-clip: text;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-top: 15rem;


                h2 {
                                line-height: 60px;
                                margin-bottom: 16px;
                                font-weight: 600;
                                font-size: 50px;
                                -webkit-text-fill-color: transparent;
                                
                            }
                            .rightsectiontext {
                                font-size: 19px;
                                margin-bottom: 1.5rem;
                                color: #7e848a;
                                
                            }
                            .qrcode2 {
            border: none;
            // margin-top: 8.5rem;
            padding-top: 0.5rem;
            padding-left: 0.5rem;
            padding-right: 1rem;
            padding-bottom: 0.5rem;
            border-radius: 1rem;
            position: relative;
            background-color: #232323;
            width: fit-content;
            height: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            // margin-inline: auto;
            transition: all 0.4s ease-out;
            cursor: pointer;


        
                img {
                    width: 4.5rem;
                    height:4.5rem;
                    background-color: #7cae65;
                }
            .qrtext {
            font-family: "Poppins", serif;
            font-size: 14px;
            border: none;
            // border: solid red;
            // text-align: center;
            // padding-block: 2px;
            }
        }
        .qrcode:hover {
            scale: 114%;
            transition: all 0.5s ease-out;
        }
        
                
            }

        }

    }
                    
    }

    

</style>

<script setup>
import { ref } from 'vue';

// const buttons = Array(6).fill(null);
// const tiles = Array(6).fill(null);
const activeIndex = ref(0);

const buttons = [
  { 
    image: new URL('../assets/truckpic2.png', import.meta.url).href,  // Vite way to handle image import
    text: 'Fuel'
  },
  { 
    image: new URL('../assets/cng.png', import.meta.url).href,
    text: 'CNG'
  },
  { 
    image: new URL('../assets/tyrespic.png', import.meta.url).href,
    text: 'Tyres'
  },
  { 
    image: new URL('../assets/engineoil.png', import.meta.url).href,
    text: 'Engine Oil'
  },
  { 
    image: new URL('../assets/carbattery.png', import.meta.url).href,
    text: 'Battery'
  },
  { 
    image: new URL('../assets/rescuemepic.png', import.meta.url).href,
    text: 'Rescue me!'
  }
];


// Example tiles content
const tiles = ref([
  {
    title: "24/7 fuel service, at petrol station rates.",
    description: "Enjoy our contactless fuel delivery straight to your car with flexible scheduling. Easy booking, at your convenience!",
    image: new URL('../assets/truckpic2.png', import.meta.url).href,  // Vite way to handle image import
    buttonText: "Discover Fuel Delivery"
  },
  {
    title: "Stay ahead of the world with cheaper, green energy.",
    description: " Eco-friendly fuel solutions for vehicles at your door step in minutes!.",
    image: new URL('../assets/cng.png', import.meta.url).href,
    buttonText: "Discover CNG"
  },
  {
    title: "Tired tyres? Cengreen will upgrade your tread today.",
    description: "Avoid pointless trips to the garage when we can treat your ride to something fresh at your doorstep.",
    image: new URL('../assets/tyrespic.png', import.meta.url).href,
    buttonText: "Discover tyre change"
  },
  {
    title: "Engine oil with free 10-point check",
    description: "Mobile oil change, free 10-point check & original filter replacement. Your car deserves the best.",
    image: new URL('../assets/engineoil.png', import.meta.url).href,
    buttonText: "Discover engine oil"
  },
  {
    title: "Stay charged with our battery change service.",
    description: "Unsure which battery you need? No bother – our specialist technicians will suggest the best boost for you.",
    image: new URL('../assets/carbattery.png', import.meta.url).href,
    buttonText: "Discover Battery Change"
  },
  {
    title: "Stuck at the roadside? No sweat.",
    description: "Ran out of fuel? Got a puncture? Battery died? Need a tow? Just CENGREEN it and we’ll be to you in minutes.",
    image: new URL('../assets/rescuemepic.png', import.meta.url).href,
    buttonText: "Read More"
  }
]);

const handleTileButtonClick = (index) => {
  console.log(`Button clicked on tile ${index + 1}`);
  // Add any additional functionality here
};

const setActive = (index) => {
  activeIndex.value = index;
};


</script>