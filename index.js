function discountApplication(price){
    let discount = 0.15;
        alert("Al anotarse con un amigo/familiar se le aplica 15% de descuento");
        price -=(price * discount);
    return price;
}

let priceInput = () =>{
    const language = parseInt(prompt("Seleccione el curso que desea realizar : 1-Ingles  2- Aleman 3- Frances")); 
    let price;
    switch(language){
        case 1: price = 15000
        break;
        case 2: price = 50000
        break;
        case 3: price = 25000
        break;
        default: price = 0
        break;
    }
    return price;
}

const pricePlusIva = (totalPrice) => totalPrice *= 1.15;

const inscriptionForm = () => {
    
    const lenguageSelector = parseInt(prompt('Seleccione una de las siguientes opciones en formato numerico y presione ENTER\n' +
                                                '\n1 - Sabe el idioma que quiere estudiar?' /*+
                                                '\n2 - Quiere ver que idiomas tiene a disposicion en un horario especifico?' +
                                                '\n3 - Quiere ver absolutamente todas las opciones de idiomas y horaios?' +
                                                '\n4 - SALIR'*/));

    switch(lenguageSelector){
        case 1: const languageSelected = showLanguages(products);
        const course = showAvailableCourses(languageSelected, products);
        const idCourse = endInscription(course);
        if(idCourse > 0){
            const course = products.filter( item => item.id === idCourse );
            course.currentStudents++
        }
        break;
/*         case 2: showLenguagesTime();
        break;
        case 3: showAll();
        break;
        default: exit(); 
        break;*/
    }
    /*let quantityInput = 0

    const initialAnswer = prompt('Se inscribe solo usted?  Y/N')
    if(initialAnswer == 'n' || initialAnswer == 'N'){
        while(quantityInput == 0){
            quantityInput = 1 +  parseInt(prompt('Ingrese un numero de la cantidad de personas que se inscriben con usted')) 
            if(quantityInput > 0){
                continue;
            }
            alert('debe agregar un numero mayor a 0')
        }
    }else{
        quantityInput = 1;
    }
   

    let totalPrice;
    if(quantityInput > 1 ){
        totalPrice = discountApplication(priceInput())
    }else{
        totalPrice = priceInput()
    }

    alert('El precio final de su curso es de : $' + pricePlusIva(totalPrice))*/
}



const endInscription = (selectedCourse) => {
    const message = prompt('Detalle del curso seleccionado\n' +
    'Idioma: ' + selectedCourse.language + '\n' +
    'Horario: ' + selectedCourse.turn.time + '\n' +
    'Precio: $ ' + selectedCourse.price + '\n\n' +
    'Desea inscribirse? Y/N'
    );

    if(message.toUpperCase() === 'Y'){
        return selectedCourse.id;
    }else{
        alert('Esperamos que se inscriba en otro momento');
    }
}

const showAvailableCourses = (itemString, products) => {
    const arraySelected = products.filter(item => item.language === itemString);
    
    let aux = 0;
    let message = 'Estos son los horarios disponibles para el idioma: ' + itemString + '\n';
    for(let i = 0; i < arraySelected.length; i++) {
        message += '\n' + i + ' - ' + arraySelected[i].turn.time;
        aux = i;
    }

    do{
        itemSelected = parseInt(prompt(message))
     }while(!(itemSelected >= 0 && itemSelected <= aux));

     return arraySelected[itemSelected];
}

const showLanguages = (products) => {
    const languages = [];
    for(let i = 0; i < products.length; i++) {
        if(languages.indexOf(products[i].language) < 0){
            languages.push(products[i].language);
        }
    }

    let aux = 0;
    let languageSelector = 'Por favor ingrese el idioma deseado';
    for(let i = 0; i < languages.length; i++) {
        languageSelector += '\n' + i + ' - ' + languages[i];
        aux = i;
    }

    let itemSelected;

    do{
       itemSelected =  parseInt(prompt(languageSelector))
    }while(!(itemSelected >= 0 && itemSelected <= aux));

    return languages[itemSelected];
}


const products = [
    {
        id: 1,
        language: 'English',
        turn: {
            id: 1,
            label:'Morning',
            time: '9:00 to 13:00'
        },
        price: 15000,
        quantity: 20,
        currentStudents: 0,
    },
    {
        id: 2,
        language: 'English',
        turn: {
            id: 2,
            label:'Afternoon',
            time: '14:00 to 18:00'
        },
        price: 15000,
        quantity: 20,
        currentStudents: 0,
    },
    {
        id: 3,
        language: 'English',
        turn: {
            id: 3,
            label:'Night',
            time: '19:00 to 22:00'
        },
        price: 15000,
        quantity: 20,
        currentStudents: 0,
    },
    {
        id: 4,
        language: 'German',
        turn: {
            id: 1,
            label:'Morning',
            time: '9:00 to 13:00'
        },
        price: 25000,
        quantity: 20,
        currentStudents: 0,
    },
    {
        id: 5,
        language: 'German',
        turn: {
            id: 2,
            label:'Afternoon',
            time: '14:00 to 18:00'
        },
        price: 25000,
        quantity: 20,
        currentStudents: 0,
    },
    {
        id: 6,
        language: 'German',
        turn: {
            id: 3,
            label:'Night',
            time: '19:00 to 22:00'
        },
        price: 25000,
        quantity: 20,
        currentStudents: 0,
    },
    {
        id: 7,
        language: 'French',
        turn: {
            id: 1,
            label:'Morning',
            time: '9:00 to 13:00'
        },
        price: 30000,
        quantity: 20,
        currentStudents: 0,
    },
    {
        id: 8,
        language: 'French',
        turn: {
            id: 2,
            label:'Afternoon',
            time: '14:00 to 18:00'
        },
        price: 30000,
        quantity: 20,
        currentStudents: 0,
    },
]
