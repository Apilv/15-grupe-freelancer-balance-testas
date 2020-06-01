const account = [
    { month: 10, income: 150 },
    { month: 1, income: 200, expense: 50 },
    { month: 3, income: 450, expense: 200 },
    { month: 7, expense: 50 },
    { month: 2, income: 50 },
    { month: 5, income: 150, expense: 50 },
    { month: 9, income: 700, expense: 400 },
    { month: 4, income: 10, expense: 300 },
    { month: 6, expense: 50 },
    { month: 11, income: 150, expense: 30 },
    { month: 8, income: 450, expense: 120 },
    { month: 12, expense: 200 }
];


const isvada = document.querySelector('.summary-list')

let monthName = '';


for (let i = 0; i < account.length; i++) {
    
      switch (account[i].month) {
         case 1:
            monthName += ' Sausis,'
        break;
         case 2:
            monthName += ' Vasaris,'
            break;
         case 3:
             monthName += ' Kovas,'
         break;
         case 4:
             monthName += ' Balandis,'
         break;
          case 5:
              monthName += ' Geguze,'
          break;
          case 6:
              monthName += ' Birzelis,'
           break;
           case 7:
               monthName += ' Liepa,'
           break;
           case 8:
               monthName += ' Rugpjutis,'
           break;
           case 9:
               monthName += ' Rugsejis,'
           break;
           case 10:
               monthName += 'Spalis,'
           break;
           case 11:
               monthName += ' Lapkritis,'
           break;
           case 12:
               monthName += ' Gruodis.'
           break;
          default:
              break;
      } 

    if(account[i].income > 0){
        
    }

    }

