body {
  margin: 0;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid grey;
  padding: 20px;
  gap: 20px;
}

footer {
  width: 100%;
  border-top: 1px solid grey;
  height: 60px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: grey;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
}

header img {
  width: 10%;
}

header h1 {
  font-weight: 700;
}

.pokemon-container {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  gap: 20px;
}

.normal {
    background-color: rgb(168, 168, 120) !important;
  }
  
  .normal-bg {
    background-color: rgb(120, 120, 80) !important;
  }
  
  .fire {
    background-color: rgb(240, 128, 48) !important;
  }
  
  .fire-bg {
    background-color: rgb(192, 84, 20) !important;
  }
  
  .water {
    background-color: rgb(104, 144, 240) !important;
  }
  
  .water-bg {
    background-color: rgb(72, 104, 192) !important;
  }
  
  .electric {
    background-color: rgb(248, 208, 48) !important;
  }
  
  .electric-bg {
    background-color: rgb(192, 160, 20) !important;
  }
  
  .grass {
    background-color: rgb(159, 211, 132) !important;
  }
  
  .grass-bg {
    background-color: rgb(102, 182, 60) !important;
  }
  
  .ice {
    background-color: rgb(152, 216, 216) !important;
  }
  
  .ice-bg {
    background-color: rgb(112, 168, 168) !important;
  }
  
  .fighting {
    background-color: rgb(192, 48, 40) !important;
  }
  
  .fighting-bg {
    background-color: rgb(144, 24, 20) !important;
  }
  
  .poison {
    background-color: rgb(182, 122, 177) !important;
  }
  
  .poison-bg {
    background-color: rgb(148, 66, 150) !important;
  }
  
  .ground {
    background-color: rgb(224, 192, 104) !important;
  }
  
  .ground-bg {
    background-color: rgb(184, 160, 56) !important;
  }
  
  .flying {
    background-color: rgb(168, 144, 240) !important;
  }
  
  .flying-bg {
    background-color: rgb(112, 89, 192) !important;
  }
  
  .psychic {
    background-color: rgb(248, 88, 136) !important;
  }
  
  .psychic-bg {
    background-color: rgb(192, 48, 88) !important;
  }
  
  .bug {
    background-color: rgb(168, 184, 32) !important;
  }
  
  .bug-bg {
    background-color: rgb(120, 136, 20) !important;
  }
  
  .rock {
    background-color: rgb(184, 160, 56) !important;
  }
  
  .rock-bg {
    background-color: rgb(144, 128, 40) !important;
  }
  
  .ghost {
    background-color: rgb(112, 88, 152) !important;
  }
  
  .ghost-bg {
    background-color: rgb(80, 56, 112) !important;
  }
  
  .dragon {
    background-color: rgb(112, 56, 248) !important;
  }
  
  .dragon-bg {
    background-color: rgb(72, 40, 192) !important;
  }
  
  .dark {
    background-color: rgb(112, 88, 72) !important;
  }
  
  .dark-bg {
    background-color: rgb(72, 56, 40) !important;
  }
  
  .steel {
    background-color: rgb(184, 184, 208) !important;
  }
  
  .steel-bg {
    background-color: rgb(136, 136, 160) !important;
  }
  
  .fairy {
    background-color: rgb(238, 153, 172) !important;
  }
  
  .fairy-bg {
    background-color: rgb(192, 104, 128) !important;
  }
  
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px !important;
  border-radius: 40px !important;
  margin-top: 50px;
}

.card:hover {
  cursor: pointer;
}

.card-body {
  flex: none !important;
  transform: translateY(-40%);
}

.pokemon-info-text {
  text-align: center;
}

.card-img-top {
  transform: translateY(-30%);
  height: 60% !important;
  object-fit: cover;
  width: 50% !important;
}

.badge {
  font-size: 1.4rem !important;
}

.type {
  gap: 20px;
  display: flex;
  justify-content: center;
}

.fullscreen-container {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  padding-top: 20px;
}

.fullscreen-card {
  width: 100%;
  height: 90%;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
}

.fullscreen-img {
  width: 30%;
  justify-self: center;
  align-self: center;
  display: flex;
}

.fullscree-info-text-section {
  border: 1px solid grey;
  border-radius: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: white;
}

#load-more {
    margin: 20px;
}

.loadingball {
    width: 40%;
    height: fit-content;
    animation: spin 2s linear infinite;
    align-self: center;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(-360deg); }
  }


.fullscreen-navbar {
margin: 10px;
padding-bottom: 10px;
}

.fullscreen-infos {
  width: 100%;

}


.top-half {
  display: flex;
  width: 80%;
  padding-left: 20px;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.fullscreen-img {
  justify-self: center; 
}

.all-infos {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.height-weight {
  display: flex;
  justify-content: space-between;
  width: 50%;
}

.abilities {
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
}

.allabilities {
  display: flex;
  width: 100%;
  justify-content: space-between !important;
}

.evolutions {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.evolutions img {
  width: 10%;
}

.evo {
  display: flex;
  align-items: center;
  flex-direction: column
}

.stats {
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.progress-container {
  display: flex;
  justify-content: space-between;
  gap: 10px; /* Abstand zwischen den Balken */
}

.progress-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vertical {
  width: 50px;
  height: 200px !important;
  display: flex;
  align-items: flex-end;
  position: relative;
}

.vertical .progress-bar {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.progress-value {
  position: absolute;
  color: rgb(49, 47, 47);
  font-weight: bold;
}

.progress-info {
  margin-top: 10px;
  text-align: center;
}

.types {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 100px;
  padding-left: 20px;
}

.arrows {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}

.arrows img {
  width: 10%;
}

.hover {
  cursor: pointer;
}

.search-field {
 display: flex;
}