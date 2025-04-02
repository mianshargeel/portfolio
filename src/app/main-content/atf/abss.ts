// <section id="header">
//   <div class="hero-section">

//    <!-- ✅ Top bar with logo and burger icon -->
//     <div class="top-bar">
//         <div class="logo">
//           <img src="./../../../assets/img/1-hero/logo.png" alt="Logo" />
//           <p>C.Fohrer <br><span>{{ currentTexts['developer'] }}</span></p>
//         </div>

//         <div class="burger-menu" (click)="toggleMenu()">
//           <img src="./../../../assets/img/1-hero/burger-menu.png" alt="Menu" />
//         </div>
//     </div>

//       <!-- ✅ Burger Menu Overlay -->
//       <div class="menu-image-overlay" [class.show]="isMenuOpen">
//         <img src="./../../../assets/img/1-hero/burger-bg.png" alt="Navigation Menu" />

//         <!-- Mobile Navbar rendered inside the overlay -->
//         <div class="navbar-overlay">
//          <app-navbar
//       [isMobileView]="true"
//       (menuClosed)="isMenuOpen = false"> <!-- Add this event binding -->
//     </app-navbar>
//         </div>
//       </div>


//     <!-- Hero Layout: Left (Image), Right (Content) for large screen -->
//     <div class="hero-content">
//       <div class="image-container">
//         <img src="./../../../assets/img/1-hero/blue-bg2.png" class="blue-bg" alt="Background">
//         <img src="./../../../assets/img/1-hero/subject 3.png" class="person-img" alt="Claudia Fohrer">
//       </div>

//       <div class="right-container">
//         <div class="media-icons">
//           @for(link of medialinks; track link.name) {
//             <a href="{{link.url}}" target="_blank"><img src="{{link.img}}" alt="{{link.name}}"></a>
//           }
//         </div>

//         <div class="text-content">
//           <h1>Claudia Fohrer</h1>
//           <h2>{{currentTexts['frontendDeveloper']}}</h2>
//         </div>

//         <div class="down-arrow">
//           <img (click)="scrollToDown()" src="./../../../assets/img/1-hero/Arrow down.png" alt="Scroll Down">
//         </div>
//       </div>
//     </div>
//   </div>

//   <!-- Desktop Navbar: shown only on large screens -->
//   <div class="navbar-desktop">
//     <app-navbar [isMobileView]="false"></app-navbar>
//   </div>
// </section>
//--------------------------------scss--------------------------------
.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  padding-bottom: 29px;
  height: 705px;
  width: 100%; // Fix width for centering
  max-width: 100%;
  margin: 0 auto; // Centering horizontally
  position: relative;

  // border: 2px dotted lightblue;
  .top-bar {
    display: none; // Only show on mobile
  }

  .hero-content {
    display: flex;
    width: 100%;
  }

  /* Left side - Image section */
  .image-container {
    position: relative;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 2s ease-in;

    .blue-bg {
      width: 525px;
      height: 571px;
      position: absolute;
      transform: rotate(-45deg);

      // transition: transform 2s ease-in;
      &:hover {
        transform: rotate(-65deg);

      }
    }

    .person-img {
      width: 535px;
      height: 700px;
      position: relative;
    }
  }

  /* Right side - Content section */
  .right-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    position: relative;
    text-align: center;

    .media-icons {
      position: absolute;
      top: -40px;
      right: 20px;
      display: flex;
      flex-direction: column;
      gap: 15px;


    }

    .text-content {
      display: flex;
      flex-direction: column;
      align-items: center;

      .logo {
        width: 40px;
        cursor: pointer;
        transition: transform 0.3s;
        padding-bottom: 20px;

        &:hover {
          transform: scale(1.2);
        }
      }

      p {
        font-family: "Anta", sans-serif;
        font-size: 16px;

        span {
          font-family: "Josefin Sans", sans-serif;
          font-size: 14px;
          color: #89bcd9;
        }
      }

      h1 {
        font-size: 72px;
        font-family: "Anta", sans-serif;
        font-weight: 400;
      }

      h2 {
        font-size: 34px;
        font-weight: 400;
        font-family: "Josefin Sans", sans-serif;
        color: #ccc;
      }
    }

    .down-arrow {
      display: flex;
      justify-content: center;
      margin-top: 20px;

      img {
        width: 40px;
        cursor: pointer;
        animation: bounce 2s infinite;

        &:hover {
          filter: brightness(0.9);
          background-color: #2d3840;
        }
      }
    }
  }
}

// ========== NEW NAVBAR STYLES ========== //
.navbar-desktop {
  display: block !important; // Show by default for desktop
}

