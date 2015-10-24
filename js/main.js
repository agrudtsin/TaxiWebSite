
var data = {
    "menu":{
            "main": "TAXI 2",
            "cennik": "CENNIK",
            "kierowci": "DLA KIEROWCÓW",
            "kontakt": "KONTAKT"
        },
    "main-paragrph":{
        "headline":"BeeBeep Taxi",
        "tel1":"(22) 390-4-390",
        "tel2":"888 588 288",
        "tel3":"888 555 255",
        "call-button-text":"Позвонить c мобильного",
        "call-button-phone":"223904390",
        "list":[
            {"item":"nie stresuj się naliczaniem licznika;"},
            {"item":"mówisz nam skąd dokąd cię zawieźć, a my ci mówimy ile to będzie kosztować;"},
            {"item":"nikt cię nie oszuka;"},
            {"item":"zapewniamy spokojną i komfortową jazdę;"},
            {"item":"zawieziemy klienta do każdego miejsca gdzie zechce;"},
            {"item":"posiadamy opcję call back, czyli dzwonisz do nas na stacjonarny numer, a my do ciebie oddzwonimy;"}
        ]
        
    },
     "second-paragrph":{
        "headline":"CENNIK",
        "list":[
            {"item":"Opłata początkowa 8 zł"},
            {"item":"Strefa 1 od 06:00-22:00 - 1,39 zł/km"},
            {"item":"Strefa 1 od 22:00-06:00 - 2,78 zł/km"},
            {"item":"Strefa 2 od 06:00-22:00 - 2,10 zł/km"},
            {"item":"Strefa 2 od 22:00-06:00 - 4,00 zł/km"},
            {"item":""},
            {"item":"W voskresije i prazdniki celyj den - 4zł/km"},
            {"item":"Opłata za godzinę postoju - 20 zł"},
            {"item":"Oplatu za bus - 15zł"}
        ]
        
    },
    "third-paragrph":{
        "headline":"OFERTA  WSPÓŁPRACY DLA KIEROWCÓW",
        "text1":"Zapraszamy do współpracy przewoźników z własnym samochodem",
        "list":[
            {"item":"ukończone 21lat;"},
            {"item":"prawo jazdy kat. B;"},
            {"item":"samochód osobowy 4/5 drzwi;"},
            {"item":"bus;"},
            {"item":"orzeczenie o niekaralności;"},
            {"item":"badanie lekarskie i psychotechniczne;"},
            {"item":"wysoka kultura osobista;"},
            {"item":"biegła znajomość j. polskiego."}
            
        ],
        "text2":"Dodatkowe informacje udzielane są po numerem telefonu",
        "phone":"798-965-965"
        
    },
     "fourth-paragrph":{
        "headline":"KONTAKT",
        "biuro":"Biuro",
        "biuro-phone":"798 965 965",
        "centrala":"Centrala",
        "list":[
            {"item":"(22) 390 4 390"},
            {"item":"(22) 749 9 999"},
            {"item":"888 588 288"},
            {"item":"888 555 255;"}
        ],
        "text2":"Adres mailowy:",
        "email":"beebeeppl@gmail.com"
        
    }
    
};


// The template code
var templateSource = document.getElementById('results-template').innerHTML;
 
// compile the template
var template = Handlebars.compile(templateSource);
 
// The div/container that we are going to display the results in
var resultsPlaceholder = document.getElementById('handlebars-results');
 

 
resultsPlaceholder.innerHTML = template(data);
