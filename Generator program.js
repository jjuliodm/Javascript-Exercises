const QuoteGenerator = randoNum => {
    switch(randoNum)
    {
        case 1:
            return 'Just one small positive thought in the morning can change your whole day.';
            break;
        case 2:
            return 'Opportunities don\'t happen, you create them.';
            break;
        case 3:
            return 'Love your family, work super hard, live your passion.';
            break;
        case 4:
            return 'It is never too late to be what you might have been.';
            break;
    }
} 

const random = ()=>{
    return Math.floor(Math.random() * 5);
}

console.log(QuoteGenerator(random()));