// Mobile menu overlay styles - UPDATED
.menu-image-overlay {
  display: none;
  position: absolute; // Changed from absolute to fixed
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  // z-index: 999;
  justify-content: center;
  align-items: center; // Changed from flex-start to center

  img {
    position: absolute;
      top: 100px;
      left: 233px;
      width: 394px;
      height: auto;
      object-fit: cover;
      z-index: 1;
  }

    /* Menu container */
    .navbar-overlay {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 400px;
      padding: 2rem;
  
      /* Vertical menu list */
      #navbar-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.8rem;
  
        /* Menu items */
        .nav-menu-list {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          width: 100%;
  
          a {
            color: white;
            font-size: 1.4rem;
            font-family: "Josefin Sans", sans-serif;
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
            padding: 0.5rem 1rem;
  
            &:hover {
              color: #89bcd9;
              transform: translateX(8px);
  
              &::after {
                content: '→';
                position: absolute;
                right: -20px;
                opacity: 0;
                animation: fadeIn 0.3s forwards;
              }
            }
          }
        }
            /* Language toggle */
            .language-toggle {
              margin-top: 2.5rem;
              display: flex;
              gap: 1rem;
              justify-content: center;
      
              .toggle-label {
                color: white;
                font-size: 1.1rem;
                cursor: pointer;
                transition: color 0.3s;
      
                &:hover {
                  color: #89bcd9;
                }
              }
            }
    }
  }

  &.show {
    display: flex;
  }
}

// Burger menu styles - UPDATED
.burger-menu {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: none; // Hidden by default

  img {
    width: 32px;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
}

/* Animation for the Down Arrow */
@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }
}

/* Responsive Design */
@media (max-width: 1160px) {
  h1 {
    font-size: 50px !important;
  }

  h2 {
    font-size: 22px !important;
  }
}

@media (max-width: 1080px) {
  .text-content {
    display: flex !important;
    gap: 13px !important;
  }

  h1 {
    font-size: 48px !important;
  }

  h2 {
    font-size: 22px !important;
  }
}

@media (max-width: 1024px) {
  .hero-section {
    padding: 33px 33px 0px 33px;
    height: 582px;
  }

  .blue-bg {
    width: 420px !important;
    height: 440px !important;
  }

  .person-img {
    width: 448px !important;
    height: 550px !important;
  }

  h1 {
    font-size: 50px !important;
  }

  h2 {
    font-size: 22px !important;
  }
}

@media (max-width: 900px) {
  .blue-bg {
    width: 410px !important;
    height: 435px !important;
  }

  .person-img {
    width: 426px !important;
    height: 551px !important;
  }

  h1 {
    font-size: 46px !important;
  }
}

// ========== UPDATED MOBILE STYLES ========== //
// @media (max-width: 830px) {
//   #header {
//     padding-bottom: 50px;
//   }

//   // Hide desktop navbar
//   .navbar-desktop {
//     display: none;
//   }

//   // Show burger menu
//   .burger-menu {
//     display: block;
//   }

//   // Hero section mobile styles
//   .hero-section {
//     flex-direction: column;
//     align-items: center;
//     padding: 20px;

//     .top-bar {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       width: 100%;
//       margin-bottom: 20px;

//       .logo {
//         display: flex;
//         flex-direction: column;
//         gap: 10px;

//         img {
//           width: 56px;
//         }

//         p {
//           font-size: 15px;
//           font-family: "Anta", sans-serif;
//           margin: 0;

//           span {
//             font-family: "Josefin Sans", sans-serif;
//             font-size: 13px;
//             color: #89bcd9;
//           }
//         }
//       }
//     }

//     .hero-content {
//       flex-direction: column;
//       align-items: center;
//       text-align: center;
//     }

//     .image-container {
//       .blue-bg {
//         width: 260px !important;
//         height: 280px !important;
//         position: absolute;
//         transform: none;
//       }

//       .person-img {
//         width: 280px !important;
//         height: 370px !important;
//         position: relative;
//       }
//     }

//     .right-container {
//       width: 100%;

//       .media-icons {
//         display: none;
//       }

//       .text-content {
//         margin-top: 20px;

//         h1 {
//           font-size: 34px !important;
//         }

//         h2 {
//           font-size: 20px !important;
//         }
//       }

//       .down-arrow img {
//         width: 30px;
//       }
//     }
//   }
// }

// Additional mobile-specific styles for smaller screens
@media (max-width: 480px) {
  .menu-image-overlay {
    .navbar-overlay {
      width: 90%;

      #navbar-section {
        .nav-menu-list a {
          font-size: 1.2rem;
        }
      }
    }
  }
}