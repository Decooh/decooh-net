// import { createGlobalStyle } from 'styled-components';

function CssDefault() {

    return <style jsx global>{`
    
        @-webkit-keyframes fadeInDown { 0% { opacity: 0; -webkit-transform: translateY(-20px); } 100% { opacity: 1; -webkit-transform: translateY(0); }}
        @keyframes fadeInDown {  0% { opacity: 0; transform: translateY(-20px); } 100% { opacity: 1; transform: translateY(0); } }

        @-webkit-keyframes bounceInLeft { 0% { opacity: 0; -webkit-transform: translateX(-2000px);  } 60% { opacity: 1; -webkit-transform: translateX(30px); } 80% { -webkit-transform: translateX(-10px); } 100% { -webkit-transform: translateX(0); } }
        @keyframes bounceInLeft { 0% { opacity: 0; transform: translateX(-2000px); }  60% { opacity: 1; transform: translateX(30px); } 80% { transform: translateX(-10px); } 100% { transform: translateX(0); } }

        @-webkit-keyframes bounceInRight { 0% { opacity: 0; -webkit-transform: translateX(2000px); } 60% { opacity: 1; -webkit-transform: translateX(-30px); } 80% { -webkit-transform: translateX(10px); } 100% { -webkit-transform: translateX(0); } }
        @keyframes bounceInRight { 0% { opacity: 0; transform: translateX(2000px); } 60% {  opacity: 1; transform: translateX(-30px); } 80% { transform: translateX(10px); } 100% { transform: translateX(0); } }

        @-webkit-keyframes fadeInRight { 0% { opacity: 0; -webkit-transform: translateX(20px); } 100% { opacity: 1; -webkit-transform: translateX(0); } }
        @keyframes fadeInRight { 0% { opacity: 0; transform: translateX(20px);} 100% { opacity: 1; transform: translateX(0); } }

        @-webkit-keyframes fadeInLeft { 0% { opacity: 0; -webkit-transform: translateX(-20px); } 100% { opacity: 1; -webkit-transform: translateX(0); } }
        @keyframes fadeInLeft { 0% { opacity: 0; transform: translateX(-20px); } 100% { opacity: 1; transform: translateX(0); } }

        @-webkit-keyframes fadeOutLeft { 0% { opacity: 1; -webkit-transform: translateX(0); } 100% {  opacity: 0; -webkit-transform: translateX(-20px); } }
        @keyframes fadeOutLeft { 0% { opacity: 1; transform: translateX(0); } 100% { opacity: 0; transform: translateX(-20px); } }

        @-webkit-keyframes fadeOutRight { 0% { opacity: 1; -webkit-transform: translateX(0); } 100% { opacity: 0; -webkit-transform: translateX(20px); } }
        @keyframes fadeOutRight { 0% { opacity: 1; transform: translateX(0); } 100% { opacity: 0; transform: translateX(20px); } }

        .fadeInLeft { -webkit-animation-name: fadeInLeft; animation-name: fadeInLeft; }
        .fadeInRight { -webkit-animation-name: fadeInRight; animation-name: fadeInRight; }
        .bounceInRight { -webkit-animation-name: bounceInRight; animation-name: bounceInRight; }
        .bounceInLeft { -webkit-animation-name: bounceInLeft; animation-name: bounceInLeft; }
        .fadeInDown { -webkit-animation-name: fadeInDown; animation-name: fadeInDown; }
        .fadeOutLeft { -webkit-animation-name: fadeOutLeft; animation-name: fadeOutLeft; }
        .fadeOutRight {-webkit-animation-name: fadeOutRight; animation-name: fadeOutRight; }

        .speed0 { -webkit-animation-duration: .25s; animation-duration: .25s; -webkit-animation-fill-mode: both; animation-fill-mode: both; }
        .speed1 { -webkit-animation-duration: .5s; animation-duration: .5s; -webkit-animation-fill-mode: both; animation-fill-mode: both; }
        .speed2 { -webkit-animation-duration: 1.0s; animation-duration: 1.0s; -webkit-animation-fill-mode: both; animation-fill-mode: both; }
        .speed3 { -webkit-animation-duration: 1.5s; animation-duration: 1.5s; -webkit-animation-fill-mode: both; animation-fill-mode: both; }
        .speed4 { -webkit-animation-duration: 2.0s; animation-duration: 2.0s; -webkit-animation-fill-mode: both; animation-fill-mode: both; }
        .speed5 { -webkit-animation-duration: 2.5s; animation-duration: 2.5s; -webkit-animation-fill-mode: both; animation-fill-mode: both; }

        /* width */
        ::-webkit-scrollbar {
            width: 8px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 10px grey; 
            border-radius: 10px;
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #222; 
            border-radius: 10px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #000; 
        }

        body {
            font-family: "Rubik",sans-serif;
            font-weight: normal;
            font-style: normal;
            background-color: #efefef;
            background-image: url('/images/bg.jpg');
            background-repeat: no-repeat;
            background-position: top center;
            background-size: cover;
            background-attachment: fixed;
            color: #333;
            line-height: 1.5em;
        }

        .show-menu {
            display: block !important;
        }

        #open-menu-mobile {
            display: none;
        }

        #close-menu-mobile {
            display: none;
        }

        #menu {
            background-color: #fff;
            width: 100px;
            height: 100%;
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            box-shadow: 0 12px 20px 0 rgb(0 0 0 / 10%), 0 0 2px 0 rgb(0 0 0 / 12%);
            z-index: 2;
            overflow: auto;
            padding-bottom: 100px;
        }

        #footer {
            background-color: #000;
            color: #ccc;
            width: 100%;
            display: block;
            position: fixed;
            bottom: 0;
            left: 0;
            padding: 20px;
            z-index: 3;
        }

        .rounded-img {
            border-radius: 100%;
            object-fit: cover;
            box-shadow: 1px 2px 10px #c3c3c3;
            border: 3px solid #fff;
        }

        .text-red { color: red; }

        .content {
            margin-left: 135px;
            margin-top: 20px;
            margin-right: 20px;
            margin-bottom: 135px;
            max-width: 800px;
        }

        #menu-list li {
            margin: 30px 0px 30px 0px;
            width: 100%;
            font-size: 14px;
        }

        #menu-list li a {
            color: #666;
            text-decoration: none
        }

        #menu-list li a:hover {
            color: #333;
        }

        #profile-info {
            //padding: 25px;
            padding: 10px;
        }

        // #menu:hover {
        //     transform: translateX(-200px);
        // }

        @media screen and (max-width: 500px) {

            #menu {
                display: none;
            }

            #close-menu-mobile {
                background-color: #fff;
                width: 40px;
                height: 40px;
                box-shadow: 1px 2px 3px #ccc;
                border-radius: 100%;
                justify-content: center;
                align-items: center;
                display: flex;
                font-size: 25px;
                margin: 10px 0px 25px 0px;
            }

            #open-menu-mobile {
                color: #333;
                text-decoration: none;
                background-color: #fff;
                width: 40px;
                height: 40px;
                position: fixed;
                top: 5px;
                left: 5px;
                box-shadow: 1px 2px 3px #ccc;
                border-radius: 100%;
                justify-content: center;
                align-items: center;
                display: flex;
            }

            .content {
                margin-left: 50px;
            }

        }

    `}</style>

}

export default CssDefault;