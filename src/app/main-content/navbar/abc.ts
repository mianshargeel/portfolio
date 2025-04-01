@if (isMobileView) {
    <nav class="mobile-nav">
      <div class="navbar-logo">
        <img src="./../../../assets/img/1-hero/navbar-logo.png" alt="Logo">
        <p>C.Fohrer <br><span>developer</span></p>
      </div>
      <ul class="mobile-menu-list">
        <li><a href="#" (click)="closeMenu()">{{ currentTexts['whyMe'] }}</a></li>
        <li><a href="#skills" (click)="closeMenu()">{{ currentTexts['skills'] }}</a></li>
        <li><a href="#project" (click)="closeMenu()">{{ currentTexts['projects'] }}</a></li>
        <li><a href="#contact" (click)="closeMenu()">{{ currentTexts['contact'] }}</a></li>
      </ul>
      <div class="language-toggle mobile">
        <input type="radio" id="de-mobile" name="language-mobile" class="toggle-btn"
              [checked]="languageService.getCurrentLanguage() === 'de'"
              (click)="switchLanguage('de')">
        <label for="de-mobile" class="toggle-label">DE</label>

        <input type="radio" id="en-mobile" name="language-mobile" class="toggle-btn"
              [checked]="languageService.getCurrentLanguage() === 'en'"
              (click)="switchLanguage('en')">
        <label for="en-mobile" class="toggle-label">EN</label>
      </div>
    </nav>
  }
//-----------------------------------scss--------------------------------
// .mobile-nav {
//   display: none;
// }
// nav{
//   position: absolute;
//   top: -278px;
//   z-index: 1000;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   width: 100%;
//   height: 104px;
//   background-color: #89BCD9;
//   font-family: "Josefin Sans", sans-serif;
//   .desktop-nav{
//     display: block !important;
//   }
//   .navbar-logo{
//     width: 58px;
//     height: 72px;
//     &:hover{
//       cursor: pointer;
//     }
//     p{
//       font-size: 14px;
//       font-family: "Anta", sans-serif;
//       span{
//         font-size: 14px;
//         color: #262e34;
//         font-family: "Josefin Sans", sans-serif;
//       }
//     }
//   }
//   .nav-menu-list{
//       display: none;
//       gap: 50px;
//       a{
//         text-decoration: none;
//         color: black;
//         font-size: 26px;
//         font-weight: 500;
//         &:hover{
//           color: white;
//         }
//       }
//     }
//   // toggle de/en btns
//     .language-toggle {
//       display: flex;
//       // background-color: #91b9d3; // Light blue container background
//       padding: 5px 15px;
//       // border-radius: 20px;
//       align-items: center;
//       gap: 0px;
//       position: relative;
//     }
  
//     /* Hide default radio buttons */
//     .toggle-btn {
//       display: none;
//     }
  
//     /* Default button styles */
//     .toggle-label {
//       font-size: 20px;
//       cursor: pointer;
//       padding: 5px 15px;
//       border-radius: 20px;
//       transition: all 0.3s ease;
//       color: black;
      
//     }
  
//     /* EN selected by default */
//     #en:checked+label {
//       background-color: #7dabc5;
//       color: white;
//     }
//         #de:checked+label {
//           background-color: #7dabc5;
//           color: white;
//         }
//     /* When hovering over DE:
//      - DE turns white
//      - EN turns black */
//     #de:hover+label {
//       color: white;
//     }
//         #en:hover+label {
//           color: white;
//         }

// }
// /* Mobile menu styles */
// @media (max-width: 830px) {
//   .desktop-nav {
//     display: none;
//   }

//   .mobile-nav {
//     display: block;

//     .mobile-menu-list {
//       list-style: none;
//       padding: 0;
//       margin: 0;
//       display: flex;
//       flex-direction: column;
//       gap: 1.5rem;
//       align-items: center;

//       li {
//         width: 100%;
//         text-align: center;

//         a {
//           color: white;
//           text-decoration: none;
//           font-size: 1.3rem;
//           display: block;
//           padding: 0.8rem;
//           transition: all 0.3s;

//           &:hover {
//             color: #89bcd9;
//             transform: translateX(10px);
//           }
//         }
//       }

//       .language-toggle-mobile {
//         margin-top: 2rem;
//       }
//     }
//   }
// }