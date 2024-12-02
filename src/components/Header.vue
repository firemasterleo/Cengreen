<template>
    <div class="pagecontent">
        <div class="presection">
            <div class="section1">

                <header class="header">
                    <div class="logo">
                        <img src="../assets/logo2.png" loading="lazy" alt="">                    
                    </div>
                    <nav class="navbar">
                        <ul class="nav-links">
                            <li class="nav-item"  popovertarget="my-popover">
                                <p>Services</p>
                                <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='14' height='14'><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                           
                                
                                
                            </li>
                            <!-- <div class="popover" popover id="my-popover">
                                 More info about us.
                            </div> -->
                            <li class="nav-item">
                                <p>For Business</p>
                                <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='14' height='14'><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
    
                            </li>
                            <div class="nav-item">
                                <p>Careers</p>
                            </div>
                            <div class="nav-item">
                                <p>Community</p>
                            </div>
                            <div class="nav-item">
                                <p>About us</p>
                            </div>
                            <div class="nav-item">
                                <p>FAQs</p>
                            </div>
                        </ul>
                    </nav>
                    <div class="lang">

                    </div>
                    <div class="rescueme">
                     <img src="../assets/rescueme.png" loading="lazy" alt="">                    
                        <p>Rescue me!</p>
                    </div>
                    <div class="download">
                        <button>Download app</button>
                    </div>
                </header>


            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
 .pagecontent {
            // border: solid red;
            width: 100%;
            height: fit-content;
            overflow-x: hidden ;
            display: flex;
            
            // flex-direction: column;
            // align-items: center;
            // padding-left: 4rem;
            position: fixed;
            top: 2.5rem;
            z-index: 100;

            .presection {
                // background-color: rgb(118, 118, 205);
                // border: yellow solid;
                width: 100%;

                display: flex;
                // flex-direction: column;
                overflow: hidden;

                
                .section1 {      
                    margin-inline: auto;
                    // border: solid green;
                    width: 80rem;
                    height: 100%;
                   padding-inline: 1rem  ;
                   overflow: hidden;
                   display: flex;
                   flex-direction: column;
                   align-items: center;

            .header {
                // border: solid red;
                width: 62rem;
                background-color: rgba(23, 20, 20, 0.607); /* Example translucency */
                background-color: #23262276;
                backdrop-filter: blur(17px);
                height: 4rem;
                border-radius: 2rem;
                padding-left: 2rem;
                // position: sticky;
                top: 0rem;
                display: flex;
                gap: 0.5rem;
                // justify-content: space-between;
                align-items: center;

                .logo{
                            border-right: solid 2px #7cae65;
                            // border: solid red;
                            padding-right: 1rem;

                            img {
                                height: 1.8rem;
                                width: auto;

                            }
                            

                        }
                        .navbar {
                            // border: solid red;


                            .nav-links {
                                display: flex;
                                gap: 1rem;
                                width: 30rem;
                                min-width: fit-content;
                                overflow: hidden;

                                .popover {
                                    padding: 1rem;
                                    border: 1px solid #ccc;
                                    background-color: #fff;
                                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                                    border-radius: 4px;
                                    width: 150px;
                                    border: solid white;
                                    height:50px;
                                    }
                                .nav-item {
                                    flex-shrink: 0;
                                    position: relative;
                                    // border : solid black;
                                    // padding-inline: 0.2rem;
                                    p {
                                        font-size: 12px;
                                        letter-spacing: 1px;
                                        font-family: "Poppins", serif;
                                        cursor: pointer;
    
                                    }
                                }
                                :nth-child(1),:nth-child(2) {
                                    display: flex;
                                    justify-content: center;
                                    // align-items: center;
                                    // border: solid;
                                    padding-right: 0rem;
    
                                    svg {
                                        // border: solid black;
                                        margin-top: 3px;
                                        // position: relative;
                                        fill: white;
                                    }
                                }
                            }
                            
                        }
                        .lang {
                            width: 2.8rem;
                        }
                        .rescueme {
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                            cursor: pointer;
                            margin-right: 0.5rem;


                            img {
                                height: 1.5rem;
                                width: auto;
                            }
                            p {
                                color: #b3242f;
                                font-weight: 600;
                                font-size: 14px;
                            }


                        }
                        .rescueme:hover {
                            p {
                                color: #cd4b56;
                                font-weight: 600;
                            }

                        }
                        .download {
                            // border: solid black;
                            // padding-left: 1rem;
                            
                            button {
                             
                                font-family: "Poppins", serif;
                                font-size: 13px;
                                font-weight: 600;
                                height: 3rem;
                                padding-inline: 1.2rem;
                                border-radius: 1.5rem;
                                border: none;
                                background: linear-gradient(109.5deg, rgb(72, 203, 217) 11.2%, rgb(135, 218, 149) 91.1%);
                                color: rgb(255, 255, 255);
                                  margin-left: 1rem;

                                cursor: pointer;
                                
                            }
                            button:hover {
                            background: #fdfffc;
                            color: rgb(0, 0, 0);

                            }



        
            
            
                        }

            }
            
                    
                }

 }
            
    }

</style>