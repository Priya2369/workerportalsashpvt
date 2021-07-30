 export function calculateAge(bday){
    const birthday = new Date(bday)
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
export function valdPassYear(passYear){
    const passDate= new Date(passYear)
    const n = new Date()
    var timeDifs = n.getFullYear() - passDate.getFullYear()
    if(timeDifs < 50 && timeDifs> -5){
      return true;
    }else{
      return false;
    }
}
