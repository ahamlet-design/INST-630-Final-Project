
/* 
function cutList(list) {
   console.log("fired cut list");
   const range = [...Array(15).keys()];
   return (newArray = range.map((item) => {
     const index = getRandomIntInclusive(0, list.length - 1);
     return list[index];
   }));
 }
 */


//let bookTitles = [] //make empty array???




let url = "https://openlibrary.org/authors/OL7370073A/works.json"; //Angie Thomas and her works
fetch(url)
      .then(res => res.json())
      .then(
        (jsonResult) => {
         console.log(jsonResult)
         //console.log(jsonResult.entries[2]) 

         // (1) Get the title of each book
         // (2) Get the description of each book
         // (3) Get the year of publication of each book
         // (3) Put these elements in designated cards
         
         

         //use array for each method 
   
            let book1 = jsonResult.entries; 
            book1.forEach(element => console.log(element.title));
            book1.forEach(element => console.log(element.description));

            const hateUGiveId = document.getElementById('hateUGiveId');
                        hateUGiveId.innerHTML = book1[2].title;
                        
            const concreteRoseId = document.getElementById('concreteRoseId');
                        concreteRoseId.innerHTML = book1[3].title;

            const blackoutId = document.getElementById('blackoutId');
                        blackoutId.innerHTML = book1[15].title;

            const onTheComeUpId = document.getElementById("onTheComeUpId");
                      onTheComeUpId.innerHTML = book1[10].title;

            const whiteoutId = document.getElementById('whiteoutId');
                     whiteoutId.innerHTML = book1[1].title;
                     //whiteoutId.innerHTML = book1[0].description;

            const findYourVoiceId = document.getElementById('findYourVoiceId');
                  findYourVoiceId.innerHTML = book1[17].title;
            
         
            //https://www.webmound.com/create-dynamic-html-element-css-using-javascript/
      


         


      // Fetch the descriptions of three of the books, entries: [4], [10], and [18]
   
        },
        (error) => {
          
        }
      )

      


/*
const hateUGive = document.getElementById('hateUGive');
hateUGive.innerHTML = `
   <div class = "hateUGive" >
         <p>//The Hate U Give</p>
   </div>
`;
*/








