
let endingPages = [4, 9, 13, 17, 19, 20];   
let currentPage = 0; 

function ending(currentPage) {
    
    for (let i = 0; i <= endingPages.length; i++) {
        if (currentPage === endingPages[i]) {
            return true
        }
    }

    return false
}



while(currentPage !== null){
    currentPage = prompt(pages[currentPage] + " What page would you like to go to?")

    if (currentPage !== null){
        currentPage = parseInt(currentPage)} 
   else if (currentPage === null){
        document.write("<br><h1>The End!</h1><br>") 
      
   }
  
    if (ending(currentPage) === false && currentPage !== null){
       
        document.write(`<p>You turned to page ${currentPage}.</p>`)
        document.write(pages[currentPage])
        
} 
 
    else if (ending(currentPage) === true){ 
        document.write(`<p>You turned to page ${currentPage}.</p>`)
        document.write(pages[currentPage])    
        document.write("<br><h1>The End!</h1></br>")
        currentPage = null

    }
   
}