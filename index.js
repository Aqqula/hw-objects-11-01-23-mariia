//Mariia Batanova

//Створити конструктор для Cattle
//brand, maxVolume, minVolume, currentVolume, isOn = false
//addWater(value), makeTea(value), TurnOn()

function Cattle(brand, maxVolume, minVolume) {
    this.brand = brand;
    this.maxVolume = maxVolume;
    this.minVolume = minVolume;
  
    this.currentVolume = 0;
    this.isOn = false;
  
    /**
     *
     * @param {number} value
     * @returns {number | boolean}
     */
    this.addWater = function (value) {
      if (value < 0) {
        return false;
      }
  
      this.currentVolume += value;
      if (this.currentVolume >= this.maxVolume) {
        return (this.currentVolume = this.maxVolume);
      }
      return this.currentVolume;
    };
  
    /**
     * 
     * @param {number} value 
     * @returns {number | boolean}
     */
    this.makeTea = function (value) {
      if (value < 0) {
        return false;
      }
      this.currentVolume -= value;
      if (this.currentVolume < 0) {
        return (this.currentVolume = 0);
      }
      return this.currentVolume;
    };
  
    /**
     * 
     * @returns {boolean}
     */
    this.turnOn = function () {
      if (this.currentVolume > maxVolume || this.currentVolume < minVolume || this.isOn === true) {
          return (this.isOn = false);
      }
      return (this.isOn = true);
    };
  }
  
  const cattle2 = new Cattle('Cattle2', 6, 2);
  const cattle1 = new Cattle('Cattle1', 3, 1);
  console.log(cattle1);
  console.log(cattle1.addWater(6));
  console.log(cattle1.turnOn());
  
  console.log(cattle2);
  console.log(cattle2.makeTea(2));
  console.log(cattle2.turnOn());