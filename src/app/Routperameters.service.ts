export class Routperameters {
     studentslist = [
            {
               id:1,
               name:"Guptha",
               Role:"gupth SoftWare Developer",
               Bod:"O-",
            },
            {
                id:2,
                name:"Naveen",
                Role:"SoftWare Developer",
                Bod:"B+",
             },
             {
                id:3,
                name:"Srinu",
                Role:"3SoftWare Developer",
                Bod:"O+",
             },
             {
                id:4,
                name:"malli",
                Role:"67890SoftWare Developer",
                Bod:"AB+",
             }
        ];
    
        getUserDetails(){
        
          return this.studentslist;
     }
   
}