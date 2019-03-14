
export function direction(deg){

    if (deg >= 20 && deg < 70) {
      return "North-West";
    } else if (deg >= 71 && deg < 110) {
      return "West";
    } else if (deg >= 111 && deg < 155) {
      return "South-West";
    } else if (deg >= 156 && deg < 209) {
      return "South";
    } else if (deg >= 210 && deg < 240) {
      return "South-East";
    } else if (deg >= 241 && deg < 300) {
      return "East";
    } else if (deg >= 301 && deg < 335) {
      return "North-East";
    }  else if (deg >= 336 && deg < 19) {
      return "North";
    }

}
    