<template>
    <div class="footer">
        <div class="left-container">
            <div class="logo">
                <img src="../assets/logo2.png" loading="lazy" alt="">                    


            </div>
            <div class="badges">
                <div class="googleplaybadge">
                    <img src="../assets/googleplaybadge2.png" loading="lazy" alt="">                    

                </div>
                <div class="applestorebadge">
                    <img src="../assets/appstorebadge2.png" loading="lazy" alt="">                    

                </div>

            </div>
            
        </div>
        <div class="right-container">
            <ul class="nav-links-1">
                <li class="nav-item">
                    <p>About us </p>
                </li>
                <li class="nav-item">
                    <p>Fleet Services </p>
                </li>
                <li class="nav-item">
                    <p>Partnerships</p>
                </li>
                <li class="nav-item">
                    <p>Community</p>
                </li>
                <li class="nav-item">
                    <p>Careers </p>
                </li>
            </ul>
            <ul class="nav-links-2">
                <li class="nav-item">
                    <p>Fuel Delivery </p>
                </li>
                <li class="nav-item">
                    <p>Car wash </p>
                </li>
                <li class="nav-item">
                    <p>Car Battery </p>
                </li>
                <li class="nav-item">
                    <p>Car Tyres </p>
                </li>
                <li class="nav-item">
                    <p>Car Engine Oil </p>
                </li>
                <li class="nav-item">
                    <p>Rescue </p>
                </li>
            </ul>
            <ul class="nav-links-3">
                <li class="nav-item">
                    <p>FAQ</p>
                </li>
                <li class="nav-item">
                    <p>800 692238</p>
                </li>
                <li class="nav-item">
                    <p>WhatsApp</p>
                </li>
                <li class="nav-item">
                    <p>EN</p>
                </li>
                <li class="nav-item">
                    <p>UAE</p>
                </li>
  
            </ul>

        </div>
    </div>

</template>

<style lang="scss" scoped>

    .footer {
        background-color: #111315;
        width: 100%;
        height: 27rem;
        position: relative;
        z-index: 1;
        margin-inline: auto;
        display: flex;
        padding-top: 4rem;
        // justify-content: space-between;    

        .left-container {
                // border: solid red;
                width: 50%;
                height: 100%;
                padding-left: 3.5rem;
                .logo {
                    margin-bottom: 1rem;
                }

                .badges {
                    display: flex;
                    gap: 1rem;
                    .googleplaybadge {
                        width: 10rem;
                        // height: 4rem;
                        // border: solid red;
                        img {
                            width: 100%;
                            // heght: 100%;
                        }
                    }
                    .applestorebadge {
                        width: 10rem;
                        img {
                            width: 100%;

                        }
                    }
                }
            }

            .right-container {
                // border: solid red;
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: right;
                padding-right: 6rem;
                gap: 8rem;
                font-size: 13px;
                font-weight: 400;
                color: #7e848a;
                ul {
                    li {
                        margin-bottom: 1rem;
                        cursor: pointer;
                        transition: all 0.2s ease-in

                    }
                    li:hover {
                        color: #e0e1e3;
                        transition: all 0.1s ease-in
                    }
                    
                }
                :nth-child(2){
                    :nth-child(6) {
                        color: red;
                    }
                }
            }
  
    }

</style>